function modernTimesOf(string) {

    let words = string.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            
            let isOnlyLetters = true;

            for (let i = 1; i < word.length; i++) {

                if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90 && (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122)) {
                    isOnlyLetters = false;
                    break;
                }
            }
            if (isOnlyLetters) {
                console.log(word.substring(1));
            }
        }
    }
}
modernTimesOf('The symbol # is known #variously in English-speaking #regions as the #number sign')