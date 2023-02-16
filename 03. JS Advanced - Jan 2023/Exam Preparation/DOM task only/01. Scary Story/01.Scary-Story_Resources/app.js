window.addEventListener('load', solve);

function solve() {

  let fNameEl = document.getElementById('first-name');
  let lNameEl = document.getElementById('last-name');
  let ageEl = document.getElementById('age');
  let storyTitleEl = document.getElementById('story-title');
  let genreEl = document.getElementById('genre');
  let storyTextEl = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', moveToPreview);

  function moveToPreview(event) {

    event.preventDefault();

    if (fNameEl.value === '' || lNameEl.value === '' || ageEl.value === '' || storyTitleEl.value === '' || storyTextEl.value === '') {
      return;
    }
    let firstName = fNameEl.value;
    let lastName = lNameEl.value;
    let age = ageEl.value;
    let storyTitle = storyTitleEl.value;
    let genre = genreEl.value;
    let storyText = storyTextEl.value;

    let ulElPreview = document.getElementById('preview-list');

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;

    let p1 = document.createElement('p');
    p1.textContent = `Age: ${age}`;

    let p2 = document.createElement('p');
    p2.textContent = `Title: ${storyTitle}`;

    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genre}`;

    let p4 = document.createElement('p');
    p4.textContent = `${storyText}`;

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ulElPreview.appendChild(li);

    // saveBtn.disabled = false;
    // editBtn.disabled = false;
    // deleteBtn.disabled = false;

    fNameEl.value = '';
    lNameEl.value = '';
    ageEl.value = '';
    storyTitleEl.value = '';
    storyTextEl.value = '';

    publishBtn.disabled = true;

    editBtn.addEventListener('click', editInfo);

    function editInfo() {
      
      fNameEl.value = firstName;
      lNameEl.value = lastName;
      ageEl.value = age;
      storyTitleEl.value = storyTitle;
      genreEl.value = genre;
      storyTextEl.value = storyText;

      li.remove();
      publishBtn.disabled = false;
    }

    saveBtn.addEventListener('click', removeAll);
    function removeAll() {
      
      let divElement = document.getElementById('main');

      //let elementToRemove = document.querySelectorAll('div .form-wrapper, div #side-wrapper');
      divElement.innerHTML = '';
      // for (let div of elementToRemove) {

      //   divElement.removeChild(div);
      // }

      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';

      divElement.appendChild(h1);
    }
    deleteBtn.addEventListener('click', removeItem);

    function removeItem() {
      li.remove();
      deleteBtn.disabled = false;
    }
  }
}
