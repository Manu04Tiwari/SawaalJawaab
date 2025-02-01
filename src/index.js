require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const {auth}= require("./middleware/index.js");
const routerV1=require("./routers/RouterV1.js");
const authV1=require("./routers/AuthRouter.js");



require("./db/index.js");
app.use(express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth/v1/", authV1);
app.use("/auth/v1/",auth,routerV1);


//cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
