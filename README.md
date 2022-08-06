<h1>Portfolio Website </h1>

## Functionality:

   - Built using NextJS React framework
   - [Material UI v5](mui.com) React library is used for the user interface
   - Uses React Hooks
   - Fully responsive using CSS grids
   - A light and dark mode setting using a set of 2 colour palettes
   - Two widgets displaying information fetched via API
   - Google Firebase integration for a chat app (using the following tutorial https://fireship.io/lessons/react-firebase-chat-app-tutorial/)

## API's used:

 - [Openweathermap](https://openweathermap.org/api/one-call-3)
    -  API used to fetch city's weather info (Degrees, Humididty, Description with Icon)
    -  An input field (city name) is used as a parameter for the API call
    -  The API is called when the search button is clicked

 - [Aerodatabox](https://rapidapi.com/aedbx-aedbx/api/aerodatabox/)
    - API used to track Elon Musk's Private Jet details
    - This API is called once when the website loads and the current city is displayed as text
