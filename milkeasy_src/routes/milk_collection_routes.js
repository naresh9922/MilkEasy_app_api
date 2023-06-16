const milkCollectionRoutes = require("express").Router();

const milkCollectionController = require("../controllers/milk_collection_controller");


milkCollectionRoutes.post("/addcollection",milkCollectionController.addMilkCollection);
milkCollectionRoutes.post("/getcollection",milkCollectionController.fetchMilkCollection);

module.exports = milkCollectionRoutes
