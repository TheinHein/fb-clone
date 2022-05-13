import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils";

function Nav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    navigate(routes[value].path);
    ref.current.ownerDocument.documentElement.scrollTop = 0;
  }, [navigate, value]);

  return (
    <Box ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {routes.map(({ label, icon, id, path }, index) => (
            <BottomNavigationAction
              key={id}
              label={label}
              icon={icon}
              arial-label={label}
              disableRipple
              disableTouchRipple
              value={index}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Nav;
