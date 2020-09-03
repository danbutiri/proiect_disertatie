const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MUSER}:${process.env.MPASSWORD}@${process.env.MHOST}:${process.env.MPORT}/${process.env.MDATABASE}?authSource=admin`,
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
  } catch (e) {
    console.trace(e);
  }
})();

const Users = require('./models/Users.js');
const Tests = require('./models/Tests.js');
const Questions = require('./models/Questions.js');
const Grades = require('./models/Grades.js');

module.exports = {
  Users,
  Tests,
  Questions,
  Grades
}