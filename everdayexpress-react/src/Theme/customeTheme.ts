import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00927a",
    },
    secondary: {
      main: "#EAF0F1",
    },
  },
  typography: {
    fontFamily: "KyoboHand",
  },
});

export default customeTheme;
