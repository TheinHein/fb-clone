import { Divider, Stack } from "@mui/material";
import About from "./About";
import CoverPhoto from "./CoverPhoto";
import Friends from "./Friends";
import Bod from "./Bod";

function Profile() {
  return (
    <Stack spacing={2} divider={<Divider />} p="15px">
      <CoverPhoto />
      <About />
      <Friends />
      <Bod />
    </Stack>
  );
}

export default Profile;
