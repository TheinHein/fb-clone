import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuButtonCard from "./MenuButtonCard";
import SimpleCollapse from "./SimpleCollapse";
import { menuBtnList } from "../menuBntList";

function MenuButtons() {
  const [collapseSize, setCollapseSize] = useState();
  const collapseRef = useRef(null);

  useEffect(() => {
    setCollapseSize(() => collapseRef.current.clientHeight * 7);
  }, []);

  return (
    <Box sx={{ padding: "15px" }}>
      <SimpleCollapse collapsedSize={collapseSize}>
        <Grid container spacing={1}>
          {menuBtnList.map(({ name, id }) => (
            <Grid key={id} item ref={collapseRef} xs={6}>
              <MenuButtonCard name={name} />
            </Grid>
          ))}
        </Grid>
      </SimpleCollapse>
    </Box>
  );
}

export default MenuButtons;
