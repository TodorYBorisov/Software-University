const bcrypt = require('bcrypt');

// {
//     username: String,
//     hashedPassword: String,
//     role: 'user|'admin
// }

const users = [];

async function registerUser(username, password) {

    if (users.find(u => u.username.toLowerCase() == username)) {
        //users ще идва от модела const user = await Users.findOne({ username: { $eq: username } });
        throw new Error('Username is taken');
    }

    const user = {
        username,
        hashedPassword: await bcrypt.hash(password, 10),
        role: ['user']
    };

    users.push(user);
}


async function loginUser(username, password) {

    //users ще идва от модела const user = await Users.findOne({ username: { $eq: username } });

    const user = users.find(u => u.username.toLowerCase() == username.toLowerCase());

    if (!user) {
        return false;
    } else {
        return bcrypt.compare(password, user.hashedPassword);
    }

}


module.exports = {
    users,
    registerUser,
    loginUser,
};