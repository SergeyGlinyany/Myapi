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

app.get('/api/v1/recommendations', db.getAllRec)

app.get('/api/v1/recommendations/id', db.getRecById)

app.post('/api/v1/recommendations/postNewRec', db.postNewRec)

app.delete('/api/v1/recommendations/deleteRec/id', db.deleteRec)

app.patch('/api/v1/recommendations/updateRec/id', db.updateRec)