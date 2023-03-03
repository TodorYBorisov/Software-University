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

function executor(resolve, reject) {
    console.log('promise starting');

    setTimeout(() => {
        resolve('hello');
    }, 2000);

    console.log('promise ended');

}
let promise = new Promise(executor);
promise.then(successCallback);
promise.catch();

function successCallback(data) {
    console.log('received data:', data);
    
}