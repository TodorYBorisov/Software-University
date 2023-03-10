class Hex {
    
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;

    }

    toString() {
        //така указваме, че искаме да стрингосаме число в 16-тична бройна система
        return '0x' + `${this.value.toString(16).toUpperCase()}`;
    }
    plus(number) {

        return new Hex(this.value + number);
    }

    minus(number) {

        return new Hex(this.value - number);
    }
    parse(string) {
        //parseInt(number, 16) - подаваме число, което е като стринг и указваме да се парстне към 16-на бройна система
        return parseInt(string, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
