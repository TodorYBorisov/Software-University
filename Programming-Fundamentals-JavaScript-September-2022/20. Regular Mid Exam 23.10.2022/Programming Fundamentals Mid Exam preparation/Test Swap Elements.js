function swap(array) {

    //let fisrtElement = array.slice(3,4).join();
    //array.push(fisrtElement)
    //let secondElement =array.slice(3,4).join();

    // array.splice(1,1,secondElement);
    //array.splice(3,1,fisrtElement)
    //let take = array.splice(-3)

    //console.log(fisrtElement);
    // console.log(array)
    // array = array.filter(x => x !== 90)
    // console.log(array.join(' '))

//  let sliced = array.splice(0,4).map((x)=>x-5)
//   array = sliced.concat(array)

 

let action = array.toString().split(' - ')


 console.log(action)

}
//swap([23, -2, 321, 87, 42, 90, -123])
//swap(['Pistol', 'Coins', 'Wood', 'Gold', 'Silver', 'Bronze', 'Medallion', 'Cup'])
swap(['Combine Items - Sword:Bow']);


//let arrayToChange = array.shift().split(' ').map(x=>Number(x));