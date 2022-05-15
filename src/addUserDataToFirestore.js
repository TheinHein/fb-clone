import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const addUserDataToFirestore = async (user) => {
  const { displayName, email, phoneNumber, photoURL, uid, bod, gender } = user;

  await setDoc(
    doc(db, "users", uid),
    {
      displayName,
      lowerCaseName: displayName.toLowerCase(),
      email,
      phoneNumber,
      photoURL,
      bod,
      gender,
    },
    {
      merge: true,
    }
  );
};
