function test(array) {

    let reversPart = '!gnil'
    let substring = '::';
    let replace= '-'

    if (array.includes(substring)) {
         array = array.split(substring).join(replace)

        let startIndex = Number(array.indexOf(inc))
        let endIndex = Number(startIndex + inc.length)
        console.log(startIndex);
        console.log(endIndex);

        console.log(array)
    }

    let result = reversPart.split('').reverse().join('')
    console.log(result)


   let data ={

    'alpha':'winstno',
    'toshko': '5',
    'Goshko': '4',
    'Moshko': '56'
   }
let entries = Object.entries(data);
let element = entries[3]
console.log(element[1])

}
test('icecream::hot::mer')

function test(array) {
  array = array.toUpperCase()

    console.log(array);

}
test(["abcdefghijklmnopqrstuvwxyz"])


let str = "I am JavaScript developer";
let sub = str.substring(5, 10).toUpperCase();
console.log(sub); // Expected output: JavaS


let test = ['1','2'];

console.log(test[2]);