import { createTheme } from '@mui/material/styles';
import { orange, indigo, teal } from '@mui/material/colors';
import '@fontsource/lora/400.css';
import { responsiveFontSizes } from '@mui/material/styles'

// CUSTOM COLORS:
    //Orange
    const orangeDark= orange[500];
    const orangeLight= orange[300]
    //Purple
    const purpleDark= indigo[900];
    const purpleLight= indigo[600];
    //Button
    const buttonColorDark= '#1d3557';
    const buttonColorLight= orange[100];
    //Gradients
    const gradDark= 'linear-gradient(135deg, #A0C1B8 30%, #719FB0 110%)';
    const gradLight= 'linear-gradient(135deg, #FF8E53 30%, #CF835B 100%)';
    //Paper
    const darkP = '#719fB0'
    const lightP = '#CF835B' 

// MAIN THEMES
export const darkTheme = createTheme({
    palette: {
        background: {default: '#0a1929'},
        mode: 'dark',
        primary: { main: purpleDark, light:'#A2ABCD'},
        secondary: {main: purpleDark},
        info: {main: '#719fB0'},
        error: {main: buttonColorDark},
        warning: {main: '#708090'},
   },
   typography: {
   fontFamily: ['lora', 'cursive'].join(','),
   },
});

export const lightTheme = createTheme({
    palette: {
        background: {default: '#FFC5A1'},
        mode: 'light',
        primary: {main: orangeDark, light:'#FEF'},
        secondary: {main: '#CF836B'},
        info: {main: '#CF835B'},
        error: {main: buttonColorLight},
        warning: {main: '#F4ECC2'},
      },
  typography: {
    fontFamily: ['lora', 'cursive',].join(','),
  },
})
