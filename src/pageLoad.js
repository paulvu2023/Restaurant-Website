import loadNavbar from './navbar.js';
import loadHomePage from './homepage.js';
import loadMenuPage from './menupage.js';
import loadAboutPage from './aboutpage.js';

const loadPage = () => {
    loadNavbar();
    //loadHomePage();
    // loadMenuPage();
    loadAboutPage();
};

export default loadPage;