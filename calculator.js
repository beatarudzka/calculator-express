const express = require('express')

const app = express()

app.get("/", function (req, res) {
  res.send("Hello !!1")
})

app.listen(5000, function () {
  console.log("Server is running port 5000")
})