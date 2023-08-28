const loadMenuPage = () => {
    const content = document.querySelector('#content');
    const about_container = document.createElement('div');
    about_container.classList.add('about_container');
    content.appendChild(about_container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Pauluminoso';
    about_container.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'HOURS';
    about_container.appendChild(h2);

    const hours1 = document.createElement('div');
    hours1.classList.add('hours');
    hours1.textContent = 'Monday: 5PM - 1AM';
    about_container.appendChild(hours1);

    const hours2 = document.createElement('div');
    hours2.classList.add('hours');
    hours2.textContent = 'Tuesday: 5PM - 1AM';
    about_container.appendChild(hours2);

    const hours3 = document.createElement('div');
    hours3.classList.add('hours');
    hours3.textContent = 'Wednesday: 6PM - 12PM';
    about_container.appendChild(hours3);

    const hours4 = document.createElement('div');
    hours4.classList.add('hours');
    hours4.textContent = 'Thursday: 5PM - 1AM';
    about_container.appendChild(hours4);

    const hours5 = document.createElement('div');
    hours5.classList.add('hours');
    hours5.textContent = 'Friday: 5PM - 1AM';
    about_container.appendChild(hours5);

    const hours6 = document.createElement('div');
    hours6.classList.add('hours');
    hours6.textContent = 'Saturday: 7PM - 3AM';
    about_container.appendChild(hours6);

    const hours7 = document.createElement('div');
    hours7.classList.add('hours');
    hours7.textContent = 'Sunday: Closed';
    about_container.appendChild(hours7);
};

export default loadMenuPage;