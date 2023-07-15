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

// const SetRateModel = require("./../models/set_rate_models");

// const SetRateController = {
//     setRate: async function (req, res) {
//         try {
//             const { rate } = req.body; // Destructure the 'rate' field from req.body
//             console.log({ rate: rate });

//             if (!rate) {
//                 throw new Error('Rate is required'); // Validate if 'rate' is present
//             }

//             const NewRate = new SetRateModel({ rate });
//             await NewRate.save();

//             return res.json({ success: true, data: NewRate, message: "Rate set successfully" });

//         } catch (e) {
//             console.log(e);
//             return res.json({ success: false, message: e.message });
//         }
//     },
//     getRate: async function (req, res) {
//         try {
//             const getRate = await SetRateModel.find();
//             return res.json({ success: true, data: getRate });
//         } catch (e) {
//             return res.json({ success: false, message: e.message });
//         }
//     },
// };

// module.exports = SetRateController;
