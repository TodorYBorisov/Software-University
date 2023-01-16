function printEvryNthElemnt(array,step) {

    let res = [];
    for (let i = 0; i < array.length; i+=2) {
        const element = array[i];
        res.push(element);
    }
    console.log(res);
}
printEvryNthElemnt(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);