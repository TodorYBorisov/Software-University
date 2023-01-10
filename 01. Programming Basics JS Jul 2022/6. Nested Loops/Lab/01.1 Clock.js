function clock() {

    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {

            if (hour < 10) {
                if (minutes < 10) {
                    console.log(`0${hour}:0${minutes}`);
                } else {
                    console.log(`0${hour}:${minutes}`);
                }
            } else {
                if (minutes < 10) {
                    console.log(`${hour}:0${minutes}`);
                } else {
                    console.log(`${hour}:${minutes}`);
                }
            }
        }
    }
}

clock();