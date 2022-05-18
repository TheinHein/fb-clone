import { Button } from "@mui/material";

function SeeMore({ handleClick, checked }) {
  return (
    <Button fullWidth variant="contained" color="inherit" onClick={handleClick}>
      {checked ? "See Less" : "See More"}
    </Button>
  );
}

export default SeeMore;
