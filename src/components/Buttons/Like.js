import { Button } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import useGetUserData from "../../hooks/useGetUserData";
import checkArray from "../../utils/checkArray";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

function Like({ post }) {
  const context = useAuthContext();
  const userData = useGetUserData(context.user.id);

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
      fullWidth
      onClick={handleClickLike}
      startIcon={<ThumbUpOutlinedIcon />}
      endIcon="Like"
      sx={{
        color:
          userData.likedPosts &&
          checkArray({
            array: userData.likedPosts,
            prop: "id",
            check: post.id,
          }) &&
          "red",
      }}
    />
  );
}

export default Like;
