const loginRoutes = require("express").Router();
const loginController = require("../controllers/login_controller");

loginRoutes.post("/login",loginController.login);
loginRoutes.post("/getlogin",loginController.fetchLogin);


module.exports = loginRoutes; 