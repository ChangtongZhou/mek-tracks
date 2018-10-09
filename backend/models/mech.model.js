const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MechSchema = new Schema ({
    id: {type: Number, required: true},
    name: {type: String, default: null},
    model: {type: String, default: null},
    weight: {type: Number, default: null},
    class: {type: String, default: null},
    unit_id: {type: String, default: null},
    unit_name: {type: String, default: null},
})

module.exports = mongoose.model("Mech", MechSchema);