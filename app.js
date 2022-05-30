const express = require("express");
const res = require("express/lib/response");
//APP VARIABLE
const app = express();
//ALLOWS US TO CHANGE THE PORT
const port = 4000;

//TAKES TWO ARGUMENTS - ROUTE
//SECOND ARG IS A FUNCTION
app.get("/", (req, res, next) => {
  res.send("HELLO WORLD!!!");
  //SENDS REQUEST TO SERVER
});

app.get("/username", (req, res) => {
  res.send("Sonny Lee Valenzuela");
});

app.get("/name", (req, res) => {
  res.send("Hello Sonny!");
  //MUST SEND A RESPONSE OR IT WILL HANG
});

// app.get("*", (req, res) => {
//   res.send("Wild Card!");
//   //FOR ANY REQUEST
//   //ALWAYS PUT LAST
// });

//ERROR HANDLING
app.use((req, res, next) => {
  res.status(404).send(`Error unable to find the requested resource!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
