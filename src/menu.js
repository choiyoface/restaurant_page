//create menu page

const createMenuPage = () =>  {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.setAttribute('id', 'menu')

    const heading = document.createElement('h2');
    heading.textContent = 'Our MENU';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Americano';
   
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Cafe Latte';
    
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Matcha Latte';
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);

    
};
export default createMenuPage;