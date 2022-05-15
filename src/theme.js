import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#1878f3",
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
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.85rem",
      lineHeight: 1.5,
      fontWeight: 300,
      letterSpacing: "0.009em",
    },
    button: {
      textTransform: "none",
      fontSize: "0.875rem",
      lineHeight: 1,
      fontWeight: 400,
    },
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          borderTop: "3px solid white",
          "&.Mui-selected": {
            color: "#1878f3",
            borderTop: "3px solid #1878f3",
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
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-sizeMedium": {
            height: 35,
          },
        },
      },
      variants: [
        {
          props: { variant: "blue" },
          style: {
            backgroundColor: "#1878f3",
            color: "white",
          },
        },
        {
          props: { variant: "grey" },
          style: {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "muted" },
          style: {
            fontSize: "0.7rem",
            color: "rgb(100,100,100)",
          },
        },
      ],
    },
  },
};

const myTheme = createTheme(themeOptions);

export default myTheme;
