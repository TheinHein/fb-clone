import { Avatar, Box, Card, CardHeader, CardContent } from "@mui/material";
import BaseButton from "./BaseButton";
import MenuButtons from "./MenuButtons";
import SimpleAccordion from "./SimpleAccordion";
import signOutFromFirebase from "../signOutFromFirebase";
import { useAuthContextUpdater } from "../context/AuthContext";

function Menu() {
  const context = useAuthContextUpdater();

  const handleClickSignOut = () => {
    signOutFromFirebase();
    context.handleSignOut();
  };

  return (
    <Box sx={{ marginBottom: "15px" }}>
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
      <SimpleAccordion />
      <CardContent>
        <BaseButton
          size="small"
          label={"Log out"}
          color="neutral"
          btnColor="rgba(0,0,0,0.1)"
          onClick={handleClickSignOut}
        />
      </CardContent>
    </Box>
  );
}

export default Menu;
