const listeners = {};

const publish = (eventName, ...eventData) => {
    //... ползваме рест оператора за да вземем всички параметри които са подадени на пъблиша, които ги събира след първия в един масив

    listeners[eventName]?.forEach(listener => listener(...eventData)); //? e optional chaining , за да няма грешка
};

const subscribe = (eventName, eventListener) => {
    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventListener);

    //това е когат искаме да се отпишен от даден ивент
    return () => {
        console.log('User unsubscribed.');
        listeners[eventName] = listeners[eventName].filter(x => x != eventListener);
    };

};

const eventBus = {
    publish,
    subscribe,
};

module.exports = eventBus;