import './styles/menu.css';
import heroImage from './Burger_img_2.jpg'

export function generateMenuHTML() {

    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = '';

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = "Menu";

    const informationContainer = document.createElement('div');
    informationContainer.classList.add('information-container');

    const menuItemCard = document.createElement('div');
    menuItemCard.classList.add('menu-item-card');

    const menuItemTitle = document.createElement('h3');
    menuItemTitle.classList.add('menu-item-title');
    menuItemTitle.textContent = "CheeseIfYouPlease Burger";

    const menuItemDescription = document.createElement('p');
    menuItemDescription.classList.add('menu-item-description');
    menuItemDescription.textContent = "Cheese in your mouth plus extras";

    const menuItemCard2 = document.createElement('div');
    menuItemCard2.classList.add('menu-item-card');

    const menuItemTitle2 = document.createElement('h3');
    menuItemTitle2.classList.add('menu-item-title');
    menuItemTitle2.textContent = "BeefInAndAroundMyTeeth Burger";

    const menuItemDescription2 = document.createElement('p');
    menuItemDescription2.classList.add('menu-item-description');
    menuItemDescription2.textContent = "Beefy goodness you can't resist";

    const menuItemCard3 = document.createElement('div');
    menuItemCard3.classList.add('menu-item-card');

    const menuItemTitle3 = document.createElement('h3');
    menuItemTitle3.classList.add('menu-item-title');
    menuItemTitle3.textContent = "ChickenForThePicken Burger";

    const menuItemDescription3 = document.createElement('p');
    menuItemDescription3.classList.add('menu-item-description');
    menuItemDescription3.textContent = "Crispy Chicken Goodness";

    const menuItemCard4 = document.createElement('div');
    menuItemCard4.classList.add('menu-item-card');

    const menuItemTitle4 = document.createElement('h3');
    menuItemTitle4.classList.add('menu-item-title');
    menuItemTitle4.textContent = "PorkOnMyFork Burger";

    const menuItemDescription4 = document.createElement('p');
    menuItemDescription4.classList.add('menu-item-description');
    menuItemDescription4.textContent = "Oink in my mouth, please";

    const menuItemCard5 = document.createElement('div');
    menuItemCard5.classList.add('menu-item-card');

    const menuItemTitle5 = document.createElement('h3');
    menuItemTitle5.classList.add('menu-item-title');
    menuItemTitle5.textContent = "Vegan Burger";

    const menuItemDescription5 = document.createElement('p');
    menuItemDescription5.classList.add('menu-item-description');
    menuItemDescription5.textContent = "Can't promise anything";

    const menuItemCard6 = document.createElement('div');
    menuItemCard6.classList.add('menu-item-card');

    const menuItemTitle6 = document.createElement('h3');
    menuItemTitle6.classList.add('menu-item-title');
    menuItemTitle6.textContent = "Veggie YumYum Burger";

    const menuItemDescription6 = document.createElement('p');
    menuItemDescription6.classList.add('menu-item-description');
    menuItemDescription6.textContent = "For when meat isn't an option";

    const img = document.createElement('img');
    img.src = heroImage;
    img.alt = 'Hero-image';
    img.className = 'hero-image';

    menuItemCard.appendChild(menuItemTitle);
    menuItemCard.appendChild(menuItemDescription);
    menuItemCard2.appendChild(menuItemTitle2);
    menuItemCard2.appendChild(menuItemDescription2);
    menuItemCard3.appendChild(menuItemTitle3);
    menuItemCard3.appendChild(menuItemDescription3);
    menuItemCard4.appendChild(menuItemTitle4);
    menuItemCard4.appendChild(menuItemDescription4);
    menuItemCard5.appendChild(menuItemTitle5);
    menuItemCard5.appendChild(menuItemDescription5);
    menuItemCard6.appendChild(menuItemTitle6);
    menuItemCard6.appendChild(menuItemDescription6);

    informationContainer.appendChild(menuItemCard);
    informationContainer.appendChild(menuItemCard2);
    informationContainer.appendChild(menuItemCard3);
    informationContainer.appendChild(menuItemCard4);
    informationContainer.appendChild(menuItemCard5);
    informationContainer.appendChild(menuItemCard6);
    heroContainer.appendChild(heroTitle);
    heroContainer.appendChild(informationContainer);
    heroContainer.appendChild(img);
    mainContainer.appendChild(heroContainer);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');

    const footerGroup1 = document.createElement('div');
    footerGroup1.classList.add('footer-group');

    const footerHeading1 = document.createElement('h2');
    footerHeading1.classList.add('footer-heading');
    footerHeading1.textContent = 'Find Us';

    const footerInfo1 = document.createElement('span');
    footerInfo1.classList.add('footer-info');
    footerInfo1.textContent = '100 Street';

    const footerInfo2 = document.createElement('span');
    footerInfo2.classList.add('footer-info');
    footerInfo2.textContent = 'Mergenville, Australia';

    footerGroup1.appendChild(footerHeading1);
    footerGroup1.appendChild(footerInfo1);
    footerGroup1.appendChild(footerInfo2);

    const footerGroup2 = document.createElement('div');
    footerGroup2.classList.add('footer-group');

    const footerHeading2 = document.createElement('h2');
    footerHeading2.classList.add('footer-heading');
    footerHeading2.textContent = 'Our Hours';

    const footerInfo3 = document.createElement('span');
    footerInfo3.classList.add('footer-info');
    footerInfo3.textContent = 'Monday to Friday: 11:00 - 22:00';

    const footerInfo4 = document.createElement('span');
    footerInfo4.classList.add('footer-info');
    footerInfo4.textContent = 'Saturday to Sunday: 11:30 - 23:00';

    footerGroup2.appendChild(footerHeading2);
    footerGroup2.appendChild(footerInfo3);
    footerGroup2.appendChild(footerInfo4);

    const footerAuthor = document.createElement('div');
    footerAuthor.classList.add('footer-author');

    const authorParagraph = document.createElement('p');
    authorParagraph.innerHTML = '&copy; Joe Matthews';

    footerAuthor.appendChild(authorParagraph);

    footerContainer.appendChild(footerGroup1);
    footerContainer.appendChild(footerGroup2);
    footerContainer.appendChild(footerAuthor);

    mainContainer.appendChild(footerContainer);

    document.body.appendChild(mainContainer);
}