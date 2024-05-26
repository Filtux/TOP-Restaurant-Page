import './styles.css';
import heroImage from './hero_img.jpg';

// Assuming you have a div with class 'hero-container' in your HTML
const heroContainer = document.querySelector('.hero-container');
const informationContainer = document.querySelector('.information-container');

const img = document.createElement('img');
img.src = heroImage;
img.alt = 'Hero-image';
img.className = 'hero-image';

heroContainer.appendChild(img);