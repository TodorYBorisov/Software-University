function adAstra(array) {

    array = array.shift();
    let pattern = /(\|{1}|\#{1})(?<item>[A-Za-z]+[ ]*[A-Za-z]+)\1(?<date>\d{2}\/\d+\/\d{2})\1(?<calories>\d+)\1/gm;
    let totalCalories = 0;
    let output = [];

    let match = pattern.exec(array);
    while (match !== null) {

        let name = match.groups.item;
        let expDate = match.groups.date;
        let itemCall = Number(match.groups.calories);

        totalCalories += itemCall
        output.push(`Item: ${name}, Best before: ${expDate}, Nutrition: ${itemCall}`)

        match = pattern.exec(array);
    }

    let daysLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysLast} days!`);

    for (const item of output) {
        console.log(item);
    }
}
//adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])