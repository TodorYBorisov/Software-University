const bcrypt = require('bcrypt');

const pass = '12345';
const salt = 10; //препоръчва се да е мин 10 
const hashPass = bcrypt.hashSync(pass, salt);
const passMatch = bcrypt.compareSync(pass, '$2b$05$FhwgU9c0WlS6yHY9CGGZle2KL.dJrsQhHJubn1SkZsP3w9ZkWH8Hq');
console.log(passMatch);

async function hash(password) {
    return bcrypt.hash(password, 10);
}

async function compare(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}



module.exports = {
    hash,
    compare
};