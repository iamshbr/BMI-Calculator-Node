const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log("Server is started on port 3000");
});

app.get("/", function (req, res) {
  res.render("calculatedBMI", { calculatedBMI: "00.00" });
});

app.post("/", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height) / 100;
  let bmi = weight / Math.pow(height, 2);
  res.render("calculatedBMI", { calculatedBMI: bmi.toFixed(1) });
});
