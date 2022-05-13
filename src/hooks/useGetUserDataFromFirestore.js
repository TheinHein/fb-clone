import { useCallback, useEffect, useState } from "react";
import { getUserDataFromFirestore } from "../getUserDataFromFirestore";

function useGetUserDataFromFirestore(userId) {
  const [user, setUser] = useState({});

  const getUserData = useCallback(async () => {
    setUser(await getUserDataFromFirestore(userId));
  }, [userId]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return user;
}

export default useGetUserDataFromFirestore;
