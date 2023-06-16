const { Schema, model } = require('mongoose');
const uuid = require('uuid');

const feedbackSchema = new Schema({
    name: {type:String , required:true},
    mo_no: {type:Number , required:true},
    feedback: {type:String , required:true},
    updatedOn: { type: Date },
    createdOn: { type: Date }
});
feedbackSchema.pre('save',function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    next();
});     

const feedbackModel = model('feedback',feedbackSchema);
module.exports = feedbackModel;