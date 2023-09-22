
const express = require('express');
const app = express()

// importing subscriber route
const subscriberRoute = require("./routes/subscriberRoute");

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    greeting: "Hello, this is a backend API to get YouTube Subscribers",
    routes: [
      {
        route: "/subscribers",
        response: "Response with an array of subscribers (an Object)",
      },
      {
        route: "/subscribers/names",
        response:
          "Response with an array of subscribers (an Object with only two fields: name and subscribedChannel)",
      },
      {
        route: "/subscribers/:id",
        response:
          "Response with a subscriber (an object) with a given ID. Responds with status code 400 and an Error message ({message: error.message}) if the ID does not match.",
      },
    ],
  });
});

// Router middleware
app.use("/", subscriberRoute);


module.exports = app;















