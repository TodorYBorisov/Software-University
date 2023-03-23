import { getById } from '../api/data.js';
import { deleteById } from '../api/data.js';

const section = document.getElementById('detailsPage');


export async function showDetails(context, id) {
    const idea = await getById(id);

    context.showSection(section);

    //правим проверка дали имаме соственик
    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == idea._ownerId;

    //подаваме директно идетяа от функцията която връща интерполирания стрин по долу
    section.innerHTML = createIdeaHTML(idea, isOwner);

    if (isOwner) {
        section.querySelector('#deleteBtn').addEventListener('click', async (event) => {

            event.preventDefault();
            //питане за изтриване
            const choice = confirm('Are you sure you want to delete?');

            if (choice) {
                await deleteById(id);
                context.goTo('/catalog');
            }

        });
    }
}

// Функция за създаване на идеята, за да я ренднем тъй като сега еднакви

function createIdeaHTML(idea, isOwner) {

    let html = `
    <img class="det-img" src="${idea.img}" />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>`;


    if (isOwner) {
        html += `<div class="text-center">
            <a id="deleteBtn" class="btn detb" href="">Delete</a>
        </div>`;
    }

    return html;
}
//на Delete бутона сложихме id
