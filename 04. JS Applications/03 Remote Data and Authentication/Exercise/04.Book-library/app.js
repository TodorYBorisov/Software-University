
document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.querySelector('form').addEventListener('submit', createBook);

const table = document.querySelector('tbody');
const submitBtn = document.querySelector('form button');
const h3 = document.querySelector('h3');

async function loadBooks() {
    try {
        const url = 'http://localhost:3030/jsonstore/collections/books';

        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }
        const data = await response.json();
        const entries = Object.entries(data);

        table.innerHTML = '';
        for (let [key, {author,title}] of entries) {

            const tr = document.createElement('tr');
            const tdAuthor = document.createElement('td');
            tdAuthor.textContent = author;
            const tdTitle = document.createElement('td');
            tdTitle.textContent = title;
            const tdBtn = document.createElement('td');
            const edit = document.createElement('button');
            edit.textContent = 'Edit';
            edit.addEventListener('click', editOrDelete);
            const del = document.createElement('button');
            del.textContent = 'Delete';
            del.addEventListener('click', editOrDelete);

            tdBtn.appendChild(edit);
            tdBtn.appendChild(del);
            tr.appendChild(tdTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdBtn);
            table.appendChild(tr);

            function editOrDelete(event) {
                event.preventDefault();

                if (event.target.textContent == 'Edit') {
                    h3.textContent = 'Edit FORM';
                    submitBtn.textContent = 'Save';

                    document.querySelector('input[name="title"]').value = title;
                    document.querySelector('input[name="author"]').value = author;

                    localStorage.setItem('bookId', key);

                } else if (event.target.textContent == 'Delete') {

                    const url = 'http://localhost:3030/jsonstore/collections/books' + `/${key}`;
                    const options = {
                        method: 'delete'
                    };
                    fetch(url, options);
                    tr.remove();
                }
            }

        }

    } catch (error) {
        alert(error.message);
    }

}

async function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { title, author } = Object.fromEntries(formData.entries());

    if (title == '' || author == '') {
        return alert('No empty filed alowed!');
    }
    try {
        let response;

        if (submitBtn.textContent === 'Submit') {

            const url = 'http://localhost:3030/jsonstore/collections/books';

            let record = {
                title,
                author
            };
            const options = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(record)
            };
            response = await fetch(url, options);
        } else if (submitBtn.textContent === 'Save') {

            let id = localStorage.getItem('bookId');
            localStorage.removeItem('bookId');

            const url = 'http://localhost:3030/jsonstore/collections/books' +`/${id}`;

            let record = {
                title,
                author
            };
            const options = {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(record)
            };
            response = await fetch(url, options);
        }

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        loadBooks();

        h3.textContent='FORM';
        submitBtn.textContent='Submit';
        
        event.target.reset();

    } catch (error) {
        alert(error.message);
    }
}