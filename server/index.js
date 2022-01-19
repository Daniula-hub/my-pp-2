// imports
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const path = require("path");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

// controllers

const authCtrl = require('./controllers/authController');
const highestScoresCtrl = require('./controllers/highestScoresController');
const metricsController = require('./controllers/metricsController');
const emailCtrl = require("./controllers/emailController");

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

app.use(express.static(`${__dirname}/../build`));

// endpoints

// auth
app.get("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);
app.get("/auth/getUser", authCtrl.getUser);
app.post("/auth/register", authCtrl.register);
//Highest Scores
app.get("/getHighestScores", highestScoresCtrl.getScores);
app.post("/saveScore", highestScoresCtrl.saveScore);
//Metrics
app.get("/getCategoryByEducation", metricsController.getCategoryByEducation);
app.get("/getDifficultyByCategory", metricsController.getDifficultyByCategory);
app.get("/getEducationByhighestScores", metricsController.getEducationByhighestScores);
//NODEMAILER
app.post('/sendEmail', emailCtrl.sendEmail)

app.get('/*', function(req, res) { res.sendFile(path.join(__dirname, '../build/index.html'), function(err) { if (err) { res.status(500).send(err)}}) })
const port = process.env.PORT || process.env.SERVER_PORT || 3001;

app.listen(port, () => console.log(`Server listening on ${port}`)
);