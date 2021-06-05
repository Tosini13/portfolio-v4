import { createMuiTheme } from "@material-ui/core/styles";

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#f5f8fd",
    },
    secondary: {
      main: "#040b14",
      dark: "#212431",
      light: "#149ddd",
    },
    text: {
      primary: "#272829",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h4: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
  },
});

export const useColors = () => {
  return {
    titleColor: "#173b6c",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(20, 157, 221, 0.8) 27.08%, #0269E2 52.08%, rgba(20, 157, 221, 0.8) 77.6%, rgba(255, 255, 255, 0.15) 100%)",
  };
};
