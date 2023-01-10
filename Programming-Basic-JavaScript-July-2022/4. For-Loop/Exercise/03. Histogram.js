function histogram(input) {

    let number = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let i = 1; i <= number; i++) {

        let nextNumber = Number(input[i]);

        if (nextNumber < 200) {
            p1++;
        } else if (nextNumber >= 200 && nextNumber <= 399) {
            p2++;
        } else if (nextNumber >= 400 && nextNumber <= 599) {
            p3++;
        } else if (nextNumber >= 600 && nextNumber <= 799) {
            p4++;
        } else if (nextNumber >= 800) {
            p5++;
        }

    }

    let percentP1 = (p1 /number)* 100;
    let percentP2 = (p2 /number)* 100;
    let percentP3 = (p3 /number)* 100;
    let percentP4 = (p4 /number)* 100;
    let percentP5 = (p5 /number)* 100;

    console.log((percentP1).toFixed(2) + "%");
    console.log((percentP2).toFixed(2) + "%");
    console.log((percentP3).toFixed(2) + "%");
    console.log((percentP4).toFixed(2) + "%");
    console.log((percentP5).toFixed(2) + "%");


}

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"]);