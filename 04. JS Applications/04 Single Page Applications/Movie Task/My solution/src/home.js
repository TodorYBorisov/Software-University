
import { detailsPage } from './details.js';
import { showView } from './util.js';


const section = document.querySelector('#home-page');
const catalog = section.querySelector('#movies-list');

//3. На секцията слагаме ивент лисънър като при делегацията на бутоните за да може да видим на кой бутон от детайлите е кликнато
section.addEventListener('click', (event) => {
    
    if (event.target.tagName == 'BUTTON') {
        event.preventDefault();
        const id = event.target.dataset.id;
        detailsPage(id);
    }
});

export function homePage() {
    showView(section);
    displayMovies();

}

async function displayMovies() {
    // catalog.replaceChildren(spinner());  не го показваме по задание
    const movies = await getMovie();
    catalog.replaceChildren(...movies.map(createCard));
}

async function getMovie() {
    const url = 'http://localhost:3030/data/movies';

    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }
        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message);
    }
}

function createCard(data) {

    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${data.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${data.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${data._id}">
            <button data-id="${data._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;

    return element;
    //element.dataset.id така достъпваме data-id
}

