import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";

import about from "../../data/about";

function About() {
  return (
    <Stack>
      <List dense disablePadding>
        {about.map(({ name, icon, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button fullWidth variant="grey">
        Edit Public Details
      </Button>
    </Stack>
  );
}

export default About;
