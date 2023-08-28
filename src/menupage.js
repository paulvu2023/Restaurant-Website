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

    const desc1 = document.createElement('div');
    desc1.classList.add('description');
    desc1.textContent = 'A classic French dish of chicken cooked in red wine with mushrooms, onions, and bacon.';
    about_container.appendChild(desc1);

    const menu2 = document.createElement('div');
    menu2.classList.add('menu_item');
    menu2.textContent = 'Bouillabaisse';
    about_container.appendChild(menu2);

    const desc2 = document.createElement('div');
    desc2.classList.add('description');
    desc2.textContent = 'A Provençal fish stew containing various types of fish and shellfish, flavored with herbs and spices.';
    about_container.appendChild(desc2);
};

export default loadMenuPage;