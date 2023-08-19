
const loadHomePage = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');

    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    
    h1.textContent = 'Pauluminoso Lounge';
    div.textContent = 'Exquisite taste for exquisite people.';
    menuButton.textContent = 'VIEW THE MENU';

    content.appendChild(main);
    const selectedMain = document.querySelector('.main');
    selectedMain.appendChild(h1);
    selectedMain.appendChild(div);
    selectedMain.appendChild(menuButton);
};

export default loadHomePage;