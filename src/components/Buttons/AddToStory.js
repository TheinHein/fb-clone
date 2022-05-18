import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function AddToStory() {
  return (
    <Button
      fullWidth
      startIcon={<AddCircleIcon />}
      endIcon={"Add to Story"}
      variant="contained"
    />
  );
}

export default AddToStory;
