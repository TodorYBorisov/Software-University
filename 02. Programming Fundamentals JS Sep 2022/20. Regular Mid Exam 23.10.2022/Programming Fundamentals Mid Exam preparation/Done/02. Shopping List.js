function shoppingList(array) {

    let list = array.shift().split('!');

    for (let i = 0; i < array.length; i++) {

        let command = array[i]

        if(command === 'Go Shopping!'){
            break;
        }

        let action = command.split(' ')
        let item = action[1]

        if (action[0] === 'Urgent') {
            if (!list.includes(item)) {
                list.unshift(item)
            }
        } else if (action[0] === 'Unnecessary') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }
        } else if (action[0] === 'Correct') {
            let newItem = action[2];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1, newItem);
            }
        } else if (action[0] === 'Rearrange') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                let remove = list.splice(index, 1);
                list.push(remove);
            } 
        }
 
    }
    console.log(list.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
              "Urgent Salt",
              "Unnecessary Grapes",
              "Correct Pepper Onion",
              "Rearrange Grapes",
              "Correct Tomatoes Potatoes",
              "Go Shopping!"]);
