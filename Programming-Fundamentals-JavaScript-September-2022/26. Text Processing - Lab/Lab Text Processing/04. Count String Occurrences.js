function countStringOccurrences(text, word) {

    let counter = 0;
    let textSplit = text.split(' ');

    for (let occurence of textSplit) {

        if(occurence === word){
            counter++;
        }   
    }
    console.log(counter);
}
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'
)