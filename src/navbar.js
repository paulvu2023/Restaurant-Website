const loadNavbar = () => {
    const content = document.querySelector('#content');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    homeButton.classList.add('navbutton');
    menuButton.classList.add('navbutton');
    aboutButton.classList.add('navbutton');

    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    aboutButton.setAttribute('id', 'about');

    const selectedNavbar = document.querySelector('.navbar');
    content.appendChild(homeButton);
    content.appendChild(menuButton);
    content.appendChild(aboutButton);
};

export default loadNavbar;