function printEvryNthElemnt(array,step) {

    let res = [];
    for (let i = 0; i < array.length; i+=step) {
        const element = array[i];
        res.push(element);
    }
    return res;
    //return array.filter((element,index)=> index%step===0);
    //решение на един ред с филтър функция която връща директно масив
    //Може да прескочим element като поставим _ на наегово място

}
printEvryNthElemnt(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);