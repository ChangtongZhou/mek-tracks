const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PilotSchema = new Schema ({
    id: {type: Number, required: true},
    name: {type: String, default: null},
    rank: {type: String, default: null},
    age: {type: Number, default: null},
    gunnery: {type: Number, default: null},
    piloting: {type: Number, default: null},
    mech_id: {type: String, default: null},
    mech_name: {type: String, default: null},
    lance_id: {type: String, default: null},
    lance_name: {type: String, default: null}
})

module.exports = mongoose.model("Pilot", PilotSchema);