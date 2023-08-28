import loadNavbar from './navbar.js';
import loadHomePage from './homepage.js';

const loadPage = () => {
    loadNavbar();
    loadHomePage();
};

export default loadPage;