function building(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = 1; floor >=i; i++) {

        let buff = "";

        for (let x = 0; x < rooms; x++) {
            if (i === floor) {
                buff += `L${i}${x} `
            } else if (i % 2 === 0) {
                buff += `O${i}${x} `
            } else {
                buff += `A${i}${x} `
            }
        }
        console.log(buff);
    }
}

building(["6", "4"]);