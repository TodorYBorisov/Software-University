
function remove(num) {

    let arr = [4, 7, 2, 50, 80, 12];

    arr = arr.filter(el => el !== num);

    console.log(arr);
}
remove(50)


