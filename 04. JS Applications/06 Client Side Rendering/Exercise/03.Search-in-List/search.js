import { towns } from './towns.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

const mainDiv = document.getElementById('towns');

const townTepmlate = html`<ul> ${towns.map((town) => html`<li id=${town}>${town}</li>`)}</ul>`;

render(townTepmlate, mainDiv);

const btn = document.querySelector('button').addEventListener('click', search);

function search() {

   let text = document.getElementById('searchText').value;
   let result = towns.filter((town) => {
      if (town.includes(text)) {
         let match = document.getElementById(`${town}`);
         match.setAttribute('class', 'active');
         return town;
      }

   });

let resultHTML = document.getElementById('result');
resultHTML.textContent = `${result.length} matches found`;
}
