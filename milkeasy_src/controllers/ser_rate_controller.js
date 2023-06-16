const SetRateModel = require("./../models/set_rate_models");

const SetRateController = {
    setRate: async function (req, res) {
        try {
            const rate = req.body;
            console.log({ rate: rate });
            const NewRate = new SetRateModel(rate);
            await NewRate.save();

            return res.json({ success: true, data: NewRate, message: "rate set successfully" })

        } catch (e) {
            console.log(e);
            return res.json({ success: false, message: e });
        }
    },
    getRate: async function (req, res) {
        try {
            const getRate = await SetRateModel.find();
            return res.json({ success: true, data: getRate });
        }
        catch (e) {
            return res.json({ success: false, message: e });
        }
    },
};
module.exports = SetRateController;