const {
    Tests,Users
} = require('../data');

const {
    generateToken,
} = require('../security/Jwt');

const {
    ServerError
} = require('../errors');

const {
    hash,
    compare
} = require('../security/Password');

const create_test = async (name, available_at, expires_at, available_to) => {
    const test = new Tests({
            name,
            available_at,
            expires_at,
            available_to
    });
    return await test.save();
};

const view_test_id = async (id) => {
    await Tests.findById(id);
};

//update_test(name,available_at,expires_at,available_to)
const update_test = async (id,name,available_at,expires_at,available_to) => {
    await Tests.findByIdAndUpdate(id,name,available_at,expires_at,available_to);
};

const view_tests_all = async () => {
    return await Tests.find();
};

const view_tests_student = async (id) => {
    let user = await Users.findById(id);
    await Tests.find({available_to:user.class_u});
};

const view_tests_student_active = async (id) => {
    let user = await Users.findById(id);
    let today = new Date();
    await Tests.find({available_to:user.class_u},{ available_at: {$lt : today}},{ expires_at: {$gt: today}});
};

const view_tests_profesor_active = async () => {
    let today = new Date();
    await Tests.find({ available_at: {$lt : today}},{ expires_at: {$gt: today}});
};


module.exports = {
    create_test,
    update_test,
    view_test_id,
    view_tests_all,
    view_tests_student,
    view_tests_student_active,
    view_tests_profesor_active
}