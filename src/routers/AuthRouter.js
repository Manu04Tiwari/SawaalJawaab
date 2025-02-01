const express = require("express");
const authRouter = new express.Router();
const userController = require("../controllers/UserController");
const faqController = require("../controllers/FaqController");



authRouter.post("/register", userController.registerUser);
authRouter.post("/login", userController.loginUser);
authRouter.get("/faq", faqController.getFAQs);


module.exports = authRouter;