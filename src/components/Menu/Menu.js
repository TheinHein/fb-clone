import {
  Avatar,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@mui/material";
import MenuButtons from "./MenuButtons";
import SimpleAccordion from "./SimpleAccordion";
import signOutFromFirebase from "../../signOutFromFirebase";
import { useAuthContextUpdater } from "../../context/AuthContext";
import { accordionList } from "../../menuBntList";

function Menu() {
  const context = useAuthContextUpdater();

  const handleClickSignOut = () => {
    signOutFromFirebase();
    context.handleSignOut();
  };

  return (
    <Stack p={1}>
      <Card square elevation={0} sx={{ bgcolor: "transparent" }}>
        <CardHeader
          avatar={<Avatar alt="Travis Howard" src="" width={40} height={40} />}
          title="Thein Than Hein"
          subheader="See your profile"
          sx={{
            "& .MuiCardHeader-subheader": {
              fontSize: "0.8rem",
            },
          }}
        />
      </Card>
      <MenuButtons />
      {accordionList.map(({ summary, details }, index) => (
        <SimpleAccordion
          summary={summary}
          details={details}
          index={index}
          key={summary.id}
        />
      ))}

      <Button fullWidth variant="grey" onClick={handleClickSignOut}>
        Log Out
      </Button>
    </Stack>
  );
}

export default Menu;
