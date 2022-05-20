import checkArray from "../utils/checkArray";
import Counter from "./Counter";

function LikesCounter(props) {
  const { likedPosts, postId, likes } = props;

  const generateText = () => {
    if (
      likedPosts &&
      checkArray({
        array: likedPosts,
        prop: "id",
        check: postId,
      })
    ) {
      return `You and ${likes.length - 1} others `;
    } else {
      return likes.length;
    }
  };

  return <Counter name="likes" counts={generateText()} />;
}

export default LikesCounter;
