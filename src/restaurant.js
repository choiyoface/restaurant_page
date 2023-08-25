//restaurant page
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    // Create headline
    const header = document.createElement('div');
    const headline = document.createElement('h1');
    headline.textContent = 'Sunny Coffee Shop';
    header.appendChild(headline);
    header.setAttribute('id','header');
    pageContent.appendChild(header);

    // Create image element
    const image = document.createElement('img');
    image.src = 'https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/03/coffee-bar.jpg'
    image.height = "300";
    pageContent.appendChild(image);

    
    // Create copy
    const copy = document.createElement('p');
    copy.textContent = 'Get the best coffee in town with only $2 !! ';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;