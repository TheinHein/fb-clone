import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  endAt,
  getDoc,
  getDocs,
  query,
  setDoc,
  startAt,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,
  runTransaction,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import _ from "lodash";
import { auth, db, storage } from "./firebase";

export default (() => {
  // Authentication

  const setAuthStatePersistence = async (user, next) => {
    await setPersistence(auth, browserSessionPersistence);
    return next(user);
  };

  const createUser = async (user) => {
    const { email, password } = user;
    await createUserWithEmailAndPassword(auth, email, password);
    await updateUserProfile(user);
    await createUserDoc({ ...auth.currentUser, ...user });
  };

  const signIn = async (user) => {
    const { email, password } = user;
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const updateUserProfile = async (user) => {
    const { firstName, lastName, phoneNumber } = user;
    await updateProfile(auth.currentUser, {
      displayName: firstName + " " + lastName,
      phoneNumber,
    });
  };

  // Firestore
  // -- users
  const createUserDoc = async (user) => {
    const { uid, displayName, email, phoneNumber, photoURL, dob, gender } =
      user;
    await setDoc(
      doc(db, "users", uid),
      {
        displayName,
        email,
        phoneNumber,
        photoURL,
        dob,
        gender,
        lowerCaseName: user.displayName.toLowerCase(),
      },
      {
        merge: true,
      }
    );
  };

  const getUserData = async (userId) => {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    const userData = { ...userDoc.data(), id: userDoc.id };
    return userData;
  };

  const getUserDataByRef = async (userRef) => {
    const userDocRef = doc(db, `users/${userRef}`);
    const userDoc = await getDoc(userDocRef);
    const userData = { ...userDoc.data(), id: userDoc.id };
    return userData;
  };

  const getUsersByName = (name) => {
    const q = query(
      collection(db, "users"),
      orderBy("lowerCaseName"),
      startAt(name.toLowerCase()),
      endAt(name.toLowerCase() + "\uf8ff")
    );
    return getDocumentsInQuery(q);
  };

  // -- general

  const updateUserDocument = async (userId, updates) => {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, updates);
  };

  const getDocumentsInQuery = async (query) => {
    const documents = await getDocs(query);
    return documents.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // -- users -- posts

  const createPost = async (data) => {
    const { userId, text, file, type } = data;
    const filePath = file && `${userId}/posts/${file.name}`;
    const newFileRef = file && ref(storage, filePath);
    const fileSnapShot = file && (await uploadBytesResumable(newFileRef, file));
    const publicFileURL = file && (await getDownloadURL(newFileRef));

    const post = {
      text,
      likes: [],
      timestamp: serverTimestamp(),
      by: doc(db, `users/${userId}`),
      totalComments: 0,
      fileURL: file && publicFileURL,
      storageURI: file && fileSnapShot.metadata.fullPath,
      type,
      userId,
    };

    const postsRef = collection(db, `users/${userId}/posts`);
    const postRef = await addDoc(postsRef, post);

    if (type === "Public") {
      const globalPostDocRef = doc(db, `globalPosts`, postRef.id);
      await setDoc(globalPostDocRef, post);
    }
  };

  const getAllGlobalPosts = async (userId, setPosts) => {
    const q = query(
      collection(db, "globalPosts"),
      where("userId", "!=", `${userId}`),
      limit(5)
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === "added") {
          const userData = await getUserDataByRef(change.doc.data().by.id);
          setPosts((prev) =>
            _.orderBy(
              _.uniqBy(
                prev.concat({
                  displayName: userData.displayName,
                  photoURL: userData.photoURL,
                  userId: userData.id,
                  ...change.doc.data(),
                  id: change.doc.id,
                }),
                "id"
              ),
              ["timestamp.seconds"],
              ["desc"]
            )
          );
        }
      });
    });
  };

  const getAllFriendsPosts = async (userId, setPosts) => {
    const userData = await getUserData(userId);
    if (userData.friends) {
      userData.friends.forEach(async (friend) => {
        const friendData = await getUserData(friend.id);
        const q = query(collection(db, `users/${friend.id}/posts`));
        onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              setPosts((prev) =>
                _.orderBy(
                  _.uniqBy(
                    prev.concat({
                      displayName: friendData.displayName,
                      photoURL: friendData.photoURL,
                      userId: friendData.id,
                      ...change.doc.data(),
                      id: change.doc.id,
                    }),
                    "id"
                  ),
                  ["timestamp.seconds"],
                  ["desc"]
                )
              );
            }
          });
        });
      });
    }
  };

  // -- friends

  const handleFriendShip = async (userId, friendId, type) => {
    if (type === "request") {
      const friendDocRef = doc(db, `users/${friendId}`);
      const userData = {
        requestedFriends: arrayUnion(friendDocRef),
      };
      await updateUserDocument(userId, userData);
      const userDocRef = doc(db, `users/${userId}`);
      const friendData = {
        pendingRequests: arrayUnion(userDocRef),
      };
      await updateUserDocument(friendId, friendData);
    } else if (type === "accept") {
      const friendDocRef = doc(db, `users/${friendId}`);
      const userData = {
        friends: arrayUnion(friendDocRef),
        pendingRequests: arrayRemove(doc(db, `users/${friendId}`)),
      };
      await updateUserDocument(userId, userData);
      const userDocRef = doc(db, `users/${userId}`);
      const friendData = {
        friends: arrayUnion(userDocRef),
        requestedFriends: arrayRemove(doc(db, `users/${userId}`)),
      };
      await updateUserDocument(friendId, friendData);
    }
  };

  const getAllPendingRequests = async (userId, setPendingRequests) => {
    const userData = await getUserData(userId);
    if (userData.pendingRequests) {
      userData.pendingRequests.forEach(async (friend) => {
        const friendData = await getUserData(friend.id);
        const { displayName, photoURL } = friendData;
        setPendingRequests((prev) =>
          _.uniqBy(
            prev.concat({ displayName, photoURL, id: friendData.id }),
            "id"
          )
        );
      });
    }
  };

  // -- users -- posts -- comments

  const createComment = async (userId, postId, comment) => {
    const commentsRef = collection(
      db,
      `users/${userId}/posts/${postId}/comments`
    );
    await addDoc(commentsRef, {
      text: comment,
      timestamp: serverTimestamp(),
      by: doc(db, `users/${userId}`),
    });
    const postDocRef = doc(db, `users/${userId}/posts`, `${postId}`);
    await runTransaction(db, async (transaction) => {
      const postDoc = await transaction.get(postDocRef);
      if (!postDoc.exists()) {
        throw new Error("POST NOT EXIST");
      }
      const newTotalComments = postDoc.data().totalComments + 1;
      transaction.update(postDocRef, { totalComments: newTotalComments });
    });
  };

  const getInitComments = ({ userId, postId, setComments, setLastVisible }) => {
    const q = query(
      collection(db, `users/${userId}/posts/${postId}/comments`),
      orderBy("timestamp", "desc"),
      limit(1)
    );
    getAllCommentsInQuery({ q, setComments, setLastVisible });
  };

  const getMoreComments = ({
    userId,
    postId,
    lastVisible,
    setComments,
    setLastVisible,
  }) => {
    const q = query(
      collection(db, `users/${userId}/posts/${postId}/comments`),
      orderBy("timestamp", "desc"),
      startAfter(lastVisible),
      limit(1)
    );
    getAllCommentsInQuery({ q, setComments, setLastVisible });
  };

  const getAllCommentsInQuery = async ({ q, setComments, setLastVisible }) => {
    const comments = await getDocs(q);
    setLastVisible(comments.docs[comments.docs.length - 1]);
    comments.forEach(async (comment) => {
      const userData = await getUserDataByRef(comment.data().by.id);

      setComments((prev) =>
        _.orderBy(
          _.uniqBy(
            prev.concat({
              displayName: userData.displayName,
              photoURL: userData.photoURL,
              userId: userData.id,
              ...comment.data(),
              id: comment.id,
            }),
            "id"
          ),
          ["timestamp.seconds"],
          ["desc"]
        )
      );
    });
  };

  return {
    setAuthStatePersistence,
    createUser,
    signIn,
    logOut,
    getUserData,
    getUsersByName,
    createPost,
    getAllGlobalPosts,
    getAllFriendsPosts,
    handleFriendShip,
    getAllPendingRequests,
    createComment,
    getInitComments,
    getMoreComments,
  };
})();
