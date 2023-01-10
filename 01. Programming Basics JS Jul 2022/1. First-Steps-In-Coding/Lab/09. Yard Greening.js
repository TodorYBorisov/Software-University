function yard (input){

    let squareArea=7.61;

    let price = Number(input[0]) * squareArea;

    let discount = price * 0.18;

    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);


}
yard(["150"]);