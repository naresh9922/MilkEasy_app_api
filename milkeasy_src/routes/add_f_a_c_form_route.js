const add_f_a_c_form_Routes = require("express").Router();
const UserController = require('./../controllers/add_f_a_c_form_controller');

add_f_a_c_form_Routes.post("/create",UserController.createUser);
add_f_a_c_form_Routes.post("/fetchCollector",UserController.fetchCollector);
add_f_a_c_form_Routes.post("/fetchFarmers",UserController.fetchFarmers);

module.exports = add_f_a_c_form_Routes; 