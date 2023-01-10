function deposit(input){

let sumDeposit = Number(input[0]);
let month = Number(input[1]);
let interest = Number(input[2]) / 100;

let accumInterest = sumDeposit * interest;
let interestPerMonth = accumInterest /12 ;

let totalSum = sumDeposit + (month * interestPerMonth)

console.log(totalSum);

}
deposit(["2350",
"6 ",
"7 "]
);