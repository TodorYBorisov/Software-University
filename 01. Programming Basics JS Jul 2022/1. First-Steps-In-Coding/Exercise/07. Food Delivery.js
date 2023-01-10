function foodDelivery(input){
    
    let chikenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;
    let foodDelivery = 2.50;
    

    let sum = chikenMenu * Number(input[0]) + fishMenu * Number(input[1]) + veganMenu * Number(input[2]);

    let dessert = sum * 0.2;

    let totaSum = sum + dessert + foodDelivery;

    console.log(totaSum);

}
foodDelivery(["9 ",
"2 ",
"6 "]
);
