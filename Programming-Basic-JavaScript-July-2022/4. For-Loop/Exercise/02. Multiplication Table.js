function mumtiplicationTable(input){

    let number = Number(input[0]);

    for (let i = 1; i <=10; i++) {
       
        let res = i * number;

        console.log(`${i} * ${number} = ${res}`);
        
    }


}
mumtiplicationTable(["5"]);