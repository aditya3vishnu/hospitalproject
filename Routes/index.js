const express = require('express');
const router = express.Router();

const hospitalController = require('../Controllers/HospitalControllers')
const userControllers = require('../Controllers/UserControllers')

// ADD HOSPITAL DETAILS
router.post('/addHospital',hospitalController.addHospital);
router.get('/getHospitalsNearby',userControllers.getHospitalsNearby)


exports.allRoutes = router;