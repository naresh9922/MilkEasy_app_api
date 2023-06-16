const { Schema, model } = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const Cryptojs = require('crypto-js')
const userSchema = new Schema({
    usertype: { type: String, required: true },
    name: { type: String },
    mobile: { type: Number },
    email: { type: String, required: true, unique: true },
    upiid: { type: String },
    address: { type: String },
    password: { type: String, required: true },
    confirmpass: { type: String },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

userSchema.pre('save', async function (next) {
    this.updatedOn = new Date();
    this.createdOn = new Date();

    const user = this;
    console.log(user.password);

    if (user.isModified("password") && user.password) {
        user.password = Cryptojs.AES.encrypt(
            user.password, "naru"
        );
    }



    // if (user.isModified("password")) {
    //     user.password = Cryptojs.AES.encrypt(
    //         user.password, process.env.key
    //     );
    // }

    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(this.password, salt);
    // this.password = hash;
    // const pass = bcrypt.hash(this.password,10)
    // this.password = pass;

    next();
});

const UserModel = model('User', userSchema);

module.exports = UserModel;