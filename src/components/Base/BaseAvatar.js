import { Avatar, Skeleton } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function BaseAvatar(props) {
  const { displayName, photoURL, loading } = props;
  return (
    <>
      {loading ? (
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      ) : (
        <Avatar arial-label={displayName} src={photoURL} />
      )}
    </>
  );
}

BaseAvatar.propTypes = {
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default BaseAvatar;
