/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material/styles";
import { orange, indigo } from "@mui/material/colors";
import "@fontsource/lora/400.css";
import "@fontsource/yanone-kaffeesatz";
import "@fontsource/cinzel";

// import darkImage from '../public/darkBackground.png'

// CUSTOM COLORS:
//Orange
const orangeDark = orange[500];
const orangeLight = orange[300];
//Purple
const purpleDark = indigo[900];
const purpleLight = indigo[600];
//Button
const buttonColorDark = "#1d3557";
const buttonColorLight = orange[100];
//Gradients
// const gradDark = linear-gradient(135deg, #A0C1B8 30%, #719FB0 110%);
// const gradLight = linear-gradient(135deg, #FF8E53 30%, #CF835B 100%);
//Paper
const darkP = "#719fB0";
const lightP = "#CF835B";

// MAIN THEMES
export const darkTheme = createTheme({
  palette: {
    // background: { default: "#0a1929" },
    mode: "dark",
    primary: { main: purpleDark, light: "#0f3646" },
    secondary: { main: "#006bff30" },
    info: { main: "#719fB0" },
    error: { main: buttonColorDark },
    warning: { main: "#04044473" },
  },
  paper: {},
  typography: {
    fontFamily: ["Lora", "serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(312deg, #18042e 30%,#0a0812 100%)`,
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: orangeDark, light: "#FEF" },
    secondary: { main: "#dd795e" },
    info: { main: "#CF835B" },
    error: { main: "#ffe0b26e" },
    warning: { main: "#F4ECC2" },
  },
  typography: {
    fontFamily: ["Lora", "serif"].join(","),
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 3750,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(305deg, #ef9c6c 30%, #ff9f9f 70%)`,
          backgroundAttachment: "fixed",
        },
        // root: {
        //   "input.search-bar"
        // }
      },
    },
  },
});
