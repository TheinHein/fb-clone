import { Divider, Stack, Typography } from "@mui/material";
import About from "./About";
import CoverPhoto from "./CoverPhoto";
import Friends from "./Friends";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import PostContainer from "../Home/PostContainer";
import FriendCardSM from "../Cards/FriendCardSM";
import CreatePostCard from "../Cards/CreatePostCard";
import useGetUserData from "../../hooks/useGetUserData";

function Profile() {
  const context = useAuthContext();
  const userData = useGetUserData(context.user.id);
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await FB.getAllFriends(userData, setFriends);
      setLoading(false);
    })();
  }, [userData]);

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

      <CreatePostCard />
    </Stack>
  );
}

export default Profile;
