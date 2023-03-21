import { showView } from './util.js';
import { editPage } from './edit.js';
import { onDelete } from './delete.js';
import { onSubmit } from './create.js';

const section = document.querySelector('#movie-example');

//3.В home сме закачили ивент лисънъри, за да вземем id-to

export function detailsPage(id) {
    showView(section);
    displayMovies(id);
}

async function displayMovies(id) {

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [movie, likes, ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, userData)

    ]);

    section.replaceChildren((createMovieCard(movie, userData, likes, ownLike)));
}
//2.Създаваме стартаницата на филма 
function createMovieCard(movie, userData, likes, ownLike) {

    //Проверяваме кой е създателя на данните чрез userData от localStorige
    // const userData = JSON.parse(localStorage.getItem('userData'));
    // const isOwner = userData && userData.id == data._ownerId;

    const element = document.createElement('div');
    element.setAttribute('class', 'container');
    element.innerHTML = `
    <div class="row bg-light text-dark">
      <h1>Movie title: ${movie.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}"
          alt="Movie" />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>${movie.description}</p>
        
        ${createControl(movie, userData, likes, ownLike)}
        
      </div>
    </div>
    `;

    const likeBtn = element.querySelector('.btn-primary');
    const editBtn = element.querySelector('.btn-warning');
    const deleteBtn = element.querySelector('.btn-danger');

    if (likeBtn) {
        likeBtn.addEventListener('click', (event) => likeMovie(event, movie._id,ownLike));
       
    }else if (editBtn || deleteBtn) {
        editBtn.addEventListener('click', (event) => editPage(event, movie));
        deleteBtn.addEventListener('click', (event) => onDelete(event, element, movie));
    }

    

    return element;
    //element.dataset.id така достъпваме data-id
}

// Правим фунция за контрол на бутоните ако е логнат потребителя
function createControl(movie, userData, likes, ownLike) {

    const isOwner = userData && userData.id == movie._ownerId;

    let controls = [];

    if (isOwner) {

        controls.push('<a class="btn btn-danger" href="#">Delete</a>');
        controls.push('<a class="btn btn-warning" href="#">Edit</a>');

    } else if (userData && ownLike == false) {

        controls.push('<a class="btn btn-primary" href="#">Like</a>');
    }
    controls.push(`<span class="enrolled-span">Liked ${likes}</span>`);

    return controls.join('');
}

//това е логиката за бутоните по горе в за филма
// ${isOwner ? `<a class="btn btn-danger" href="#">Delete</a>
//         <a class="btn btn-warning" href="#">Edit</a>` :
//             `<a class="btn btn-primary" href="#">Like</a>
//         <span class="enrolled-span">Liked 1</span>`}

//1. трябва да заредим данните от сървъра ВАЖНО на функцията подаваме Id
async function getMovie(id) {
    const url = `http://localhost:3030/data/movies/${id}`;

    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }
        const movie = await response.json();
        return movie; //ще ползваме тези данни за заявките по долу!

    } catch (error) {
        alert(error.message);
    }
}



//ще ползваме тези данните от  getMovie(id) за заявките по долу!
//За да вземе like правим паралелна заявка, която прриема id на филма
async function getLikes(id) {

    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`;

    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }
        const likes = await response.json();
        return likes;

    } catch (error) {
        alert(error.message);
    }
}

async function getOwnLike(movieId, userData) {
    
    //ако няма юзър дата, не го е лайкнал
    if (!userData) {
        return false;
    } else {
        const userId = userData.id;
        const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;
                
        try {
            const response = await fetch(url);

            if (response.ok == false) {
                const error = await response.json();
                throw error;
            }
            const like = await response.json();
            return like.length > 0;

        } catch (error) {
            alert(error.message);
        }
    }
}

//Правим заявка за лайкване
async function likeMovie(event,movieId) {
    event.preventDefault();
    
    try {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('userData')).token
            },
            body: JSON.stringify({ movieId })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        //Презареждаме страницата
        detailsPage(movieId);
    } catch (err) {
        alert(err.message);
    }
}