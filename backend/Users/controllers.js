const express = require('express');

const {
    authorizeRoles
} = require('../security/Roles');

const {
    authorizeAndExtractToken
} = require('../security/Jwt');

const UsersService = require('./services.js');
const {
    validateFields
} = require('../utils');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const {
        username,
        password,
        name,
        surname,
        email
    } = req.body;

    console.log(req.body);


    // validare de campuri
    try {
        const fieldsToBeValidated = {
            username: {
                value: username,
                type: 'ascii'
            },
            password: {
                value: password,
                type: 'ascii'
            },
            name: {
                value: name,
                type: 'alpha'
            },
            surname: {
                value: surname,
                type: 'alpha'
            },
            email:{
                value: email,
                type: 'email'
            }
        };
        validateFields(fieldsToBeValidated);
        await UsersService.add(username, password, name, surname, email);

        res.status(201).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
  const {
      username,
      password
  } = req.body;

    try {
        const fieldsToBeValidated = {
            username: {
                value: username,
                type: 'ascii'
            },
            password: {
                value: password,
                type: 'ascii'
            }
        };

        validateFields(fieldsToBeValidated);

        const token = await UsersService.authenticate(username, password);

        res.status(200).json(token);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});

router.get('/get_profile', authorizeAndExtractToken, authorizeRoles('admin','profesor','student','neactivat'), async (req, res, next) => {
    try {
        const token = (req.header('Authorization').split(" "))[1];
        const user = await UsersService.get_profile(token);      
        res.json(user);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

//id, name, surname, email, authorizeAndExtractToken - pt ca serverul sa stie ca sunt logat
router.put('/update_user/:id', authorizeAndExtractToken, authorizeRoles('profesor','student','neactivat'), async (req, res, next) => {
    const {
        id
    } = req.params;
    
    const {
        name,
        surname,
        email
    } = req.body;
  
    try {
        const fieldsToBeValidated = {
            name: {
                value: name,
                type: 'alpha'
            },         
            surname: {
                value: surname,
                type: 'alpha'
            },
            email: {
                value: email,
                type: 'email'
            }
      };
      validateFields(fieldsToBeValidated);
      let user = await UsersService.update_user(id,name,surname,email);

      res.status(200).json(user);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});


router.put('/update_password', authorizeAndExtractToken, authorizeRoles('profesor','student','neactivat'), async (req, res, next) => {
    
    const {
        username,
        oldPassword,
        newPassword
    } = req.body;
  
    try {
        const fieldsToBeValidated = {
            username: {
                value: username,
                type: 'ascii'
            },   
            oldPassword: {
                value: oldPassword,
                type: 'ascii'
            },         
            newPassword: {
                value: newPassword,
                type: 'ascii'
            }
      };
      validateFields(fieldsToBeValidated);


      // verifica username + parola
      let oldtoken = null;
      try{
        oldtoken = await UsersService.authenticate(username, oldPassword);
      } catch(err){
        oldtoken = 'failed';
      }

      let newtoken ='failed';
    //updateaza parola noua
      if(oldtoken !== 'failed'){
        let user = await UsersService.update_password(username, newPassword);
        newtoken =  await UsersService.authenticate(username, newPassword);
      }

      //trimite token nou catre user
      res.status(200).json(newtoken);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});


router.put('/update_admin/:id', authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        role,
        class_u
    } = req.body;
  
    try {
        const fieldsToBeValidated = {
            role: {
                value: role,
                type: 'alpha'
            }
        };
  
      validateFields(fieldsToBeValidated);
      await UsersService.update_admin(id, role, class_u);
      res.status(200).json();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});
// admin trebuie sa vada ce user updateaza
router.get('/get_users_id/:id', authorizeAndExtractToken, authorizeRoles('admin,profesor'), async (req, res, next) => {
    const {
        id
    } = req.params;  
    try {
        let users = await UsersService.get_users_id(id);      
        res.json(users);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});


// admin vede pg cu toti userii neactivati
router.get('/get_users_by_role', authorizeAndExtractToken, authorizeRoles('admin','profesor'), async (req, res, next) => {  
    
    const role = req.query.role;
    console.log(role);

    try {
        let users = await UsersService.get_users_by_role(role);      
        res.status(200).json(users);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});


router.get('/get_users_all', authorizeAndExtractToken, authorizeRoles('admin,profesor'), async (req, res, next) => {
    try {

      let users = await UsersService.get_users();
      res.json(users);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});

router.get('/fraierii', async (req, res, next) => {
    try {

        console.log('cevaaa');
      let users = await UsersService.get_users();
      res.json(users);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }

});

module.exports = router;