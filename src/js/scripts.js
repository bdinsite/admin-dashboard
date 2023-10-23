const input = document.querySelector('input');

const button = document.querySelector('#search');
const cardSearch = document.querySelectorAll('.project');
button.addEventListener('click', wordSearch);

function wordSearch() {
    const word = input.value.toLowerCase();
    
    const cards = document.querySelector('.cards');
    const parentCard = document.querySelector('.projectCards');
    const newParent = document.createElement('div');
    newParent.classList.add('projectCards');
    parentCard.remove();
    cardSearch.forEach(item => {
        if(item.children[0].textContent.toLowerCase().includes(word) || item.children[1].textContent.toLowerCase().includes(word)){
            newParent.appendChild(item);
            cards.appendChild(newParent);
        }
        input.value = '';
    });
    
    console.log(word);
    
}

// ADD NEW PROJECT
const openForm = document.querySelector('.openForm');
openForm.addEventListener('click', addProject);

function addProject() {
    document.querySelector('.popup').classList.add('active');
};

const closeForm = document.querySelector('.popup .close-btn');
closeForm.addEventListener('click', closeFormWindow);

function closeFormWindow() {
    document.querySelector('.popup').classList.remove('active');
};


// ADD PROJECT INFORMATION


const addItem = document.querySelector('.form-element .addProject');

addItem.addEventListener('click', addNewProject);

function addNewProject() {
    const projectCards = document.querySelector('.projectCards');


    const projectName = document.querySelector('#projectName');
    const description = document.querySelector('#description');
    const projectCode = document.querySelector('#projectCode');
    const projectLink = document.querySelector('#projectLink');

    console.log(projectName.value);
    console.log(description.value);
    console.log(projectCode.value);
    console.log(projectLink.value);

 
    const newProject = document.createElement('div');
    newProject.classList = 'project';
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    const newCardLink = document.createElement('div');
    newCardLink.classList = 'cardLinks';
    const favouriteStar = document.createElement('img');
    favouriteStar.src = './src/img/star-plus-outline.svg';
    favouriteStar.classList = 'miniIcon favorite';
    favouriteStar.alt = 'Favorite icon';

    const codeLink = document.createElement('a');
    codeLink.href = projectCode.value;

    const codeLinkImg = document.createElement('img');
    codeLinkImg.src = './src/img/eye-arrow-right-outline.svg';
    codeLinkImg.classList = 'miniIcon';
    codeLink.appendChild(codeLinkImg);

    const siteLink = document.createElement('a');
    siteLink.href = projectLink.value;

    const siteLinkImg = document.createElement('img');
    siteLinkImg.src = './src/img/link-variant.svg';
    siteLinkImg.classList = 'miniIcon';
    siteLink.appendChild(siteLinkImg);

    h4.textContent = projectName.value;
    p.textContent = description.value;

    newCardLink.appendChild(favouriteStar);
    newCardLink.appendChild(codeLink);
    newCardLink.appendChild(siteLink);

    newProject.appendChild(h4);
    newProject.appendChild(p);
    newProject.appendChild(newCardLink);

    console.log(newProject);
    projectCards.appendChild(newProject);
    console.log(projectCards);
    console.log('clicked the button');
    closeFormWindow();
}