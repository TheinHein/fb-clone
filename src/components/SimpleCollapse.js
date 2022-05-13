import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import BaseButton from "./BaseButton";

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
          <BaseButton
            size="small"
            label={checked ? "See Less" : "See More"}
            color="neutral"
            onClick={handleClick}
            btnColor="rgba(0,0,0,0.1)"
          />
        </Box>
        <div ref={btmRef} />
      </Box>
    </>
  );
}
