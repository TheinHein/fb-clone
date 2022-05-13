import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../firebase";

function useSearchUsers(input) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (input !== "") {
      (async () => {
        const users = await getUsersFromFirestore(input);
        setUsers(users);
      })();
    }
  }, [input]);

  return users;
}

const getUsersFromFirestore = async (input) => {
  console.log("Fetching Users");
  const q = query(
    collection(db, "users"),
    orderBy("lowerCaseName"),
    startAt(input.toLowerCase()),
    endAt(input.toLowerCase() + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default useSearchUsers;
