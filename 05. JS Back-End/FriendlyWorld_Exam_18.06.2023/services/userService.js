const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'ea4e9079925db2d565eccd34766c8531cf21d27eeb531218167ad5876078ac26';

async function register(email, password) { 


    const existingEmail = await User.findOne({ email });        
    if (existingEmail) {                                        
        throw new Error('Email already exists or incorrect!');   
    }
    if (password.length < 4) {                                   
        throw new Error('Password is too short!');               
    }

    const hashedPassword = await bcrypt.hash(password, 10);  

    const user = await User.create({    
        email,
        hashedPassword
    });

    
    return createSession(user);
}

async function login(email, password) {

    if (password.length < 4) {                      
        throw new Error('Password is too short!'); 
    }

    const user = await User.findOne({ email });   
    if (!user) {                                             
        throw new Error('Email already exists or incorrect!');    
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);  

    if (!hasMatch) {                                              
        throw new Error('Incorrect email or password!');        
    }

    return createSession(user);
}

function createSession({ _id, email}) { 
    const payload = {         
        _id,
        email
    };

    const token = jwt.sign(payload, secret, { expiresIn: '2d' });  
    return token;                           
}

function verifyToken(token) {
    return jwt.verify(token, secret);
}

module.exports = {
    register,
    login,
    verifyToken
};
