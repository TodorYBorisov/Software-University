console.log('Hello.');

setTimeout(() => { console.log('Goodbye!'); }, 2000);

console.log('Hello again!');

//callback function
function running() {
    return 'Running';
}
function category(run, type) {
    console.log(run() + ' ' + type);
}
category(running, 'sprint');