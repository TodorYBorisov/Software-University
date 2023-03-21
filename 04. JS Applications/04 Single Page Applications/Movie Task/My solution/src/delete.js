import { homePage } from './home.js';

export async function onDelete(event, element, movie) {
    event.preventDefault();

    //махаме елемента от createMovieCard
    element.remove();
    const url = `http://localhost:3030/data/movies/${movie._id}`;

    const options = {
        method: 'delete',
        headers: {
            'Content-type': 'applications/json',
            'X-Authorization': JSON.parse(localStorage.getItem('userData')).token
        },
    };

    await fetch(url, options);
    
    homePage();
}