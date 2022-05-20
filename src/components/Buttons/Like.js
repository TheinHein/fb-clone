import { alpha, Button } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import useGetUserDataRT from "../../hooks/useGetUserDataRT";
import checkArray from "../../utils/checkArray";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

function Like({ post }) {
  const context = useAuthContext();
  const userData = useGetUserDataRT();

  const handleClickLike = async () => {
    await FB.updatePostLikes({
      ownerId: post.userId,
      userId: context.user.id,
      postId: post.id,
    });
  };

  return (
    <Button
      size="small"
      color="inherit"
      fullWidth
      onClick={handleClickLike}
      startIcon={<ThumbUpOutlinedIcon />}
      endIcon="Like"
      sx={{
        bgcolor:
          userData.likedPosts &&
          checkArray({
            array: userData.likedPosts,
            prop: "id",
            check: post.id,
          }) &&
          alpha("#1878f3", 0.2),
      }}
    />
  );
}

export default Like;
