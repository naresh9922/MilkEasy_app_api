const millCollectionModel = require("./../models/milk_collection_models");

const milkCollectionController = {
    addMilkCollection :async function(req,res){
        try {
            const milkCollectionData = req.body;
            const NewMilkCollection = new millCollectionModel(milkCollectionData);
            await NewMilkCollection.save();

            return res.json({success:true,data: NewMilkCollection,message:"milk collection added"})
            
        } catch (e) {
            return res.json({ success: false, message: e });
        }
    },
    fetchMilkCollection: async function(req, res) {
        try {
            const milkcollection = await millCollectionModel.find();
            return res.json({ success: true, data: milkcollection });
        }
        catch(e) {
            return res.json({ success: false, message: e });
        }
    },
};
module.exports = milkCollectionController;