const {
    Users
} = require('../data');

const {
    generateToken, verifyAndDecodeData
} = require('../security/Jwt');

const {
    ServerError
} = require('../errors');

const {
    hash,
    compare
} = require('../security/Password');

const add = async (username, password, name, surname, email) => {
    const hashedPassword = await hash(password);
    const role = 'neactivat';
    const user = new Users({
        username,
        password: hashedPassword,
        role,
        name,
        surname,
        email
    });
    await user.save();
};

const authenticate = async (username, password) => {

    const user = await Users.findOne({ username });
    if (user === null) {
        throw new ServerError(`Utilizatorul inregistrat cu ${username} nu exista!`, 404);
    }
    
    if (await compare(password, user.password)) {
        return await generateToken({
            userId: user._id,
            userRole: user.role
        });
    } 
    throw new ServerError("Combinatia de username si parola nu este buna!", 404);
};

const update_user = async (id, name, surname, email) => {
    return await Users.findOneAndUpdate({ _id: id}, {name: name, surname: surname, email: email}, {new: true});
};

const update_password = async (username, newPassword) => {
    const hashedPassword = await hash(newPassword);
    return await Users.findOneAndUpdate({ username: username}, {password: hashedPassword}, {new: true});
};


const update_admin = async (id, role, class_u) => {
    await Users.findByIdAndUpdate(id, role, class_u);
};

const get_users = async () => {
    console.log('cevaaa');
    return await Users.find();
};
const get_users_activate = async () => {
    await Users.find({role: 'neactivat'});
};
const get_users_id = async () => {
    await Users.findById(id);
};
const get_profile = async (token) => {
    const decoded = await verifyAndDecodeData(token);
    return await Users.findById(decoded.userId);
};
module.exports = {
    add,
    authenticate,
    update_user,
    update_admin,
    update_password,
    get_users,
    get_users_activate,
    get_users_id,
    get_profile
}