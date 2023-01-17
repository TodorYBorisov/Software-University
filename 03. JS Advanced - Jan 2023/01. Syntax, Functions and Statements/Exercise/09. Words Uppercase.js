function wordsUppercase(input) {

    let pattern = /\w+/gm;

    let result = input.match(pattern);

    let toUpper = result.map((el) => el.toUpperCase());

    console.log(toUpper.join(', '));

    //console.log(result.map((el) => el.toUpperCase()).join(', '));
}
wordsUppercase('Hi, how are you?');


