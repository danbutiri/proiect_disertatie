const bcryptjs = require('bcryptjs');

// folosim hash atunci cand stocam parola in baza de date, la register
const hash = async (plainTextPassword) => {
    const salt = await bcryptjs.genSalt(5);
    const hash = await bcryptjs.hash(plainTextPassword, salt);
    return hash

};

// folosim compare atunci cand primim cerere de autentificare
const compare = async (plainTextPassword, hashedPassword) => {
    const isOk = await bcryptjs.compare(plainTextPassword, hashedPassword);
    return isOk;
};

module.exports = {
    hash,
    compare
}