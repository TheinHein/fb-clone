import BaseMediaCard from "../Base/BaseMediaCard";
import { CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import PhotoViewerModal from "../Base/PhotoViewerModal";

function PostCard(props) {
  const { post, share, loading } = props;
  const [modal, setModal] = useState(false);
  return (
    <BaseMediaCard post={post} loading={loading} share={share}>
      <CardContent sx={{ paddingTop: "0" }}>
        <Typography variant="body2" noWrap>
          {loading ? (
            <>
              <Skeleton height={10} sx={{ marginBottom: 0.5 }} />
              <Skeleton height={10} width="80%" />
            </>
          ) : (
            post.text
          )}
        </Typography>
      </CardContent>
      {post.fileURL && (
        <>
          {loading ? (
            <Skeleton height={190} variant="rectangular" />
          ) : (
            <CardMedia
              component="img"
              src={post.fileURL}
              alt={"pic"}
              onClick={() => setModal((prev) => !prev)}
              sx={{ cursor: "pointer" }}
              loading="lazy"
            />
          )}
        </>
      )}
      {modal && (
        <PhotoViewerModal
          open={modal}
          fileURL={post.fileURL}
          onClose={() => setModal((prev) => !prev)}
        />
      )}
    </BaseMediaCard>
  );
}

export default PostCard;
