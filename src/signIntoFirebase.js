import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signIntoFirebase = async (user) => {
  const { email, password } = user;
  await signInWithEmailAndPassword(auth, email, password);
};
