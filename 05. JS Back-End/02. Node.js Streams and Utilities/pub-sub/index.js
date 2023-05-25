const eventBus = require('./eventBus');

eventBus.subscribe('user-add', () => {
    console.log('New user is added 1!');

});
eventBus.subscribe('user-add', () => {
    console.log('New user is added 2!');

});

eventBus.publish('user-add');