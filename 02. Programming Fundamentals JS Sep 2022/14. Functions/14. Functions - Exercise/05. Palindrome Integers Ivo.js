function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {

        let numberAsString = String(array[i]); // взимаме всеки един елемент от масива и го превръщаме на стринг
        let reversedString = numberAsString.split('').reverse().join('');//тук обръщаме всеки един елемент вече взетия стринг, като първо ги разделяме на отделни под елемнти, след което ги обръщаме и обеднияваме накрая отново в стринг но вече обърнат.

        if (numberAsString === reversedString) {
            console.log('true');
        } else {
            console.log('false');
        }

    }
}

palindromeIntegers([123, 323, 421, 121]);