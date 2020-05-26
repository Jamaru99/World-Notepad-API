const mongo = require("mongoose");

const noteModel = mongo.model("note");

module.exports = {

    async index(req, res){
        const data = await noteModel.find();
        return res.json(data);
    },

    async show(req, res){
        const data = await noteModel.findById(req.params.id);
        return res.json(data);
    },

    async modify(req, res){
        const data = await noteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(data);
    },

    async destroy(req, res){
        await noteModel.findByIdAndRemove(req.params.id);
        return res.json("Data sucessfully removed");
    },

    async store(req, res){
        const data = await noteModel.create(req.body);
        return res.json(data);
    },

    async search(req, res){
        const data = await noteModel.find({ title: { $regex: new RegExp(req.query.title, "i") } });
        return res.json(data);
    }

}