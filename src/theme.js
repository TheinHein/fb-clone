import { createTheme } from "@mui/material/styles";
const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#4B92F5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F0F2F5",
    },
    neutral: {
      main: "#F0F2F5",
    },
    action: {
      hover: "rgba(0,0,0,0.2)",
    },
  },
  typography: {
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: 30,
      fontWeight: 500,
    },
    h2: {
      fontSize: 26,
      fontWeight: 500,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontSize: 14,
        fontWeight: 300,
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          borderTop: "3px solid white",
          "&.Mui-selected": {
            color: "#4B92F5",
            borderTop: "3px solid #4B92F5",
          },
          "&.MuiBottomNavigationAction-label": {
            color: "blue",
          },
        },
        label: {
          fontSize: "0.75rem",
          "&.Mui-selected": {
            fontSize: "0.75rem",
          },
        },
      },
    },
  },
};

const myTheme = createTheme(themeOptions);

export default myTheme;
