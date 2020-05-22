const mongo = require("mongoose");

const noteModel = new mongo.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
}, { versionKey: false });

mongo.model("note", noteModel);