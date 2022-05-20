import { Divider, Stack } from "@mui/material";

function BaseDrawer({ header, body }) {
  return (
    <Stack divider={<Divider />}>
      <Stack
        direction="row"
        alignItems="center"
        px={1}
        justifyContent="space-between"
      >
        {header}
      </Stack>
      <Stack
        m="0 auto"
        p={1}
        spacing={1}
        width={{ xs: "90%", md: "50%" }}
        divider={<Divider />}
      >
        {body}
      </Stack>
    </Stack>
  );
}

export default BaseDrawer;
