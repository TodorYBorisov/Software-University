function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll('tbody tr');
      let input = document.getElementById('searchField').value;

      for (let row of rows) {

         row.classList.remove('select'); // с това се зачистваме ако има приложение класове преди това

         if (row.innerHTML.includes(input) && input !== '') {
            row.className = 'select'; // тук добавяме на всеки ред клас, които е от ccs файла
         }
      }
      input = '';
   }
}
