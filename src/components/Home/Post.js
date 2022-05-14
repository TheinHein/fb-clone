import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  CardHeader,
  CardMedia,
  Divider,
  Skeleton,
  Button,
  Stack,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ActionBtns from "../ActionBtns";
import { likeCommentShare } from "../../actions";
import Reaction from "../Reaction";
import Bod from "../Bod";
import PostStatus from "../PostStatus";
import Counter from "../Counter";
import ClearBtn from "../ClearBtn";
import HorMoreBtn from "../HorMoreBtn";

export default function Post({ post, loading }) {
  const { photoURL, fileURL, text, content, timestamp, displayName } = post;
  return (
    <Card>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              aria-label={displayName}
              src={photoURL}
              width={40}
              height={40}
            />
          )
        }
        title={
          <Typography>
            {loading ? (
              <Skeleton animation="wave" width="40%" height={10} />
            ) : (
              displayName
            )}
          </Typography>
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="20%" />
          ) : (
            <PostStatus timestamp={timestamp} icon={<PeopleIcon />} />
          )
        }
        action={
          loading ? (
            <Stack direction="row" spacing={2}>
              <Skeleton animation="wave" height={30} width={30} />
              <Skeleton animation="wave" height={30} width={30} />
            </Stack>
          ) : (
            <>
              <HorMoreBtn />
              <ClearBtn />
            </>
          )
        }
      />
      <CardContent>
        <Typography>
          {loading ? (
            <>
              <Skeleton
                animation="wave"
                height={10}
                sx={{ marginBottom: 0.5 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </>
          ) : (
            text
          )}
        </Typography>
        {content && <Bod content={content} />}
      </CardContent>

      {fileURL && (
        <>
          {loading ? (
            <Skeleton height={190} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia component="img" src={fileURL} alt="sample" />
          )}
        </>
      )}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100"
              height={10}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100"
              height={10}
            />
          </>
        ) : (
          <>
            <Reaction />
            <Counter name={"Comments"} counts={2} />
          </>
        )}
      </CardActions>
      <Divider sx={{ width: "95%", margin: "0 auto" }} />
      <CardActions>
        {loading ? (
          <Stack direction="row" spacing={2}>
            <Skeleton height={35} width={150}>
              <Button />
            </Skeleton>
            <Skeleton height={35} width={150}>
              <Button />
            </Skeleton>
            <Skeleton height={35} width={150}>
              <Button />
            </Skeleton>
          </Stack>
        ) : (
          <ActionBtns color={"gray"} actions={likeCommentShare} />
        )}
      </CardActions>
    </Card>
  );
}
