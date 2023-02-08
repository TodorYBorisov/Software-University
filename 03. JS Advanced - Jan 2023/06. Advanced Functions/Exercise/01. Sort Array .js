function sortArr(arr, string) {

    if (string === 'asc') {
        arr = arr.sort((a, b) => a - b);
     
    } else if (string === 'desc') {
      arr = arr.sort((a, b) => b - a);
    }
    
    return arr;
}
sortArr([14, 7, 17, 6, 8], 'asc');
//sortArr([14, 7, 17, 6, 8], 'desc');