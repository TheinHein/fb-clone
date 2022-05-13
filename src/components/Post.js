import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, CardMedia, Divider } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ActionBtns from "./ActionBtns";
import { likeCommentShare } from "../actions";
import Reaction from "./Reaction";
import Bod from "./Bod";
import PostStatus from "./PostStatus";
import Counter from "./Counter";
import ClearBtn from "./ClearBtn";
import HorMoreBtn from "./HorMoreBtn";

export default function Post({ post }) {
  const { photoURL, fileURL, text, content, timestamp, displayName } = post;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label={displayName}
            src={photoURL}
            width={40}
            height={40}
          />
        }
        title={displayName}
        subheader={<PostStatus timestamp={timestamp} icon={<PeopleIcon />} />}
        action={
          <>
            <HorMoreBtn />
            <ClearBtn />
          </>
        }
      />
      <CardContent>
        <Typography>{text}</Typography>
        {content && <Bod content={content} />}
      </CardContent>
      {fileURL && <CardMedia component="img" src={fileURL} alt="sample" />}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Reaction />
        <Counter name={"Comments"} counts={2} />
      </CardActions>
      <Divider sx={{ width: "95%", margin: "0 auto" }} />
      <CardActions>
        <ActionBtns color={"gray"} actions={likeCommentShare} />
      </CardActions>
    </Card>
  );
}
