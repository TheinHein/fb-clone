import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActions,
  CardHeader,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function FriendCard({ friend, buttons }) {
  const navigate = useNavigate();
  const handleClickShowProfile = () => {
    navigate(`/users/${friend.id}`);
  };
  return (
    <Card square elevation={0}>
      <CardActions onClick={handleClickShowProfile}>
        <CardHeader
          sx={{ paddingLeft: "0" }}
          avatar={
            <Avatar
              alt="sample"
              src={friend.photoURL}
              sx={{ width: 80, height: 80 }}
            />
          }
          title={friend.displayName}
          subheader={
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AvatarGroup
                  max={3}
                  sx={{
                    "& .MuiAvatarGroup-avatar": {
                      width: 24,
                      height: 24,
                    },
                  }}
                >
                  <Avatar alt="sample" src="" />
                  <Avatar alt="sample" src="" />
                </AvatarGroup>
                <Typography variant="body2">2 mutual friends</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  margin: "3px 0",
                }}
              >
                {buttons}
              </Box>
            </>
          }
        />
      </CardActions>
    </Card>
  );
}

export default FriendCard;
