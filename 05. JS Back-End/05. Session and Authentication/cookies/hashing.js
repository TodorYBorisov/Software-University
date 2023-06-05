const bcrypt = require('bcrypt');

const pass = '12345';
const salt = 5;
const hashPass = bcrypt.hashSync(pass, salt);


const resultCompare = bcrypt.compareSync(pass,'$2b$05$FhwgU9c0WlS6yHY9CGGZle2KL.dJrsQhHJubn1SkZsP3w9ZkWH8Hq');
console.log(resultCompare);