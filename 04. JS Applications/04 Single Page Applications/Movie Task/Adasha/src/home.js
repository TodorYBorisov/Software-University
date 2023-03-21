import { homeContent } from '../views/homePage.js';
import { navBar } from '../views/navbar.js';
import { generateEl, sections } from './dom.js';
window.addEventListener('load', homePage);

export async function homePage() {
    sections.main.replaceChildren();
    sections.main.appendChild(navBar());
    sections.main.appendChild(await homeContent());
}