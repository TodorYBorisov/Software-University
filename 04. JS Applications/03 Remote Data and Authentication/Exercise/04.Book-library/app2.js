const url = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('tbody');
const submitBtn = document.querySelector('form button');
const h3 = document.querySelector('form h3');
let id;

document.getElementById('loadBooks').addEventListener('click', loadAllBooks);
document.querySelector('form').addEventListener('submit', onSubmit);
tbody.addEventListener('click', updateOrDeleteBook);

async function loadAllBooks() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error while loads all books');
        }
        const data = await response.json();

        tbody.innerHTML = '';
        Object.entries(data).map(createBookRecord);
    } catch (error) {
        alert(error.message);
    }
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');

    if (!title || !author) {
        return;
    }
    try {
        let response;

        submitBtn.textContent === 'Submit'
            ? response = await getResponse('post', url, { title, author })
            : response = await getResponse('put', `${url}/${id}`, { title, author });

        if (!response.ok) {
            throw new Error('Error in submit');
        }
        loadAllBooks();
        h3.textContent = 'FORM';
        submitBtn.textContent = 'Submit';
        e.target.reset();

    } catch (error) {
        alert(error.message);
    }
}

function updateOrDeleteBook(e) {
    id = e.target.parentNode.id;

    if (e.target.textContent === 'Edit') {
        h3.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';

        document.querySelector('[name="title"]').value = e.target.parentNode.parentNode.children[0].textContent;
        document.querySelector('[name="author"]').value = e.target.parentNode.parentNode.children[1].textContent;

    } else if (e.target.textContent === 'Delete') {
        fetch(`${url}/${id}`, {
            method: 'delete'
        });
        e.target.parentNode.parentNode.remove();
    }
}

async function getResponse(methodType, url, data) {
    const response = await fetch(url, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function createBookRecord([key, { title, author }]) {
    const tr = createElement('tr', tbody);
    createElement('td', tr, title);
    createElement('td', tr, author);

    const td = createElement('td', tr);
    td.id = key;
    createElement('button', td, 'Edit');
    createElement('button', td, 'Delete');
}

function createElement(tag, parent, content) {
    const element = document.createElement(tag);
    if (content) {
        element.textContent = content;
    }
    parent.appendChild(element);
    return element;
}