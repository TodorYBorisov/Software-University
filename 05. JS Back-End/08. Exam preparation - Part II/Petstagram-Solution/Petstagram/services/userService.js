const bcrypt = require('bcrypt');
const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { email, username, password } = userInput;
    // Check if the username or email is already taken
    const isExisting = await User.findOne({ username });
    if (isExisting) {
        throw new Error('Username or email is already used!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, roundsBcrypt);

    // Create and save new user
    const user = await User.create({
        email,
        username,
        password: hashedPassword
    });

    // Create token
    return generateToken(user);
}

async function userLogin(userInput) {
    const { username, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password!');
    }

    // Validate password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error('Invalid username or password!');
    }

    // Create token
    return generateToken(user);
}

async function generateToken(user) {
    try {
        const token = await new Promise((resolve, reject) => {
            jwt.sign({ _id: user._id, email: user.email, username: user.username },
                jwtSecret,
                { expiresIn: '2d' },
                (err, signedToken) => {
                    if (err) {
                        reject(new Error('The token could not be signed!'));
                    } else {
                        resolve(signedToken);
                    }
                }
            );
        });

        return token;
    } catch (err) {
        throw new Error('An error occurred while generating the token!');
    }
}

module.exports = {
    userRegister,
    userLogin,
};