const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("DevOps E-Commerce Project Running Successfully version 2 made by ratan 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
