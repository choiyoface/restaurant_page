//for creating contact page
const createContactPage = () => {
    const conntent = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    
    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter title';

    form.appendChild(headingInput);

   
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter adress';
    form.appendChild(addressInput);

   
    const phoneNumebrInput = document.createElement('input');
    phoneNumebrInput.type = 'text';
    phoneNumebrInput.placeholder = 'Enter phone number';
    form.appendChild(phoneNumebrInput);

    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter name';
    form.appendChild(nameInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    form.appendChild(submitButton);

    
    pageContent.appendChild(form);
    conntent.appendChild(pageContent)
    
}

export default createContactPage;