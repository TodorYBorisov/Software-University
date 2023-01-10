function moving(input) {
    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;

    let command = input[index];
    index++;

    let totalVolume = width * length * height;

    while (command !== "Done") {

        let boxVolume = Number(command);

        totalVolume -= boxVolume;

        if (totalVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`)
            break;
        }

        command = input[index];
        index++;
    }

    if (totalVolume > 0) {
        console.log(`${totalVolume} Cubic meters left.`);
    }

}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);