import { Divider, Stack } from "@mui/material";
import About from "./About";
import CoverPhoto from "./CoverPhoto";
import Friends from "./Friends";
import Bod from "./Bod";

function Profile() {
  return (
    <Stack spacing={1} m={1} divider={<Divider />}>
      <CoverPhoto />
      <About />
      <Friends />
      <Bod />
    </Stack>
  );
}

export default Profile;
