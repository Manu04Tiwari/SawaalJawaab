const express = require("express");
const routerV1 = new express.Router();
const userController = require("../controllers/UserController");
const faqController = require("../controllers/FaqController");


//User Routes
routerV1.get("/user", userController.getUserDetails);
routerV1.patch("/user", userController.updateUser);
routerV1.delete("/user", userController.deleteUser);

//FAQ routes
routerV1.post("/faq", faqController.createFAQ);
routerV1.get("/faq/:id", faqController.getFAQById);
routerV1.put("/faq/:id", faqController.updateFAQ);
routerV1.delete("/faq/:id", faqController.deleteFAQ);



module.exports = routerV1;