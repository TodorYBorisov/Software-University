function constructorCrew(object) {

    let worker = {
        weight: 0,
        experience: 0,
        levelOfHydrated: 0,
        dizziness: false,
    };

    for (let key in object) {
    
        if (worker.hasOwnProperty(key)) {

            worker[key] = object[key];

            if (object[key] === true) {

                worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
                worker.dizziness = false;
            }
        }
    }


    console.log(worker);
}
constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
);


