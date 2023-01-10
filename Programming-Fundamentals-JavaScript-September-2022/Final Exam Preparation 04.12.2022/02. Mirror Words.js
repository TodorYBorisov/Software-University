function mirrorWords(array) {

    let text = array.shift();
    let pattern = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;
    let match = pattern.exec(text);

    let validPairsCount = 0;
    let validPairs = [];
    let mirrorWords = [];
    
    while (match !== null) {
        validPairsCount++;
        validPairs.push(match[0]);

        let firstWord = match.groups.first;
        let secondWord = match.groups.second;

        if (firstWord === secondWord.split('').reverse().join('')) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`)
        }
        
        match = pattern.exec(text)
    }

    if (validPairsCount === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }

    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));   
    }else{
        console.log(`No mirror words!`);
    }
}
mirrorWords([
'@mix#tix3dj#poOl##loOp#wl@@bong&//song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);   
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])