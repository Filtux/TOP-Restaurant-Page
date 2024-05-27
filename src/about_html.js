import heroImage from './Burger_img_3.jpg'

export function generateAboutHTML() {

    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = '';

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = "Joe's Burger Bistro";

    const informationContainer = document.createElement('div');
    informationContainer.classList.add('information-container');

    const informationParagraph = document.createElement('p');
    informationParagraph.classList.add('information-paragraph');
    informationParagraph.textContent = "Built from the idea that great taste is one of life's greatest pleasures,we emphasise on huge flavours in all of our recipes. All of our dishes are made with love, and these juicy burgers and sauces will drive you crazy for wanting more";

    const informationOrder = document.createElement('h2');
    informationOrder.classList.add('information-order');

    const orderLink = document.createElement('a');
    orderLink.href = '#';
    orderLink.textContent = 'Order Now';

    const img = document.createElement('img');
    img.src = heroImage;
    img.alt = 'Hero-image';
    img.className = 'hero-image';

    informationOrder.appendChild(orderLink);
    informationContainer.appendChild(informationParagraph);
    informationContainer.appendChild(informationOrder);
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