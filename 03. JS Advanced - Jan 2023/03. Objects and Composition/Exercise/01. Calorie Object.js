function calorieObject(array) {

    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let product = array[i];
        let cal = Number(array[i + 1]);

        if (i % 2 === 0){
            obj[product]=cal;
        }
    }

    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
