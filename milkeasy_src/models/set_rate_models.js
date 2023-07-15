
const { Schema, model } = require('mongoose');
const uuid = require('uuid');

const SetRateSchema = new Schema({
    rate: {type:Number, required:true},
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

SetRateSchema.pre('save',function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    next();
});
const SetRateModel = model('setrates',SetRateSchema);
module.exports = SetRateModel;