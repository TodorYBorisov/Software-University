function create(array) {

   for (let section of array) {

      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = section;
      pElement.style.display = 'none';

      let parentElement = document.getElementById('content');
      parentElement.appendChild(divElement);
      divElement.appendChild(pElement);

      divElement.addEventListener('click', (event) => {

         if (event.currentTarget.firstElementChild.style.display = 'none') {
            event.currentTarget.firstElementChild.style.display = '';
         }
      });
   }
}