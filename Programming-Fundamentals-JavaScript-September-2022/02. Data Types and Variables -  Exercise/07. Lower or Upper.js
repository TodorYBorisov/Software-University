function lowerOrUpperCase(char) {

  let ascii = char.charCodeAt();

  if(ascii>=65 && ascii<=90){
    console.log('upper-case');
  }else{
    console.log('lower-case');
  }
    
}

lowerOrUpperCase('L');