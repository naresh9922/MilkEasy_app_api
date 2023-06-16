const feedbackRoutes =require('express').Router();
const feedbackController = require("./../controllers/feedback_controller")

feedbackRoutes.post("/feed",feedbackController.addFeedback);
feedbackRoutes.post("/get",feedbackController.getFeedback);

module.exports = feedbackRoutes;