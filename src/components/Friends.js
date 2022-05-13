import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import FriendRequestsSection from "./FriendRequestsSection";
import PeopleYouMayKnowSection from "./PeopleYouMayKnowSection";

function Friends() {
  const theme = useTheme();
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{
        padding: "15px",
        bgcolor: theme.palette.common.white,
      }}
    >
      <Grid item xs={12}>
        <FriendRequestsSection />
      </Grid>
      <Grid item xs={12}>
        <PeopleYouMayKnowSection />
      </Grid>
    </Grid>
  );
}

export default Friends;
