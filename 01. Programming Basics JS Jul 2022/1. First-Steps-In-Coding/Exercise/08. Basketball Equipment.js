function basketball(input) {

    let annualTax = Number(input[0]);

    let shoes = annualTax * 0.6;
    let outfit = shoes * 0.8;
    let basketball = outfit / 4;
    let basketballAccessories = basketball / 5;

    let totalSum = shoes + outfit + basketball + basketballAccessories + annualTax;

    console.log(totalSum)
}
basketball(["550"]);