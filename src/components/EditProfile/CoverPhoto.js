import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import { Box, Typography, Stack, Button } from "@mui/material";
import DrawerWithBtn from "../Drawer/DrawerWithBtn";
import SelectPhotoDrawer from "../Drawer/SelectPhotoDrawer";

function CoverPhoto() {
  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Typography variant="h3">Cover Photo</Typography>
        <DrawerWithBtn
          anchor={"bottom"}
          button={(toggleDrawer) => (
            <Button size="small" onClick={() => toggleDrawer(true)}>
              Add
            </Button>
          )}
          drawer={(toggleDrawer) => (
            <SelectPhotoDrawer toggleDrawer={() => toggleDrawer(false)} />
          )}
        />
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          bgcolor: "rgb(190, 190, 190)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PhotoSizeSelectActualOutlinedIcon
          sx={{ color: "white", fontSize: "20px" }}
        />
      </Box>
    </Stack>
  );
}

export default CoverPhoto;
