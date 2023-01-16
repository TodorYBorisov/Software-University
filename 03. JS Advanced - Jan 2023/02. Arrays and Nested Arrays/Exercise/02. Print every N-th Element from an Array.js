function printEvryNthElemnt(array,step) {

    let res = [];
    for (let i = 0; i < array.length; i+=step) {
        const element = array[i];
        res.push(element);
    }
    return res;
}
printEvryNthElemnt(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);