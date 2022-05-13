import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "./firebase";

const setAuthStatePersistence = async (user, next) => {
  await setPersistence(auth, browserSessionPersistence);
  // Existing and future Auth states are now persisted in the current
  // session only. Closing the window would clear any existing state even
  // if a user forgets to sign out.
  // ...
  // New sign-in will be persisted with session persistence.
  return next(user);
};

export default setAuthStatePersistence;
