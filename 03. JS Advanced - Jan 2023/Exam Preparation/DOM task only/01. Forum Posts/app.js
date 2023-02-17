window.addEventListener('load', solve);

function solve() {

  let titleEl = document.getElementById('post-title');
  let categoryEl = document.getElementById('post-category');
  let contenEl = document.getElementById('post-content');

  let publishBtn = document.getElementById('publish-btn');

  publishBtn.addEventListener('click', add);

  function add(event) {
    event.preventDefault();

    let title = titleEl.value;
    let categorY = categoryEl.value;
    let content = contenEl.value;

    if (title === '' || categorY === '' || content === '') {
      return;
    }

    let ul = document.getElementById('review-list');

    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = title;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${categorY}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${content}`;

    let edit = document.createElement('button');
    edit.classList.add('action-btn');
    edit.classList.add('edit');
    edit.textContent = 'Edit';

    let approve = document.createElement('button');
    approve.classList.add('action-btn');
    approve.classList.add('approve');
    approve.textContent = 'Approve';

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(edit);
    li.appendChild(approve);

    ul.appendChild(li);

    titleEl.value = '';
    categoryEl.value = '';
    contenEl.value = '';

    edit.addEventListener('click', editInfo);

    function editInfo() {
      li.remove();

      titleEl.value = title;
      categoryEl.value = categorY;
      contenEl.value = content;
    }

    approve.addEventListener('click', upload);

    function upload() {
      li.remove();

      let ulP = document.getElementById('published-list');
      ulP.appendChild(li);

      edit.remove();
      approve.remove();

    }

    let clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click', clear);

    function clear() {
      li.remove();
    }
  }
}
