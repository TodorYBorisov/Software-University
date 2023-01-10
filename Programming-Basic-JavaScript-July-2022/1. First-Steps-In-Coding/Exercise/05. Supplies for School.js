function supplies (input){

let pen = 5.80;
let marker = 7.20;
let cleaner = 1.20;

let numPen = Number(input[0]);
let numMarkers = Number(input[1]);
let litersCleaner = Number(input[2]);
let interestDiscount = Number(input[3]) /100;

let neededMoney = (numPen*pen) + (numMarkers*marker)+(cleaner*litersCleaner);

let finalSum = neededMoney - (neededMoney*interestDiscount);

console.log(finalSum)

}
supplies(["4 ",
"2 ",
"5 ",
"13 "]
)