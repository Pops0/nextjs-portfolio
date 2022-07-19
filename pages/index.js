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
  Drawer,
  Fade,
} from "@mui/material/";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness5Icon from "@mui/icons-material/Brightness5";

import axios from "axios";
import App from "./chat/index.js";

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
    "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
  },
};

if (typeof window !== "undefined") {
  console.log("windowError occured");
}

function Home() {
  const [name, setName] = useState("Fetching location...");
  const [mode, setMode] = useState(false);
  const [flash, setFlash] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tSwitch, setTSwitch] = useState(false);

  function fetchElonAxios() {
    axios
      .request(elonJetApiConfig)
      .then(function (response) {
        if (response.data && response.data.length > 0) {
          setName(response.data[0].arrival.airport.name);
        } else {
          setName("No flights today");
        }
      })
      .catch(function () {
        setName("API key invalid");
      });
  }

  function setDrawerFalse() {
    return setIsDrawerOpen(false);
  }

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
    const birthDate = new Date(2004, 8, 6);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  let i = 0;
  const txt = "Welcome to my Website!";
  const speed = 50;

  function typeEffect() {
    if (i < txt.length) {
      document.getElementById("typingEffectId").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  function transitionFix() {
    if (mode === false) {
      setTSwitch(true);
    } else if (mode === true){
      setTSwitch(false);
      setTSwitch(true);
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

    console.log(myAge());
    console.log("Name: ", name);

    setInterval(function () {
      setFlash((prev) => {
        return !prev;
      });
    }, 530);

    setDrawerFalse();
    transitionFix();
    typeEffect();
    fetchElonAxios();

    console.log( "Trans Switch: ", tSwitch);

  }, []);

  return (
    <div>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Grid container alignItems="center">
          <Paper // Drawer
            onClick={() => setIsDrawerOpen(true)}
            sx={{
              position: "fixed",
              transform: {
                xs: "translate(-50%, -350%)",
                sm: "translate(-50%, -230%)",
                md: "translate(-50%, -100%)",
                lg: "translate(-50%, -250%)",
                xl: "translate(-50%, -100%)",
              },
              bgcolor: "error.main",
              width: "80px",
              height: "200px",
              borderRadius: "30px",
              padding: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ transform: "rotate(90deg) translate(100%,-70%)" }}
              onClick={() => setIsDrawerOpen(true)}
            >
              Contact
            </Typography>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <App />
            </Drawer>
          </Paper>
          <Grid item xs={12}>
            <Paper //main paper
              sx={{
                bgcolor: "info.main",
                position: "relative",
                left: "50%",
                top: "15.5%",
                transform: "translate(-50%, -12%)",
                height: "380px",
                width: "100%",
                marginTop: -1,
                padding: 7,
                borderRadius: 15,
              }}
              elevation={15}
            >
              <Typography
                variant="h1"
                align="center"
                sx={{ fontSize: { lg: 90, md: 75, sm: 50, xs: 35 } }}
              >
                Morne's Website
              </Typography>
              <div className="websiteWelcome">
                <span id="typingEffectId"></span>
                {flash ? "|" : ""}
              </div>
              <div>
                <Grid container alignItems="center" justifyContent={"center"}>
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
          <Grid item xs={12} md={6}>
            {/* <Fade
              in={tSwitch}
              // addEndListener={(node, done) => {
              //   node.addEventListener("transitionend", done, false);
              // }}
              timeout={{
                enter: lightTheme.transitions.duration.complex,
                exit: lightTheme.transitions.duration.leavingScreen,
              }}
            > */}
              <Avatar //avatar
                alt="blank"
                src="../avatar.jpg"
                sx={{
                  position: "relative",
                  mt: { xs: 3, md: 5 },
                  mb: { xs: 5, md: 5 },
                  ml: { xs: 10.75, sm: 37, md: 19, lg: 45, xl: 50 },
                  mr: { xs: 10.75, sm: 37, md: 19, lg: 45, xl: 50 },
                  width: { xs: "250px", md: "220px" },
                  height: { xs: "250px", md: "220px" },
                }}
              ></Avatar>
            {/* </Fade> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper //about me paper
              sx={{
                bgcolor: "primary.light",
                position: "relative",
                height: "100%",
                width: {
                  xs: 350,
                  sm: 600,
                  md: 450,
                  lg: 550,
                },
                mt: 3.5,
                ml: { xs: 5, sm: 15, md: 5, lg: 10, xl: 20 },
                mr: { xs: 5, sm: 15, md: 5, lg: 10, xl: 20 },
                padding: 5,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ textDecoration: "underline" }}
                mt={-3}
                mb={-1.5}
              >
                About Me:
              </Typography>
              <h3 className="aboutMe">
                Hi! My name is Morné Cornelius, I am {myAge()} and have had a
                computer since I was 3 years old and had a blast since then, I
                started with gaming and slowly began to get fond of how programs
                work, my father taught me the basics of how to operate a
                computer, and I taught myself the rest, I have been stuck with
                several problems over the few years but always ended up fixing
                them. If I encounter a problem, I never leave it be. I taught
                myself C++ when I was 12, and ended up wanting to master
                JavaScript I am still extremely new to programming, I am not
                planning on going to university, but want to get taught via a
                company and pure experience.
              </h3>
            </Paper>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper //Weather Paper
                elevation={4}
                sx={{
                  bgcolor: "error.main",
                  position: "relative",
                  mt: 5,
                  mb: 3,
                  ml: { xs: 5, sm: 10, md: 8, lg: 30 },
                  mr: { xs: 5, sm: 10, md: 8, lg: 30 },
                  padding: 4,
                  borderRadius: 3,
                  width: { sm: "80%", lg: 500 },
                }}
              >
                <Grid container direction="row" alignItems="center">
                  <div className="search-card">
                    <div className="search">
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
                    <h1 className="temp">Degress of City:</h1>
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
                  ml: { xs: 11, sm: 17.5, md: 5, lg: 15, xl: 20 },
                  mr: { xs: 11, sm: 17.5, md: 5, lg: 15, xl: 20 },
                  padding: 4,
                  borderRadius: 3,
                  width: {
                    xs: 250,
                    sm: 500,
                    md: 450,
                    xl: 500,
                  },
                }}
              >
                <div>
                  <h2 className="elonHeader"> Elon Musk Private Jet Location: {name}</h2>
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
        </Grid>
      </ThemeProvider>
    </div>
  );
}
