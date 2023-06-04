const bcrypt = require('bcrypt');

const pass = '12345';
const salt = 5;
const hashPass = bcrypt.hashSync(pass, salt);

console.log(hashPass);