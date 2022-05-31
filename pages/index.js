import React, { useState } from 'react';
import { darkTheme, lightTheme} from '../themes/themes';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { Paper, CssBaseline, Card } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import { useLovelySwitchStyles } from '@mui-treasury/styles/switch/lovely';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';

//---------------------------------------------------------------------------------------------------------

function Home() {
  const [mode, setMode] = useState(false);
  function myAge() { //calculates my age
    const today = new Date();
    const birthDate = new Date(2004,8,6);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
      return age;
    };
  const Bstyle1 = useLovelySwitchStyles();
  return (
    <div>         
        <ThemeProvider theme={mode ? darkTheme : lightTheme}>
          <CssBaseline/>
            <Paper 
            style={{ height: "40vh" }}
            sx={{
                bgcolor: 'info.main', 
                position: 'absolute', left: '50%', top: '15.5%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                marginTop: -1,
                padding:7,
                borderRadius:15
            }} 
            elevation={15}>
            <Typography
                variant= 'h1'
                align= 'center'> 
                Morne's Portfolio </Typography>
            <Typography
              variant= 'h5'
              align= 'center'>
              Welcome to my Website!</Typography>
            <SvgIcon component={Brightness3Icon} inheritViewBox sx={{position: 'absolute', left: '53%', top: '68%', transform: 'translate(-50%, -50%)',}}/>
            <SvgIcon component={Brightness5Icon} inheritViewBox sx={{position: 'absolute', left: '47%', top: '68%', transform: 'translate(-50%, -50%)',}}/>
            </Paper>
            <Switch checked={mode} color= 'primary' onChange={() => setMode(!mode)} sx={{position: 'absolute', left: '50%', top: '22%', transform: 'translate(-50%, -50%)', padding: 0.0, border:0.5, borderRadius: 8, borderColor: 'primary', }}/>
        <Paper
        style={{ height: '55vh'}}
        sx={{
          bgcolor: 'primary.light', 
          position: 'absolute', left: '80%', top: '65%',
          transform: 'translate(-50%, -50%)',
          width: '35%',
          marginTop: -1,
          padding:5,
          borderRadius:3
        }}
          >
          <Avatar       
            alt= 'blank'
            src= '../nothing.jpg' 
            sx={{ width: 175, height: 175, position: 'absolute', left: '-20%', top: '30%', transform: 'translate(-50%, -50%)',}}/>
          <Typography
            variant= 'h3'
            align= 'center'
            sx={{ textDecoration: 'underline'}}>
            About Me
          </Typography>
          <Typography
            align= 'center'
            variant= 'h6'
            mt= {3}
            >
            Hi! My name is Morné Cornelius, 
            I am {myAge()} and have had a computer since I was 3 years old and had a blast since then, 
            I started with gaming and slowly began to get fond of how programs work, 
            my father taught me the basics of how to operate a computer, 
            and I taught myself the rest, 
            I have been stuck with several problems over the few years but always ended up fixing them. 
            If I encounter a problem, 
            I never leave it be.  
            I taught myself C++ when I was 12, 
            and ended up wanting to master JavaScript
            I am still extremely new to programming, 
            I am not planning on going to university, 
            but want to get taught via a company and pure experience.
          </Typography>
        </Paper>
        </ThemeProvider>
    </div>
)};
 
export default Home;