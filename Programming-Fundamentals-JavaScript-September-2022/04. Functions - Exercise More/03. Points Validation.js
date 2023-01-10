function pointsValidator(array) {

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    let startX = 0;
    let startY = 0;

    let distanceCheck1 = Math.sqrt(Math.pow((startX - x1),2) + Math.pow((startY - y1),2));

    if (distanceCheck1 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${startX}, ${startY}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${startX}, ${startY}} is invalid`);
    }

    let distanceCheck2 = Math.sqrt(Math.pow((startX - x2),2) + Math.pow((startY - y2),2));

    if (distanceCheck2 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {${startX}, ${startY}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${startX}, ${startY}} is invalid`);
    }

    let distanceCheck3 = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

    if (distanceCheck3 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

pointsValidator([3, 0, 0, 4]);