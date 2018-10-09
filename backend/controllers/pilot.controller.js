const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Pilot = require('../models/pilot.model');

/////////////////////////////////////////////////////////////// Get All Pilots ///////////////////////////////////////////////////////////////
const getAll = (req, res) => {
    Pilot.find()
        .then(pilots => res.status(200).json(pilots))
        .catch(err => res.status(400).send(`Cannot get all pilots, ${err}`));
}

/////////////////////////////////////////////////////////////// Get One Pilot ///////////////////////////////////////////////////////////////
const getOneById = (req, res) => {
    Pilot.findById(req.params.id)
        .then(pilot => res.status(200).json(pilot))
        .catch(err=>res.status(400).send(`Cannot get the pilot, ${err}`));
}

/////////////////////////////////////////////////////////////// Add One Pilot ///////////////////////////////////////////////////////////////
const addPilot = (req, res) => {
    // console.log(`req.body is: ${JSON.stringify(req.body, null, 2)}`)
    Promise.all([
        Pilot.create(req.body),
        Pilot.find()
    ])
    .then(result => res.status(201).json(result[1]))
    .catch(err => res.status(400).send(`Unable to save to database, ${err}`));
}

/////////////////////////////////////////////////////////////// Edit One Pilot ///////////////////////////////////////////////////////////////

const editPilot = (req, res) => {
    Promise.all([
        Pilot.findByIdAndUpdate(req.params.id, req.body),
        Pilot.findById(req.params.id)
    ])
    .then(result => res.status(200).json(result[1]))
    .catch(err => res.status(400).send(`Unable to save to database, ${err}`))
}

/////////////////////////////////////////////////////////////// Edit One Pilot ///////////////////////////////////////////////////////////////
const deletePilot = (req, res) => {
    Promise.all([
        Pilot.find
    ])
}

 module.exports = {getAll, getOneById, addPilot, editPilot};



/**
 * References:
 * http://www.summa.com/blog/avoiding-callback-hell-while-using-mongoose
 * https://stackoverflow.com/questions/45367833/structure-of-multiple-nested-mongoose-promises
 * https://stackoverflow.com/questions/33645570/nested-query-with-mongoose
 * https://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/
 * https://github.com/markerikson/project-minimek/blob/master/src/data/sampleData.js
 * https://github.com/ratracegrad/node-mongo-demo/blob/master/app.js
 */