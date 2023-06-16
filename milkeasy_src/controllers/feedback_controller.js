const { model } = require('mongoose');
const feedbackModel = require('./../models/feedback_model')

const feedbackController = {
    addFeedback : async function(req,res){
        try {
            const feedback = req.body;
            const  newfeedback = new feedbackModel(feedback);
            await newfeedback.save();
            return res.json({success:true, data:newfeedback, message:"feedback added successfuly"})
        } catch (e) {
            return res.json({ success: false, message: e });
        }
    },
    getFeedback : async function(req,res){
        try {
            const getfeedback = await feedbackModel.find();
            return res.json({success:true, data:getfeedback});
        } catch (e) {
            return res.json({ success: false, message: e });
        }
    },
}
module.exports= feedbackController;