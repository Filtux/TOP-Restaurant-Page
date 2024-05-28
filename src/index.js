import './styles/index.css';
import { generateIndexHTML } from './index_html';
import { generateMenuHTML } from './menu_html';
import { generateAboutHTML } from './about_html';

document.addEventListener('DOMContentLoaded', () => {

    generateIndexHTML();
});

const homeButton = document.querySelector(('.nav-home'));
const menuButton = document.querySelector(('.nav-menu'));
const aboutButton = document.querySelector(('.nav-about'));

homeButton.addEventListener('click', generateIndexHTML);

menuButton.addEventListener('click', generateMenuHTML);

aboutButton.addEventListener('click', generateAboutHTML);

