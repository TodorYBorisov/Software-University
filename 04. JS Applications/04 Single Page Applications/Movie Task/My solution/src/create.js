import { showView } from './util.js';
import { homePage } from './home.js';

const section = document.querySelector('#add-movie');
const form = document.getElementById('add-movie-form');
form.addEventListener('submit', onSubmit);

export function creatPage() {
    showView(section);
}

export async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { title, description, img } = Object.fromEntries(formData.entries());

    if (title === '' || description === '' || img == '') {

        return alert('No empy fields allowed!');
    };

    const url = 'http://localhost:3030/data/movies';

    const options = {
        method: 'post',
        headers: {
            'Content-type': 'applications/json',
            'X-Authorization': JSON.parse(localStorage.getItem('userData')).token
        },
        body: JSON.stringify({ title, description, img })
    };
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        
        
        form.reset();
        homePage();
    } catch (error) {
        alert(error.message);
    }
}

