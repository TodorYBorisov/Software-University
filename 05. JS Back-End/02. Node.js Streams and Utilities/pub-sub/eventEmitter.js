const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('user-added', (userName, age) => {
    console.log(`New user is added - ${userName} who is ${age} years old.`);

});
eventEmitter.on('user-added', () => {
    console.log('New user is added 2!');

});


eventEmitter.emit('user-added', 'Pesho', 20);
