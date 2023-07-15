const SetRateRoutes = require("express").Router();

const SetRateController = require("../controllers/ser_rate_controller");


SetRateRoutes.post("/set",SetRateController.setRate);
SetRateRoutes.get("/get",SetRateController.getRate);
    
module.exports = SetRateRoutes;
