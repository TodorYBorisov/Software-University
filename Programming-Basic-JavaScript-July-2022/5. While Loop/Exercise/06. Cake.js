function cake(input) {

    let index = 0;

    let width = input[index];
    index++;

    let length = input[index];
    index++;

    let command = input[index];
    index++;

    let totalPieces = width * length;


    while (command !== "STOP") {

        let nextPiece = Number(command);

        totalPieces -= nextPiece;

        command = input[index];
        index++;

        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }

    }

    if(totalPieces>0){
        console.log(`${totalPieces} pieces are left.`);
    }
    
}

    cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);
    


