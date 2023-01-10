function test(array) {
    let myArray = [-10, 5, 1, 2, 3, 4];
    let myStringArray = ['toshko', 'mitko', 'Zarko', 'Dimo', 'Plamen']

    console.log(myArray.sort((a, b) => a - b)) //сортира от ниското към високата стойност за масив с числа
    console.log(myArray.sort((a, b) => b - a)) // сортира от високата към ниската стойност за масив с числа

    console.log(myStringArray.sort((a, b) => a.localeCompare(b))); //сортира стринга по азбучен ред като не се взима под внимание ASCII стойностите. 
    console.log(myStringArray.sort((a, b) => b.localeCompare(a))); //сортира стринга от зад напред
}
test()