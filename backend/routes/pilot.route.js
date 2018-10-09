const express = require('express');
const router = express.Router();

const pilot_controller = require('../controllers/pilot.controller');

router.get('/', pilot_controller.getAll);
router.get('/pilot/:id', pilot_controller.getOneById);
// router.get('/pilot/:id/reporters', staff_controller.getDirectReporters);
router.post('/addPilot', pilot_controller.addPilot);
router.put('/pilot/:id', pilot_controller.editPilot);
// router.delete('/pilot/:id', pilot_controller.deletePilot);



module.exports = router;