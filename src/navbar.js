const loadNavbar = () => {
    const content = document.querySelector('#content');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    content.appendChild(navbar);

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    homeButton.classList.add('navbutton');
    menuButton.classList.add('navbutton');
    aboutButton.classList.add('navbutton');

    homeButton.textContent = 'HOME';
    menuButton.textContent = 'MENU';
    aboutButton.textContent = 'ABOUT';

    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    aboutButton.setAttribute('id', 'about');

    const selectedNavbar = document.querySelector('.navbar');
    selectedNavbar.appendChild(homeButton);
    selectedNavbar.appendChild(menuButton);
    selectedNavbar.appendChild(aboutButton);
};

export default loadNavbar;