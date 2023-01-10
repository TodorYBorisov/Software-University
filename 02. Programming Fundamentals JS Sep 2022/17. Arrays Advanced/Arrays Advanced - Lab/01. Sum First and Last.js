function sumFirstAndLast(array) {

    let firstElemet = array.shift(); // маха първия елемент от масива и го запазва в променливата firstElement
    let lastElement = array.pop();  // маха последния елемет от масива и го запазва в променливата lastElemet

    let sum = Number(firstElemet) + Number(lastElement); //за да ги сумираме ги парсваме към число с Number
    console.log(sum);

    //console.log(Number(array[0])+Number(array[array.length - 1]));

}
sumFirstAndLast(['20', '30', '40'])

//Ако имаме само един елемент в масива не е добре да се ползват тези оператори, а по добре е да се ползва по Index. Входните данни е добре да си ги пазим в оригиналния вид!