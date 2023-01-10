function cutAndReverse(text) {

    let half = text.length/2

    let firstHalf = text.substring(0,half).split('').reverse().join('')
    let secondHalf = text.substring(half).split('').reverse().join('')

    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')