const Router = require('express')();


const UsersController = require('../Users/controllers.js');
const TestsController = require('../Tests/controllers.js');
const GradesController = require('../Grades/controllers.js');

Router.use('/users', UsersController);
Router.use('/tests', TestsController);
Router.use('/grades', GradesController);

module.exports = Router;