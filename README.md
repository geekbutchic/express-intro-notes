# Express Intro Notes
5-15-2022 VIDEOS MORNING +

## SETUP TERMINAL GUIDE

- STEP 1)
  > npm init
- STEP 2)
  > npm i express
- STEP 3)
  > npm install --save-dev nodemon

> TO NOTE : --save-dev nodemon  
> "Pushes nodemon as dev dependencies, package needed for local development"

## SETUP SCRIPTS

> "start": "node app.js",

- npm run start
  > "dev": "nodemon app.js",
- npn run dev

ONCE YOU HAVE INSTALLED NODEMON YOU CAN NOW RUN - npm run dev - WHICH ALLOWS YOU TO MAKE CHANGES WITHOUT INTERRUPTING THE SERVER. THIS IS THE PREFERRED METHOD.

## APP.JS FILE

- MAKE SURE MAIN IS SET TO CORRECT FILE
- EXAMPLE - "main": "app.js",

```js script
//TOP OF PAGE
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
  //MUST SEND A RESPONSE OR IT WILL HANG
});

//BOTTOM OF PAGE
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```
> * CONTROL C - STOPS SERVER

HTTPS REQUEST CONSIST OF GET, POST, PUT, DELETE

* .GET ROUTE -> / AUTOMATICALLY IN URL

## COMMON STATUS CODES
400 - BAD REQUEST

408 - REQUEST TIMEOUT

404 - NOT FOUND

200 - SUCCESSFUL RESPONSES

300 - REDIRECT 

500 - INTERNAL SERVER ERROR
