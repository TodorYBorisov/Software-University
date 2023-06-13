const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'ea4e9079925db2d565eccd34766c8531cf21d27eeb531218167ad5876078ac26';

async function register(email, firstName, lastName, password) { // тук след регистрация да видя на къде се редиректва в задачата

    const existingEmail = await User.findOne({ email });      // Проверяваме по email, дали вече има такъв
    if (existingEmail) {                                        // Ако намерим съвпадение
        throw new Error('First name or last name or email already exists!');   // Хвърляме грешка
    }
    // const existingFirstName = await User.findOne({ firstName }); // Проверяваме по username, дали вече има такъв в User базата
    // if (existingFirstName) {                                     // Ако намерим съвпадение
    //     throw new Error('First name or last name or email already exists!');   // Хвърляме грешка
    // }
    // const existingLastName = await User.findOne({ lastName }); // Проверяваме по username, дали вече има такъв в User базата
    // if (existingLastName) {                                     // Ако намерим съвпадение
    //     throw new Error('First name or last name or email already exists!');   // Хвърляме грешка
    // }


    if (password.length < 5) {                                   // Валидираме дължината на паролата
        throw new Error('Password is too short!');               // Хвърляме грешка
    }

    const hashedPassword = await bcrypt.hash(password, 10);  // Хешираме паролата, като подаваме паролата във вида подадена от потребителя и я осоляваме 10 пъти

    const user = await User.create({    //Създаваме нов потребител в базата данни с email, username,  и hashedPassword 
        email,
        firstName,
        lastName,
        hashedPassword,
    });

    //ТУК ДА ВИДИМ ДАЛИ РЕГИСТРИРАНЕТО ТРЯБВА ДА СЪЗДАДЕ СЕСИЯ
    return createSession(user);
}

async function login(email, password) {

    if (password.length < 5) {                      // Ако има валидация за дължина на паралота
        throw new Error('Password is too short!'); // Хвърляме грешка
    }

    const user = await User.findOne({ email });  // Проверяваме по username, дали вече има такъв
    if (!user) {                                             // Ако няма регистриран такъв user
        throw new Error('Incorrect email or password!');    // Хвърляме грешка 
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);   // Сравняваме подадената парола с хешираната от намерения user 

    if (!hasMatch) {                                             // Ако няма съвпадение 
        throw new Error('Incorrect username/email or password!');        // Хвърляме грешка 
    }

    return createSession(user);
}

function createSession({ _id, email, firstName, lastName }) { //това е user обекта който сме направили по горе
    const payload = {  // Това са данните, които искаме да запазим в токена        
        _id,
        email,
        firstName,
        lastName
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