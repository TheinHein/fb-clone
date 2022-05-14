import Shortcuts from "./Shortcuts";
import { Typography, Stack } from "@mui/material";
import Post from "../Home/Post";
import { useAuthContext } from "../../context/AuthContext";
import ChildCareIcon from "@mui/icons-material/ChildCare";

function Bod() {
  const context = useAuthContext();
  return (
    <Stack bgcolor="white">
      <Shortcuts />
      <Post
        post={context.user}
        content={
          <>
            <ChildCareIcon
              sx={{
                bgcolor: "#4b92f5",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                color: "white",
                padding: "7px",
              }}
            />
            <Typography>Born on May 5, 1996</Typography>
          </>
        }
      />
    </Stack>
  );
}

export default Bod;
