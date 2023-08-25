import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const creatTabs = () =>{
    const content = document.querySelector('#content');
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tabDiv')
    //create div for tabs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set id for div
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set class for div
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    tabDiv.appendChild(div1);
    tabDiv.appendChild(div2);
    tabDiv.appendChild(div3);
    content.appendChild(tabDiv)

    //add click to tabs
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });

}
function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent){
        content.removeChild(pageContent);
    }
}

export default creatTabs;