function theBiscuitFactory(array) {

    let numberOfBiscuitsPerday = Number(array[0]);
    let workers = Number(array[1]);
    let competitorFactory = Number(array[2]);

    let totalBiscuits = 0;
    let totalBiscuitsperDay = numberOfBiscuitsPerday * workers

    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0) {
            totalBiscuits +=Math.floor(totalBiscuitsperDay * 0.75)
        } else {
            totalBiscuits +=Math.floor(totalBiscuitsperDay);
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`)

    if(totalBiscuits>competitorFactory){

        let morePercent = ((totalBiscuits - competitorFactory) / competitorFactory) *100

        console.log(`You produce ${morePercent.toFixed(2)} percent more biscuits.`)
    }else{

        let lessPercent = ((competitorFactory -totalBiscuits) / competitorFactory)*100;

        console.log(`You produce ${lessPercent.toFixed(2)} percent less biscuits.`);
    }
}
//theBiscuitFactory(["78", "8", "16000"]);
// theBiscuitFactory(["65",
// "12",
// "26000"]);
theBiscuitFactory(["163",
"16",
"67020"])
