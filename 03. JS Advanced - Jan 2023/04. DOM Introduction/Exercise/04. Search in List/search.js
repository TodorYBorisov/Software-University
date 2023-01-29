function search() {

   let list = document.querySelectorAll('#towns li');
   let search = document.getElementById('searchText').value;

   // for (let town of list) { // тук изчистваме всички предишни градове
   //    town.style.textDecoration = '';
   //    town.style.fontWeight = 'normal';
   // }

   let counter = 0;
   for (let line of list) {

      if (line.textContent.includes(search)) {
         counter++;
         line.style.textDecoration = 'underline';
         line.style.fontWeight = 'bold';
      } else {                // изчистваме предходното търсене
         line.style.textDecoration = 'none'; 
         line.style.fontWeight = 'normal';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
