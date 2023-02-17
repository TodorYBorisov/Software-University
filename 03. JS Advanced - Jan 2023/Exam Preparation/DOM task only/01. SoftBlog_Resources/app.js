function solve() {

   let authorEl = document.getElementById('creator');
   let titleEl = document.getElementById('title');
   let categoryEl = document.getElementById('category');
   let contenEl = document.getElementById('content');
   let createBtn = document.querySelector('button');

   createBtn.addEventListener('click', create);

   function create(event) {
      event.preventDefault();

      let authoR = authorEl.value;
      let titlE = titleEl.value;
      let categorY = categoryEl.value;
      let contenT = contenEl.value;

      let sectioN = document.querySelector('.site-content section');

      let articleSection = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = `${titlE}`;

      let p1 = document.createElement('p');
      p1.textContent = 'Category:';

      let strong1 = document.createElement('strong');
      strong1.textContent = `${categorY}`;

      let p2 = document.createElement('p');
      p2.textContent = 'Creator:';

      let strong2 = document.createElement('strong');
      strong2.textContent = `${authoR}`;

      let p3 = document.createElement('p');
      p3.textContent = `${contenT}`;

      let divBtns = document.createElement('div');
      divBtns.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');

      divBtns.appendChild(deleteBtn);
      divBtns.appendChild(archiveBtn);

      p1.appendChild(strong1);
      p2.appendChild(strong2);

      articleSection.appendChild(h1);
      articleSection.appendChild(p1);
      articleSection.appendChild(p2);
      articleSection.appendChild(p3);
      articleSection.appendChild(divBtns);

      sectioN.appendChild(articleSection);

      deleteBtn.addEventListener('click', deleteArticle);
      function deleteArticle() {
         articleSection.remove();
      }

      archiveBtn.addEventListener('click', moveToArchive);

      function moveToArchive() {
         articleSection.remove();

         let ol = document.querySelector('.archive-section ol');

         let liArchive = document.createElement('li');
         liArchive.textContent = `${titlE}`;
         ol.appendChild(liArchive);

         let titleSelect = document.querySelectorAll('ol li');

         let sorted = Array.from(titleSelect).sort((a, b) => a.textContent.localeCompare(b.textContent));

         for (let li of sorted) {
            
            ol.appendChild(li);
         }
      }
   }
}
