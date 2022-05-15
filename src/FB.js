import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
} from "firebase/firestore";
import _ from "lodash";
import { auth, db } from "./firebase";

export default (() => {
  // Authentication
  const createUser = async (user) => {
    const { email, password } = user;
    await createUserWithEmailAndPassword(auth, email, password);
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
    await setDoc(
      doc(db, "users", user.uid),
      {
        ...user,
        lowerCaseName: user.displayName.toLowerCase(),
      },
      {
        merge: true,
      }
    );
  };

  const getUserDoc = async (userId) => {
    const docSnap = await getDoc(doc(db, "users", userId));
    const userDoc = docSnap.data();
    return userDoc;
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

  const getDocumentsInQuery = async (query) => {
    const documents = await getDocs(query);
    return documents.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // -- users -- posts

  const getAllFriendsPosts = async (userId, setPosts) => {
    const userDoc = await getUserDoc(userId);
    await userDoc.friends.forEach(async (friend) => {
      const q = query(collection(db, `users/${friend.id}/posts`));
      onSnapshot(q, (postSnapshots) => {
        postSnapshots.docs.forEach(async (postSnapshot) => {
          const friendDoc = await getDoc(
            doc(db, `users/${postSnapshot.data().by.id}`)
          );
          const { displayName, photoURL } = friendDoc.data();
          setPosts((prev) =>
            _.orderBy(
              _.uniqBy(
                prev.concat({
                  ...postSnapshot.data(),
                  displayName,
                  photoURL,
                  userId: friendDoc.id,
                  id: postSnapshot.id,
                }),
                "id"
              ),
              ["timestamp.seconds"],
              ["desc"]
            )
          );
        });
      });
    });
  };

  return {
    createUser,
    updateUserProfile,
    createUserDoc,
    getUserDoc,
    getUsersByName,
    getAllFriendsPosts,
  };
})();
