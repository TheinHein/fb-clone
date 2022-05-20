import { Divider, Stack, Typography } from "@mui/material";
import About from "./About";
import CoverPhoto from "./CoverPhoto";
import Friends from "./Friends";
import Bod from "./Bod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import PostContainer from "../Home/PostContainer";
import FriendCardSM from "../Cards/FriendCardSM";

function Profile() {
  const context = useAuthContext();
  const [userData, setUserData] = useState({});
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const userData = await FB.getUserData(context.user.id);
      setUserData(userData);
      await FB.getAllFriends(userData, setFriends);
      setLoading(false);
    })();
  }, [context.user.id]);

  useEffect(() => {
    (async () => {
      await FB.getAllPosts(context.user.id, setPosts);
    })();
  }, [context.user.id]);

  const handleClickShowProfile = (friendId) => {
    navigate(`/users/${friendId}`);
    setFriends([]);
  };

  return (
    <Stack spacing={1} divider={<Divider />} bgcolor="white" p={1}>
      <CoverPhoto />
      <About />
      <>
        <Friends />
        <Stack direction="row" rowGap={2} columnGap={2} flexWrap="wrap">
          {friends.map((friend) => (
            <FriendCardSM
              key={friend.id}
              friend={friend}
              handleClickShowProfile={handleClickShowProfile}
            />
          ))}
        </Stack>
      </>
      <>
        <Typography variant="h3">Posts</Typography>
        {posts.map((post) => (
          <PostContainer
            post={{
              ...post,
              displayName: userData.displayName,
              photoURL: userData.photoURL,
            }}
            loading={loading}
            key={post.id}
          />
        ))}
      </>
      <Bod />
    </Stack>
  );
}

export default Profile;
