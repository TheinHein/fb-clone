import { Divider, Stack } from "@mui/material";
import FriendRequestsSection from "./FriendRequestsSection";
import PeopleYouMayKnowSection from "./PeopleYouMayKnowSection";

function Friends() {
  return (
    <Stack spacing={1} divider={<Divider />} bgcolor="white" p={2}>
      <FriendRequestsSection />
      <PeopleYouMayKnowSection />
    </Stack>
  );
}

export default Friends;
