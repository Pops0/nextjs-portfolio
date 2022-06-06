import React, { useState, useEffect } from 'react';
import { darkTheme, lightTheme} from '../customization/themes';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { Paper, CssBaseline, TextField, Card, Grid } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
export default (Home);
//---------------------------------------------------------------------------------------------------------
const weather = { //fetch en display weather API
  apiKey: '6c18edf135f106d608b7494aa3e01292',
  fetchWeather: function (city) {
      fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' 
      //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${liveLocation.geoSuccess.lat}&lon=${liveLocation.geoSuccess.lng}&appid=${this.apiKey}` 
      + city 
      + '&appid=' 
      + this.apiKey
    ) 
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity} = data.main;
    console.log(name, icon, description, temp, humidity);
    document.querySelector('.city').innerText = 'Weather in ' + name + ':';
    document.querySelector('.icon').src ='https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%' 
  },
  search: function() {
    this.fetchWeather(document.querySelector('.search-bar').value)
  },
}
//document.querySelector('.search button').addEventListener('click', function() {
//  weather.search();
//});
//document.querySelector('.search-bar').addEventListener('keyup', function (event) {
//if (event.key == "Enter") {
//  weather.search();
//   }
//  }
//)
/*^^^^^^ Hierdie is die code wat nie lekker wil werk nie, jy sal sien as jy run dev, dan sal die site werk maar die searchbar doeni, 
1.) run dev 
2.) remove hierdie boonste comments
3.) Probeer die searchbar gebruik hy werk dan 100%
4.) dan refresh jy die page heeltemal
*/

function Home() {
  const defaultLocation= 'Amsterdam'; //Default location vir as mens site restart
  const pullLocation= weather.fetchWeather(defaultLocation);
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
  return (
    <div>
      {/* Dark mode en light mode ek gebruik MUI se theme provider vir hierdie */}
     <ThemeProvider theme={mode ? darkTheme : lightTheme}> 
       <CssBaseline/>
        <Paper //main paper
          sx={{
              bgcolor: 'info.main', 
              position: 'relative', left: '50%', top: '15.5%',
              transform: 'translate(-50%, -12%)',
              height: '380px',
              width: '100%',
              marginTop: -1,
              padding:7,
              borderRadius:15
          }}
          elevation={15}>
          <Typography
              variant= 'h1'
              align= 'center'
              sx={{fontSize: {lg:90, md: 75, sm: 50, xs: 35,}}}> 
              Morne's Portfolio </Typography>
          <Typography
            variant= 'h5'
            align= 'center'
            sx={{fontSize: {lg:30, md: 25, sm: 16, xs: 11,}}}>
            Welcome to my Website!</Typography>
          <div>
            <SvgIcon component={Brightness3Icon} inheritViewBox sx={{position: 'relative', left: '53.8%', top: '62%', transform: 'translate(-90%, 325%)', }}/>
            <SvgIcon component={Brightness5Icon} inheritViewBox sx={{position: 'relative', left: '45.6%', top: '62%', transform: 'translate(-90%, 325%)', }}/>
            <Switch 
            checked={mode} 
            color= 'primary' 
            onChange={() => setMode(!mode)} 
            sx={{
              position: 'relative', 
              left: '50%', 
              top: '62%', 
              transform: 'translate(-133%, 180%)', 
              padding: 0.0, 
              border:0.5, 
              borderRadius: 8, 
              borderColor: 'primary', 
              }}>                
              </Switch>
          </div>
        </Paper>
        <Paper //about me paper
              sx={{
                bgcolor: 'primary.light', 
                position: 'relative', 
                left: '80%', 
                top: '70%',
                transform: 'translate(-50%, -5%)',
                height: '61%',
                width: '35%',
                marginTop: 3,
                marginLeft:2,
                padding:5,
                borderRadius:3
            }}> 
              <Typography
                variant= 'h3'
                align= 'center'
                sx={{ textDecoration: 'underline' }}
                mt={-3}
                mb={-1.5}>
                About Me
              </Typography>
              <h2 //description
                //align= 'center'
                //variant= 'h5'
                //mt= {3}
                //sx= {{fontSize: {lg: 23, md: 20, sm: 15, xs: 10}}}
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
              </h2>
        </Paper>
        <Avatar
          alt= 'blank'
          src= '../nothing.jpg'
          sx={{ 
              position: 'relative', 
              left: '50%', 
              top: '20%', 
              transform: 'translate(-50%, -200%)',
              marginTop: 3,
              width: '250px', 
              height: '250px', 
              }}>
        </Avatar>
       <div>
        <div class='weather-card'>
            <Grid container direction='row' alignItems='center'>
              <div class='search-card'>
                <div class='search'>
                  <input type='text' class='search-bar' placeholder='Search City:' value={defaultLocation}/>
                  <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                    </path>
                  </svg></button>
                </div>
              </div>
            </Grid>
            <div class= 'weather'>
              <h1 class='city'>City: </h1>
              <h1 class='temp'>Degress of City:</h1>
              <h4 class='humidity'>Humidity:</h4>
              <Grid container direction= 'row' alignItems='center'>
                <img class='icon'/>
                <h4 class='description'>Description</h4>
              </Grid>
            </div>
          </div>
      </div>
     </ThemeProvider>
    </div>
)};
