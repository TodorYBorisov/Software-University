// console.log('Hello.');

// setTimeout(() => { console.log('Goodbye!'); }, 2000);

// console.log('Hello again!');

// //callback function

// function running() {
//     return 'Running';
// }
// function category(run, type) {
//     console.log(run() + ' ' + type);
// }
// category(running, 'sprint');

// ///////////////////////////////////////////////////

// function executor(resolve, reject) {
//     console.log('promise starting');

//     // setTimeout(() => {
//     //     reject(new Error('Simulated error'));
//     // }, 1000);

//     setTimeout(() => {
//         resolve('hello');
//     }, 2000);

//     console.log('promise ended');

// }
// let promise = new Promise(executor);
// promise.then(successCallback);
// promise.catch(failureCallback);
// promise.finally(() => {
//     console.log('operation completed');
// });

// function successCallback(data) {
//     console.log('received data:', data);
// }

// function failureCallback(error) {
//     console.log('Encountered error', error.message);
// }
//asyn/await

function createTimer() {
    return new Promise(resolve => {
        setTimeout(() => resolve('hello'), 2000);
    });
}
async function start() {
    const timerPromise = createTimer();

    console.log('starting');

    const data = await timerPromise;

    console.log('operation complete:', data);

    console.log('end of scope');
}
start();

