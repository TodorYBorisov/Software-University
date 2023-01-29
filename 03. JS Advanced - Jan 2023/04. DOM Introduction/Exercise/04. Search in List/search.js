function search() {

   let list = document.querySelectorAll('#towns li');
   let search = document.getElementById('searchText').value;

   for (let town of list) {
      town.style.textDecoration = '';
      town.style.fontWeight = 'normal';
   }

   let counter = 0;
   for (let line of list) {

      if (line.textContent.includes(search)) {
         counter++;
         line.style.textDecoration = 'underline';
         line.style.fontWeight = 'bold';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
