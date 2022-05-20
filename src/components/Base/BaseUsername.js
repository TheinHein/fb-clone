import { Skeleton, Typography } from "@mui/material";
import PropTypes from "prop-types";

function BaseUsername(props) {
  const { displayName, loading } = props;
  return (
    <>
      {loading ? (
        <Skeleton width="40%" height={10} />
      ) : (
        <Typography variant="h5" sx={{ display: "inline" }}>
          {displayName}{" "}
        </Typography>
      )}
    </>
  );
}

BaseUsername.propTypes = {
  displayName: PropTypes.string,
};

export default BaseUsername;
