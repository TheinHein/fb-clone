import {
  Avatar,
  Button,
  Paper,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FB from "../FB";
import Loading from "./Loading";
import { useAuthContext } from "../context/AuthContext";
import _ from "lodash";

function UserProfile() {
  const params = useParams();
  const context = useAuthContext();
  const [mutualFriends, setMutualFriends] = useState(0);

  const [userData, setUserData] = useState({});

  const [friends, setFriends] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const user = await FB.getUserData(context.user.id);
      if (userData.friends) {
        userData.friends.forEach(async (friend) => {
          const friendData = await FB.getUserDataByRef(friend.id);
          setFriends((prev) => _.uniqBy(prev.concat(friendData)), "id");

          if (user.friends) {
            user.friends.some((f) => {
              return (
                f.id === friend.id && setMutualFriends((prev) => (prev += 1))
              );
            });
          }
        });
      }
    })();
  }, [context.user.id, userData.friends]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const userData = await FB.getUserData(params.friendId);
      setUserData(userData);
      setLoading(false);
    })();
  }, [params.friendId]);

  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <Stack divider={<Divider />} p={1} spacing={2} bgcolor="white">
          <>
            <Avatar
              src={userData.photoURL}
              sx={{ width: 140, height: 140, border: "5px solid white" }}
            />
            <Typography variant="h2">{userData.displayName}</Typography>
            {userData.requestedFriends &&
              userData.requestedFriends.some(
                (friend) => friend.id === context.user.id
              ) && (
                <>
                  <Typography variant="h3" align="center">
                    Sent you a friend request
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Button fullWidth variant="contained">
                      Respond
                    </Button>
                    <Button fullWidth variant="contained" color="inherit">
                      Message
                    </Button>
                    <Button variant="contained" color="inherit">
                      <MoreHorizOutlinedIcon />
                    </Button>
                  </Stack>
                </>
              )}
          </>
          <Typography>Works at</Typography>
          <>
            <Typography variant="h3">Friends</Typography>
            <Typography>
              {userData.friends ? `${userData.friends.length}` : "0"} (
              {mutualFriends} mutual)
            </Typography>
            <Stack
              direction="row"
              rowGap={2}
              columnGap={2}
              flexWrap="wrap"
              justifyContent="center"
            >
              {friends.map((friend) => (
                <Paper key={friend.id} sx={{ borderRadius: 1 }}>
                  <Avatar
                    variant="square"
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  <Typography variant="h5" sx={{ p: 2, pt: 1, pl: 1 }}>
                    {friend.displayName}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </>
        </Stack>
      )}
    </>
  );
}

export default UserProfile;
