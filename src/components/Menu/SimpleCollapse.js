import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { Button } from "@mui/material";

export default function SimpleCollapse({ children, collapsedSize }) {
  const [checked, setChecked] = useState(false);
  const btmRef = useRef(null);
  const handleClick = () => {
    setChecked((prev) => !prev);
    btmRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box>
        <Collapse in={checked} collapsedSize={collapsedSize}>
          {children}
        </Collapse>
        <Box sx={{ margin: "10px 0" }}>
          <Button fullWidth variant="grey" onClick={handleClick}>
            {checked ? "See Less" : "See More"}
          </Button>
        </Box>
        <div ref={btmRef} />
      </Box>
    </>
  );
}
