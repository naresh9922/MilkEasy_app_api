const loginModel = require("../models/login_model");
const bcrypt = require("bcrypt");
const Cryptojs = require("crypto-js");

const loginController = {
  login: async function (req, res) {
    try {
      const loginData = req.body;
      const user = await loginModel.findOne({ email: loginData.email });
      if (!user) {
        // User not found
        return res
          .status(404)
          .json({ message: "Invalid username or password." });
      }

      const ogPassHash = Cryptojs.AES.decrypt(user.password, "naru");
      let ogPass = ogPassHash.toString(Cryptojs.enc.Utf8);

      if (ogPass != loginData.password) {
        // Invalid password
        return res
          .status(401)
          .json({ message: "Invalid username or password." });
      }

      if (user.usertype != loginData.usertype) {
        // Invalid usertype
        return res.status(402).json({ message: "Invalid user Type." });
      }
      return res.status(200).json({ message: "Login successful." });
    } catch (error) {
      console.error;
    }
  },
  fetchLogin: async function (req, res) {
    try {
      const users = await UserModel.findOne({ email: "sanket@gmail.com" });
      return res.json({ success: true, data: users });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
};
module.exports = loginController;
