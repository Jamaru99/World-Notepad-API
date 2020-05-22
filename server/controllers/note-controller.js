const mongo = require("mongoose");

const infoModel = mongo.model("note");

module.exports = {

    async index(req, res){
        const data = await infoModel.find();
        return res.json(data);
    },

    async show(req, res){
        const data = await infoModel.findById(req.params.id);
        return res.json(data);
    },

    async modify(req, res){
        const data = await infoModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(data);
    },

    async destroy(req, res){
        await infoModel.findByIdAndRemove(req.params.id);
        return res.json("Data sucessfully removed");
    },

    async store(req, res){
        const data = await infoModel.create(req.body);
        return res.json(data);
    }

}