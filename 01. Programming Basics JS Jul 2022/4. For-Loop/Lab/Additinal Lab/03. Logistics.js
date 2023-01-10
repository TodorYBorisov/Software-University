function logistics(input) {

    let numberOfLoads = String(input[0]);
    let van = 0;
    let truck = 0;
    let train = 0;
    let totalWeight = 0;

    for (let i = 1; i <= numberOfLoads; i++) {

        let weghts = Number(input[i]);

        totalWeight += weghts;

        if (weghts <= 3) {
            van += weghts;

        } else if (weghts >= 4 && weghts <= 11) {
            truck += weghts;

        } else {
            train += weghts;
        }
    }
    let avgPerTon = (van * 200 + truck * 175 + train * 120) / totalWeight;
    console.log((avgPerTon).toFixed(2));

    let percentVan = van/totalWeight*100;
    let percentTruck = truck/totalWeight*100;
    let percentTrain = train/totalWeight*100;

    console.log((percentVan).toFixed(2) + "%");
    console.log((percentTruck).toFixed(2) + "%");
    console.log((percentTrain).toFixed(2) + "%");
}
logistics(["4", "1", "5", "16", "3"]);
