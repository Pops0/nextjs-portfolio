/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

import { darkTheme, lightTheme } from "../customization/themes";

import {
  Paper,
  CssBaseline,
  Grid,
  Typography,
  ThemeProvider,
  SvgIcon,
  Avatar,
  Switch,
} from "@mui/material/";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";

import axios from "axios";

export default Home;

//---------------------------------------------------------------------------------------------------------

const today = new Date();
const date = today.toISOString().substring(0, 10);
console.log(date);

const elonJetApiConfig = {
  method: "GET",
  url: `https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/N628TS/${date}`,
  headers: {
    "X-RapidAPI-Key": "23079cc905msh06895b2835f343fp12649bjsn696fb0859864",
    // "X-RapidAPI-Key": "727fb8cafbmsha9709d1437adce1p1ea8cajsn33a630f15a6b", // backup API 
    "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
  },
};

function Home() {
  const [name, setName] = useState("Fetching location...");
  const [mode, setMode] = useState(false);
  const [flash, setFlash] = useState(false);

  let i = 0;
  const txt = "Welcome to my Website!";
  const speed = 50;

  function fetchElonAxios() {
    axios
      .request(elonJetApiConfig)
      .then(function (response) {
        if (response.data && response.data.length > 0) {
          setName(response.data[0].arrival.airport.name);
        } else {
          setName("Currently Airborne");
        }
      })
      .catch(function () {
        setName("No flights today");
      });
  }

  // eslint-disable-next-line no-unused-vars

  const weather = {
    //fetch en display weather
    apiKey: "6c18edf135f106d608b7494aa3e01292",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
          city +
          "&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      console.log(name, icon, description, temp, humidity);
      document.querySelector(".city").innerText = "Weather in " + name + ":";
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

  function myAge() {
    //calculates my age
    const today = new Date();
    const birthDate = new Date(2004, 7, 6); //minus 1 from month
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function typeEffect() {
    if (i < txt.length) {
      document.getElementById("typingEffectId").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  useEffect(function () {
    document
      .querySelector(".search button")
      .addEventListener("click", function () {
        // perform weather search!
        weather.search();
      });
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          // perform weather search!
          weather.search();
        }
      });

    setInterval(function () {
      setFlash((prev) => {
        return !prev;
      });
    }, 530);

    typeEffect();
    fetchElonAxios();
  }, []);

  return (
    <div>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Grid
          container
          columns={14}
          direction="row"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
          spacing={6}
          padding={0}
        >
          <Grid item xs={14}>
            <Paper //main paper
              sx={{
                bgcolor: "info.main",
                position: "relative",
                transform: "translateY(-12%)",
                height: "380px",
                width: "100vw",
                marginTop: -1,
                top: 20,
                padding: 5,
                borderRadius: 15,
              }}
              elevation={15}
            >
              <Typography
                variant="h1"
                align="center"
                sx={{ fontSize: { lg: 90, md: 75, sm: 50, xs: 50 } }}
              >
                Morne's Website
              </Typography>
              <div className="websiteWelcome">
                <span id="typingEffectId"></span>
                {flash ? "|" : ""}
              </div>
              <div>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  column={14}
                >
                  <Grid>
                    <SvgIcon
                      component={Brightness5Icon}
                      inheritViewBox
                      sx={{
                        position: "relative",
                        left: "-125%",
                        top: "62%",
                        transform: "translate(0%, 325%)",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Switch
                      checked={mode}
                      color="primary"
                      onChange={() => setMode(!mode)}
                      sx={{
                        position: "relative",
                        left: "50%",
                        top: "62%",
                        transform: "translate(-50%, 200%)",
                        padding: 0.0,
                        border: 0.5,
                        borderRadius: 8,
                        borderColor: "primary",
                      }}
                    ></Switch>
                  </Grid>
                  <Grid>
                    <SvgIcon
                      component={Brightness3Icon}
                      inheritViewBox
                      sx={{
                        position: "relative",
                        left: "125%",
                        top: "62%",
                        transform: "translate(0%, 325%)",
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} direction="column">
            <div className="avatar_div">
              <Avatar //avatar
                alt="blank"
                src="../nothing.jpg"
                sx={{
                  position: "relative",
                  mt: { xs: 1, md: 5 },
                  mb: { xs: 1, md: 5 },
                  width: { xs: "175px", md: "220px" },
                  height: { xs: "175px", md: "220px" },
                  border: "0px solid",
                  borderRadius: "200px",
                }}
              ></Avatar>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper //about me paper
              sx={{
                bgcolor: "primary.light",
                position: "relative",
                height: "100%",
                width: "auto",
                mt: 3.5,
                padding: 5,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{
                  textDecoration: "underline",
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    md: "40px",
                    large: "50px",
                    mt: "-3",
                    mb: "1",
                  },
                }}
              >
                About Me:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "11px",
                    sm: "15px",
                    md: "20px",
                    large: "25px",
                  },
                }}
              >
                Hi! My name is Morné Cornelius. I am {myAge()}. I have had a
                computer since age 3 and have always been fascinated by them. I
                started with gaming, but soon became interested in how software
                and programming works. Most of what I know I taught myself. I
                have learned that when I'm faced with a computer related problem
                I can always find a solution to fix it. I never leave problems
                unresolved. I started learning coding when I was 12 and recently
                decided to focus on JavaScript. I am still new to the software
                development process, but I believe that I am capable of learning
                and growing as a developer on the job.
              </Typography>
              <div className="CVDownload">
                <Paper
                  sx={{
                    m: "7.5px",
                    ml: "-10px",
                    mt: "15px",
                    mb: "-15px",
                    bgcolor: "secondary.main",
                    padding: "4px",
                    paddingRight: "7.5px",
                  }}
                >
                  <a
                    className="CV-anchor"
                    href="https://www.dropbox.com/s/clw43i6izew20mt/MorneCorneliusResume.pdf?dl=0"
                  >
                    <SvgIcon
                      sx={{ mt: "5px", mb:"-5px", width: "20px", height: "20px", mr: "7.5px" }}
                      component={DownloadIcon}
                    ></SvgIcon>
                    View or Download my CV
                  </a>
                </Paper>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper // Weather Paper
              elevation={4}
              sx={{
                bgcolor: "error.main",
                position: "relative",
                mt: 5,
                mb: 3,
                padding: 4,
                borderRadius: 3,
                width: "auto",
              }}
            >
              <Grid container direction="row" alignItems="center">
                <div className="search-card">
                  <div className="search">
                    <Typography
                      variant="h5"
                      sx={{
                        ml: "-7px",
                        mt: "-15px",
                        mb: "10px",
                        fontWeight: "600",
                        textDecoration: "underline",
                      }}
                    >
                      Weather in a City:
                    </Typography>
                    <input
                      type="text"
                      className="search-bar"
                      placeholder="Search City:"
                    />
                    <button>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <h1 className="city">City: </h1>
                  <h1 className="temp">Degrees of City:</h1>
                  <h4 className="humidity">Humidity:</h4>
                  <Grid container direction="row" alignItems="center">
                    <img className="icon" />
                    <h4 className="description">Description:</h4>
                  </Grid>
                </div>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper //Elon Jet
              elevation={4}
              sx={{
                bgcolor: "secondary.main",
                position: "relative",
                mt: 3,
                mb: 5,
                padding: 4,
                borderRadius: 3,
                width: "auto",
              }}
            >
              <div>
                <h3 className="elonHeader">
                  Example of using REST API, tracks Elon Musk's aircraft: {name}
                </h3>
                <a
                  className="proofAnchor"
                  href="https://globe.adsbexchange.com/?icao=a835af"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Map
                </a>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="pagination_section">
            <a href="/chat" title="Contact" className="paginationAnchor">
              Contact me via my chat app!{" "}
              <SvgIcon component={ChevronRightIcon} />
            </a>
          </div>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
