import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import FB from "../FB";
import checkArray from "../utils/checkArray";

function useSearchUsers(input) {
  const context = useAuthContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (input !== "") {
      (async () => {
        const allUsers = await FB.getUsersByName(input);
        let users = allUsers.filter((user) => user.id !== context.user.id);
        users = users.map((user) =>
          user.friends &&
          checkArray({
            array: user.friends,
            prop: "id",
            check: context.user.id,
          })
            ? { ...user, friend: true }
            : { ...user, friend: false }
        );
        setUsers(users);
      })();
    }
  }, [input, context.user.id]);

  return users;
}

export default useSearchUsers;
