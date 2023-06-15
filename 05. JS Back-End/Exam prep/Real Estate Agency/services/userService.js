const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'ea4e9079925db2d565eccd34766c8531cf21d27eeb531218167ad5876078ac26';

async function register(name, username, password) { // тук след регистрация да видя на къде се редиректва в задачата
    
    const existingName = await User.findOne({ name });       // Проверяваме по email, дали вече има такъв
    if (existingName) {                                        // Ако намерим съвпадение
        throw new Error('Username or name already exists!');   // Хвърляме грешка
    }

    const existingUsername = await User.findOne({ username }); // Проверяваме по username, дали вече има такъв в User базата
    if (existingUsername) {                                     // Ако намерим съвпадение
        throw new Error('Username or name already exists!');   // Хвърляме грешка
    }

    if (password.length < 4) {                                   // Валидираме дължината на паролата
        throw new Error('Password is too short!');               // Хвърляме грешка
    }

    const hashedPassword = await bcrypt.hash(password, 10);  // Хешираме паролата, като подаваме паролата във вида подадена от потребителя и я осоляваме 10 пъти

    const user = await User.create({    //Създаваме нов потребител в базата данни с email, username,  и hashedPassword 
        name,
        username,
        hashedPassword,
    });

    //ТУК ДА ВИДИМ ДАЛИ РЕГИСТРИРАНЕТО ТРЯБВА ДА СЪЗДАДЕ СЕСИЯ
    return createSession(user);
}

async function login(username, password) {

    if (password.length < 4) {                      // Ако има валидация за дължина на паралота
        throw new Error('Password is too short!'); // Хвърляме грешка
    }

    const user = await User.findOne({ username });   // Проверяваме по username, дали вече има такъв
    if (!user) {                                             // Ако няма регистриран такъв user
        throw new Error('Incorrect username or password!');    // Хвърляме грешка 
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);   // Сравняваме подадената парола с хешираната от намерения user 

    if (!hasMatch) {                                             // Ако няма съвпадение 
        throw new Error('Incorrect username or password!');        // Хвърляме грешка 
    }

    return createSession(user);
}

function createSession({ _id, name, username }) { //това е user обекта който сме направили по горе
    const payload = {  // Това са данните, които искаме да запазим в токена        
        _id,
        name,
        username
    };

    const token = jwt.sign(payload, secret); // Връщаме подписан токена, ако искаме да изтича добавяме 
    return token;                           //{expiresIn: '2h'} ако искаме да изтича токена го подаваме след secter
}

function verifyToken(token) {
    return jwt.verify(token, secret);
}

module.exports = {
    register,
    login,
    verifyToken
};


// За secret => Изпълнява се в терминала и генерира 64 bit ASCII string
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"