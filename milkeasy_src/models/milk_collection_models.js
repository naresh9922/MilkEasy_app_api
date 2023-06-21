// name shift fat qty

const { Schema, model } = require('mongoose');
const uuid = require('uuid');

const milkCollectionSchema = new Schema({
    Farmer_name: {type:String , required:true},
    collectorId: {type:String , required:true},
    shift: {type:String , required:true},
    fat: {type:Number , required:true},
    qty: {type:Number , required:true},
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

milkCollectionSchema.pre('save',function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    
    next();
});
const milkcollectionModel = model('milkCollection',milkCollectionSchema);
module.exports = milkcollectionModel;