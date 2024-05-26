import './styles.css';
import heroImage from './hero_img.jpg';
import bodyImage from './Double-Double-Cheeseburger-with-Fries-Recipe-scaled.jpg';

// Assuming you have a div with class 'hero-container' in your HTML
const heroContainer = document.querySelector('.hero-container');
const informationContainer = document.querySelector('.information-container');

const img = document.createElement('img');
img.src = heroImage;
img.alt = 'Hero-image';
img.className = 'hero-image';

heroContainer.appendChild(img);

const informationImage = document.createElement('img');
informationImage.src = bodyImage;
informationImage.alt = 'Information-image';
informationImage.className = 'information-image';

informationContainer.appendChild(informationImage);