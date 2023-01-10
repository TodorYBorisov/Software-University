function listOfProducts(array) {

    let sortArray = array.sort();

    for (let i = 0; i < sortArray.length; i++) {

        console.log(`${i + 1}.${sortArray[i]}`);
    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples'])