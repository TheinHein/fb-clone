import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export const signUpToFirebase = async (user) => {
  const { email, password } = user;
  await createUserWithEmailAndPassword(auth, email, password);
};

export const updateUserInFirebase = async (user) => {
  const { firstName, lastName, phoneNumber } = user;
  await updateProfile(auth.currentUser, {
    displayName: firstName + " " + lastName,
    phoneNumber,
  });
};
