function rotateArray(array) {

    let rotation = Number(array.pop());
    //let usfullRoration = rotation % array.length;

    for (let i = 0; i < rotation ; i++) {
        array.unshift(array.pop())
        
    }

    console.log(array.join(' '))
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);