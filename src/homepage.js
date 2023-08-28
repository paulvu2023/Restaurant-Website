
const loadHomePage = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    const selectedMain = document.querySelector('.main');

    const h1 = document.createElement('h1');
    h1.textContent = 'Pauluminoso Lounge';
    selectedMain.appendChild(h1);

    const div = document.createElement('div');
    div.textContent = 'Exquisite taste for exquisite people.';
    selectedMain.appendChild(div);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'VIEW THE MENU';
    selectedMain.appendChild(menuButton);
};

export default loadHomePage;