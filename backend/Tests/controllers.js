const express = require('express');

const {
    authorizeRoles
} = require('../security/Roles');

const {
    authorizeAndExtractToken
} = require('../security/Jwt');

const TestsService = require('./services.js');
const {
    validateFields
} = require('../utils');

const router = express.Router();

//post(creare testx) get(afisare test pt studentx; afisare toate testelex; afisare teste active) put(update test?x) delete(sterge test)
//name available_at expires_at available_to
router.post('/create_test', authorizeAndExtractToken, authorizeRoles('profesor'), async (req, res, next) => {
    const {
        name,
        available_at,
        expires_at,
        available_to
    } = req.body;

    try {
        await TestsService.create_test(name,available_at,expires_at,available_to);
        res.status(200).json();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.put('/update_test/:id', authorizeAndExtractToken, authorizeRoles('profesor'), async (req, res, next) => {
    const {
        id,
        name,
        available_at,
        expires_at,
        available_to
    } = req.body;
        try {
            await TestsService.update_test(id,name,available_at,expires_at,available_to);
            res.status(200);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.get('/view_test/:id', authorizeAndExtractToken, authorizeRoles('profesor'), async (req, res, next) => {
        const {
        id
        } = req.body;
        try {
            let test = await TestsService.view_test_id(id);
            res.status(200).json(test);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.get('/view_tests_all', authorizeAndExtractToken, authorizeRoles('profesor'), async (req, res, next) => {
    try {
        let tests = await TestsService.view_tests_all();
        res.status(200).json(tests);
} catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
    next(err);
}
});

router.get('/view_tests_student/:id', authorizeAndExtractToken, authorizeRoles('student'), async (req, res, next) => {
    const {
        id
        } = req.body;
    try {
        let tests = await TestsService.view_tests_student(id);
        res.status(200).json(tests);
} catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
    next(err);
}
});

router.get('/view_tests_student_active/:id', authorizeAndExtractToken, authorizeRoles('student'), async (req, res, next) => {
    const {
        id
        } = req.body;
    try {
        let tests = await TestsService.view_tests_student_active(id);
        res.status(200).json(tests);
} catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
    next(err);
}
});

router.get('/view_tests_profesor_active', authorizeAndExtractToken, authorizeRoles('profesor'), async (req, res, next) => {
    try {
        let tests = await TestsService.view_tests_profesor_active();
        res.status(200).json(tests);
} catch (err) {
    // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
    next(err);
}
});

module.exports = router;