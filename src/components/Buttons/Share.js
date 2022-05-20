import { Button, Skeleton } from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useState } from "react";

import ShareDialog from "../ShareDialog";

function Share({ postId, ownerId, loading }) {
  const [dialog, setDialog] = useState(false);

  const handleClickShareDialog = () => {
    setDialog((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <Skeleton>
          <Button size="small" fullWidth />
        </Skeleton>
      ) : (
        <Button
          onClick={handleClickShareDialog}
          size="small"
          fullWidth
          startIcon={<ReplyOutlinedIcon />}
          endIcon="Share"
          color="inherit"
        />
      )}
      <ShareDialog
        open={dialog}
        handleClickShareDialog={handleClickShareDialog}
        postId={postId}
        ownerId={ownerId}
      />
    </>
  );
}

export default Share;
