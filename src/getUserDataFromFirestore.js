import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const getUserDataFromFirestore = async (userId) => {
  const docSnap = await getDoc(doc(db, "users", userId));
  const userData = await docSnap.data();
  return userData;
};
