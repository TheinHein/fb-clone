import { Divider, Stack } from "@mui/material";
import FriendRequestsSection from "./FriendRequestsSection";
import PeopleYouMayKnowSection from "./PeopleYouMayKnowSection";

function Friends() {
  return (
    <Stack spacing={1} m={1} divider={<Divider />}>
      <FriendRequestsSection />
      <PeopleYouMayKnowSection />
    </Stack>
  );
}

export default Friends;
