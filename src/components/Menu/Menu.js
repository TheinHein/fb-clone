import { Avatar, Stack, Card, CardHeader } from "@mui/material";
import MenuButtons from "./MenuButtons";
import SimpleAccordion from "./SimpleAccordion";
import { accordionList } from "../../menuBntList";
import Logout from "../Buttons/Logout";

function Menu() {
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

      <Logout />
    </Stack>
  );
}

export default Menu;
