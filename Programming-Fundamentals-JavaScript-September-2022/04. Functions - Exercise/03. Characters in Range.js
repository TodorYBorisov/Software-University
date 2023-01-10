function charactersInRange(char1, char2) {

    //let start = char1.charCodeAt(char1);
    //let end = char2.charCodeAt(char2);

    let start = Math.min(char1.charCodeAt(),char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(),char2.charCodeAt());

    let buff = '';

    if (start < end) {
        for (let i = start + 1; i < end; i++) {

            let element = String.fromCharCode(i)

            buff += `${element} `
        }
    }

    if (start > end) {

        for (let j = end + 1; j < start; j++) {

            let element = String.fromCharCode(j)

            buff += `${element} `
        }
    }

    console.log(buff);
}


charactersInRange('C', '#')