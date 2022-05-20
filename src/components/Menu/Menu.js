import { Avatar, Stack, Card, CardHeader } from "@mui/material";
import MenuButtons from "./MenuButtons";
import SimpleAccordion from "./SimpleAccordion";
import { accordionList } from "../../menuBntList";
import Logout from "../Buttons/Logout";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Menu() {
  const context = useAuthContext();
  const navigate = useNavigate();
  return (
    <Stack p={1}>
      <Card square elevation={0} sx={{ bgcolor: "transparent" }}>
        <CardHeader
          onClick={() => navigate("/profile")}
          avatar={
            <Avatar
              alt={context.user.displayName}
              src={context.user.photoURL}
              width={40}
              height={40}
            />
          }
          title={context.user.displayName}
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
