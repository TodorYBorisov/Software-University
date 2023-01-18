function evenPositionElements(array) {

    let result = '';

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (i % 2 === 0) {
            result += `${element} `;
        }
    }

    console.log(result);
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);