import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  updateProfile,
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
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import _ from "lodash";
import { auth, db, storage } from "./firebase";

const LOADING_IMAGE_URL = "https://www.google.com/images/spin-32.gif?a";

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
    const { uid, displayName, email, phoneNumber, photoURL, bod, gender } =
      user;
    try {
      await setDoc(
        doc(db, "users", uid),
        {
          displayName,
          email,
          phoneNumber,
          photoURL,
          bod,
          gender,
          lowerCaseName: user.displayName.toLowerCase(),
        },
        {
          merge: true,
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData = async (userId) => {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    const userData = userDoc.data();
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

  //

  const getDocumentsInQuery = async (query) => {
    const documents = await getDocs(query);
    return documents.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // -- users -- posts

  const createPost = async (user, text, file) => {
    const post = {
      text,
      likes: [],
      timestamp: serverTimestamp(),
      by: doc(db, `users/${user.id}`),
      fileURL: LOADING_IMAGE_URL,
      totalComments: 0,
    };

    const postsRef = collection(db, `users/${user.id}/posts`);
    const postRef = await addDoc(postsRef, post);

    if (file) {
      const filePath = `${user.id}/${postRef.id}/${file.name}`;
      const newFileRef = ref(storage, filePath);
      const fileSnapShot = await uploadBytesResumable(newFileRef, file);
      const publicFileURL = await getDownloadURL(newFileRef);

      await updateDoc(postRef, {
        fileURL: publicFileURL,
        storageURI: fileSnapShot.metadata.fullPath,
      });
    }
  };

  const getAllFriendsPosts = async (userId, setPosts) => {
    const userData = await getUserData(userId);
    if (userData.friends) {
      userData.friends.forEach(async (friend) => {
        const friendData = await getUserData(friend.id);
        const q = query(collection(db, `users/${friend.id}/posts`));
        onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
          setPosts(
            _.orderBy(
              _.uniqBy(
                snapshot.docs.map((post) => {
                  return {
                    displayName: friendData.displayName,
                    photoURL: friendData.photoURL,
                    ...post.data(),
                    id: post.id,
                  };
                }),
                "id"
              ),
              ["timestamp.seconds"],
              ["desc"]
            )
          );
        });
      });
    }
  };

  return {
    setAuthStatePersistence,
    createUser,
    signIn,
    updateUserProfile,
    getUserData,
    getUsersByName,
    createPost,
    getAllFriendsPosts,
  };
})();
