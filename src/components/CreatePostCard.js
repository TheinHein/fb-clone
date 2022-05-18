import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DrawerWithBtn from "./Drawer/DrawerWithBtn";
import CreatePostDrawer from "./Drawer/CreatePostDrawer";
import WhatsOnYourMindBtn from "./Buttons/WhatsOnYourMindBtn";
import ActionBtns from "./ActionBtns";
import { reelRoomGroup } from "../actions";
import { useAuthContext } from "../context/AuthContext";

export default function CreatePostCard() {
  const context = useAuthContext();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="user's profile"
            src={context.user.photoURL}
            width={40}
            height={40}
          />
        }
        title={
          <DrawerWithBtn
            anchor="bottom"
            button={(toggleDrawer) => (
              <WhatsOnYourMindBtn
                handleClickDrawer={toggleDrawer}
                displayName={context.user.displayName}
              />
            )}
            drawer={(toggleDrawer) => (
              <CreatePostDrawer
                user={context.user}
                toggleDrawer={toggleDrawer}
              />
            )}
          />
        }
      />
      <Divider sx={{ width: "95%", margin: "0 auto" }} />
      <CardActions sx={{ backgroundColor: "#white" }}>
        <ActionBtns color={"black"} actions={reelRoomGroup} />
      </CardActions>
    </Card>
  );
}
