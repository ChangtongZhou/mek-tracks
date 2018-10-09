const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UnitSchema = new Schema ({
    id: {type: Number, required: true},
    name: {type: String, default: null},
    affilication: {type: String, default: null},
    color: {type: String, default: null},
    icon: {type: String, default: null},
    lances: [{
        id: {type: Number, required: true},
        name: {type: String, default: null},
        pilots: {type: [String], default: []}
    }]
})

module.exports = mongoose.model("Unit", UnitSchema);