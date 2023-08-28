
const loadHomePage = () => {
    const content = document.querySelector('#content');
    const home_container = document.createElement('div');
    home_container.classList.add('home_container');
    content.appendChild(home_container);
    const selectedhome_container = document.querySelector('.home_container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Pauluminoso Lounge';
    selectedhome_container.appendChild(h1);

    const div = document.createElement('div');
    div.textContent = 'Exquisite taste for exquisite people.';
    selectedhome_container.appendChild(div);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'VIEW THE MENU';
    selectedhome_container.appendChild(menuButton);
};

export default loadHomePage;