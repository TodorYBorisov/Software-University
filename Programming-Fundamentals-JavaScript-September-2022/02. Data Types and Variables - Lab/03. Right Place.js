function rightPlace(string, char, result) {
    
    let replace = string.replace('_',char);
    
    let ouput = replace;

    if(ouput=== result){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }

}
rightPlace('Str_ng', 'I', 'Strong')