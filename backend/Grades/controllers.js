const express = require('express');

const GradesService = require('./services.js');
const {
    validateFields
} = require('../utils');

const router = express.Router();

router.post('/add_nota', async (req, res, next) => {
    const {
        test_id,
        user_id,
        raspuns,
        intrebare  
    } = req.body;
    try {
    let nota_test = await GradesService.calcul_nota(raspuns, intrebare);
    await GradesService.add(nota_test,test_id,user_id,raspuns,intrebare);
    res.status(201).end();
    }
    catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.get('/get_grades', async (req, res, next) => {
    const {
        user_id
        } = req.body;
        try {
            let grades = await GradesService.get_grades(user_id);
            res.json(grades);
        }catch (err) {
            // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
            next(err);
        }
});

router.get('/get_grades_profesor', async (req, res, next) => {
    const {
        test_id
        } = req.body;
        try {
           let grades = await GradesService.get_grades_profesor(test_id);
           res.json(grades);
        }catch (err) {
            // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
            next(err);
        }
});

module.exports = router;