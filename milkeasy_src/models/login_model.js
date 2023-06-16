const { Schema, model } = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const loginSchema = new Schema({
    usertype: {type:String , required:true},
    email: {type:String , required:true,unique:true},
    password: {type:String , required:true},
   
});
// loginSchema.pre('save',function(next){

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(this.password, salt);
//     this.password = hash;
//     next();
// });

const loginModel = model('users',loginSchema);

module.exports = loginModel;