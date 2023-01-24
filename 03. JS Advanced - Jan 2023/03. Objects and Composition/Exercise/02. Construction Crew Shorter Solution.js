function constructorCrew(worker) {

    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.experience * worker.weight;
        worker.dizziness = false;
    }

    return worker;
}
constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});


