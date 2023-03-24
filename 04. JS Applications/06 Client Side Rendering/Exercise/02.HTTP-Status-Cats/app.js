import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';


const main = document.getElementById('allCats');

const catTemplate = (data) => html`<ul> 
${data.map(cat => html`<li>
                        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                        <div class="info">
                            <button class="showBtn" @click=${onClick}>Show status code</button>
                            <div class="status" style="display: none" id="${cat.id}">
                                <h4>Status Code: ${cat.statusCode}</h4>
                                <p>${cat.statusMessage}</p>
                             </div>
                        </div>
                    </li>`)}
                </ul>`;

render(catTemplate(cats), main);

//Търсим дали в/у даден бутон цъкнато и правим контрол на видимостта
function onClick(event) {
    const cat = event.target.parentNode;
    const result = cat.querySelector('.status').style.display;

    if (result === 'block') {
        cat.querySelector('.showBtn').textContent = 'Show status code';
        cat.querySelector('.status').style.display = 'none';
    }else{
        cat.querySelector('.showBtn').textContent = 'Hide status code';
        cat.querySelector('.status').style.display = 'block';
    }
};