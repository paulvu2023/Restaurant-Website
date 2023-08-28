const loadMenuPage = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');

    const menu_container = document.createElement('div');
    menu_container.classList.add('menu_container');
    content.appendChild(menu_container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Pauluminoso';
    menu_container.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'MENU';
    menu_container.appendChild(h2);

    const menu1 = document.createElement('div');
    menu1.classList.add('menu_item');
    menu1.textContent = 'Coq au Vin';
    menu_container.appendChild(menu1);

    const desc1 = document.createElement('div');
    desc1.classList.add('description');
    desc1.textContent = 'A classic French dish of chicken cooked in red wine with mushrooms, onions, and bacon.';
    menu_container.appendChild(desc1);

    const menu2 = document.createElement('div');
    menu2.classList.add('menu_item');
    menu2.textContent = 'Bouillabaisse';
    menu_container.appendChild(menu2);

    const desc2 = document.createElement('div');
    desc2.classList.add('description');
    desc2.textContent = 'A Provençal fish stew containing various types of fish and shellfish, flavored with herbs and spices.';
    menu_container.appendChild(desc2);
    
    const menu3 = document.createElement('div');
    menu3.classList.add('menu_item');
    menu3.textContent = 'Filet Mignon';
    menu_container.appendChild(menu3);

    const desc3 = document.createElement('div');
    desc3.classList.add('description');
    desc3.textContent = 'A tender cut of beef taken from the smaller end of the tenderloin, typically served with a sauce.';
    menu_container.appendChild(desc3);

    const menu4 = document.createElement('div');
    menu4.classList.add('menu_item');
    menu4.textContent = 'Pâté de Foie Gras';
    menu_container.appendChild(menu4);

    const desc4 = document.createElement('div');
    desc4.classList.add('description');
    desc4.textContent = 'A spread made from finely ground or pureed liver, often served with bread or crackers.';
    menu_container.appendChild(desc4);

    const menu5 = document.createElement('div');
    menu5.classList.add('menu_item');
    menu5.textContent = 'Truffle Rizzotto';
    menu_container.appendChild(menu5);

    const desc5 = document.createElement('div');
    desc5.classList.add('description');
    desc5.textContent = 'Creamy rizz dish infused with the exquisite flavor of truffles, a type of edible fungi.';
    menu_container.appendChild(desc5);
};

export default loadMenuPage;