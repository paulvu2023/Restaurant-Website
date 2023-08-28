const loadMenuPage = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');

    const about_container = document.createElement('div');
    about_container.classList.add('about_container');
    content.appendChild(about_container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Pauluminoso';
    about_container.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'MENU';
    about_container.appendChild(h2);

    const menu1 = document.createElement('div');
    menu1.classList.add('menu_item');
    menu1.textContent = 'Coq au Vin';
    about_container.appendChild(menu1);
};

export default loadMenuPage;