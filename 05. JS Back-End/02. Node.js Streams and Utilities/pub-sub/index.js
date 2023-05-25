const eventBus = require('./eventBus');

// eventBus.subscribe('user-added', (userName, age) => {
//     console.log(`New user is added - ${userName} who is ${age} years old.`);

// });
eventBus.subscribe('user-added', () => {
    console.log('New user is added 2!');

});

const unsubscribe = eventBus.subscribe('user-added', (userName, age) => {
    console.log(`New user is added - ${userName} who is ${age} years old.`);

});

eventBus.publish('user-added', 'Pesho', 20);

unsubscribe();
eventBus.publish('user-added', 'Pesho', 20);
