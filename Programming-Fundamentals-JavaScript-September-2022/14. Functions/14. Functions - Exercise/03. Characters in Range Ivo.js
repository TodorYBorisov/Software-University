function charactersInRange(char1, char2) {

    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let buff = '';

    for (let i = start + 1; i < end; i++) {

        let element = String.fromCharCode(i)

        buff += `${element} `
    }

    console.log(buff);
}

charactersInRange('C', '#')