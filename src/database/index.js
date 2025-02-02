const mongoose = require("mongoose");
const FAQ = require("../model/Faq");
const { application } = require("express");
mongoose.set("strictQuery", true);

url = process.env.DB_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

  