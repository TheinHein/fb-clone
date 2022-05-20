import BaseAvatar from "./BaseAvatar";
import BaseUsername from "./BaseUsername";
import PropTypes from "prop-types";
import { CardHeader, Typography } from "@mui/material";

function BaseCardHeader(props) {
  const { displayName, photoURL, onClick, loading, activity, children } = props;
  const generateText = () => {
    let pronoun = "their";
    if (activity === "profile picture") {
      return `updated ${pronoun} profile picture`;
    }
    return "";
  };

  return (
    <CardHeader
      sx={{ cursor: "pointer", paddingBottom: 1 }}
      onClick={onClick}
      avatar={
        <BaseAvatar
          displayName={displayName}
          photoURL={photoURL}
          loading={loading}
        />
      }
      title={
        <>
          <BaseUsername displayName={displayName} loading={loading} />
          {activity && (
            <Typography component="span" variant="body2">
              {generateText()}
            </Typography>
          )}
        </>
      }
      subheader={children}
    />
  );
}

BaseCardHeader.propTypes = {
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
export default BaseCardHeader;
