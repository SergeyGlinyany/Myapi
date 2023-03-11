const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./db')
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/aircrafts', db.getUsers)
app.get('/aircrafts/code', db.getUserById)
//Change
app.get('/airports', db.getAirports)