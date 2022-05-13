import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import { Divider } from "@mui/material";
import SearchDrawer from "./SearchDrawer";
import HideOnScroll from "./HideOnScroll";
import SearchBtn from "./SearchBtn";

export default function HideAppBar(props) {
  const { title, titleColor } = props;
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={0}
          sx={{
            color: "black",
            backgroundColor: "white",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              role="button"
              component="div"
              color={titleColor}
              sx={{ textAlign: "left", cursor: "pointer" }}
            >
              {title}
            </Typography>
            <SwipeableTemporaryDrawer
              anchor="right"
              button={(toggleDrawer) => <SearchBtn onClick={toggleDrawer} />}
              drawer={(toggleDrawer) => (
                <SearchDrawer toggleDrawer={toggleDrawer} />
              )}
            />
          </Toolbar>
          <Divider />
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
