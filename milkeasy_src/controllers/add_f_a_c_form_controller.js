const UserModel = require("./../models/add_f_a_c_form_model");
const bcrypt = require("bcrypt");

const UserController = {
  createUser: async function (req, res) {
    try {
      const userData = req.body;
      console.log(userData);
      const newUser = new UserModel(userData);
      await newUser.save();

      return res.json({
        success: true,
        data: newUser,
        message: "user Created",
      });
    } catch (e) {
      return res.json({ success: false, message: e.message });
    }
  },
  fetchCollector: async function (req, res) {
    try {
      const users = await UserModel.find({ usertype: "Collector" });
      return res.json({ success: true, data: users });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
  fetchFarmers: async function (req, res) {
    try {
      const users = await UserModel.find({ usertype: "Farmer" });
      return res.json({ success: true, data: users });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
  findCollector: async function (req, res) {
    try {
      // return res.json({"m":req.params.email})
      let email = req.params.email;
      const users = await UserModel.find({
        $and: [{ usertype: "Collector" },{ email }],
      });
      return res.json({ success: true, data: users });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
  findFarmer: async function (req, res) {
    try {
      // return res.json({"m":req.params.email})
      let email = req.params.email;
      const users = await UserModel.find({
        $and: [{ usertype: "Farmer" },{ email }],
      });
      return res.json({ success: true, data: users });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
};
module.exports = UserController;
