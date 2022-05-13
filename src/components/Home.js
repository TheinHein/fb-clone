import { Grid } from "@mui/material";
import { useGetFriendsPosts } from "../hooks/useGetFriendsPosts";
import CreatePostCard from "./CreatePostCard";
import Post from "./Post";
import Facebook from "./PostSkeleton";

function Home() {
  const { posts, loading } = useGetFriendsPosts();

  return (
    <Grid container rowSpacing={1} sx={{ marginTop: 0.1, marginBottom: 1 }}>
      <Grid item xs={12}>
        <CreatePostCard />
      </Grid>
      {loading ? (
        <Facebook />
      ) : (
        <>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}

export default Home;
