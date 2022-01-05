// imports
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

// controllers

const authCtrl = require('./controllers/authController');
const highestScoresCtrl = require('./controllers/highestScoresController');

// app instance created
const app = express();

// database connection
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// top level middleware

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(express.json());



// endpoints

// auth
app.get("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);
app.get("/auth/getUser", authCtrl.getUser);
app.get("/getHighestScores", highestScoresCtrl.getScores);
app.post("/auth/register", authCtrl.register);
app.post("/saveScore", highestScoresCtrl.saveScore);



//NODEMAILER


app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`)
);