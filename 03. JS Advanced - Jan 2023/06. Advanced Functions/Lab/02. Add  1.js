function add(number) {
    function add(a, b) {
        return a + b;

    }
    return add.bind(this, number);
}
let add5 = add(5);

console.log(add5(2));
console.log(add5(3));
console.log(add5(10));