import loadNavbar from './navbar.js';
import loadHomePage from './homepage.js';
import loadMenuPage from './menupage.js';

const loadPage = () => {
    loadNavbar();
    loadHomePage();
    //loadMenuPage();
};

export default loadPage;