function hospital(input) {

    let period = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;



    for (let i = 1; i <= period; i++) {

        let patients = Number(input[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {

            doctors++;
        }

        if (patients <= doctors) {
            treatedPatients += patients;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patients - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital(['6','25','25','25','25','25','2']);