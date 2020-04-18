const express = require('express');
const googleMapsController = require('../controllers/googleMapsController.js');
const npsController = require('../controllers/npsController.js');
const router = express.Router();

// loads the map and park pin points
router.get('/', googleMapsController.getMap, (req, res)=>{
    res.status(200).json();
})

// req returns clicked park pin point and requests weather information for selected park pin point
router.get('/', npsController.getParkWeather, (req, res)=>{
    res.sendStatus(200);
})