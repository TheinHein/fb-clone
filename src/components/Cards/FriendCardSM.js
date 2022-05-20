import { Avatar, Paper, Typography } from "@mui/material";

function FriendCardSM({ friend, handleClickShowProfile }) {
  return (
    <Paper
      sx={{ borderRadius: 1, cursor: "pointer" }}
      onClick={() => handleClickShowProfile(friend.id)}
    >
      <Avatar
        variant="square"
        src={friend.photoURL}
        sx={{
          width: 140,
          height: 140,
          borderRadius: "8px 8px 0 0",
        }}
      />
      <Typography variant="h5" sx={{ p: 2, pt: 1, pl: 1 }}>
        {friend.displayName}
      </Typography>
    </Paper>
  );
}

export default FriendCardSM;
