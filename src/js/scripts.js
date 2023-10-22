const input = document.querySelector('input');

const button = document.querySelector('button');
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

const projectCards = document.querySelector('.projectCards');

const addItem = document.querySelector('.addItem');

addItem.addEventListener('click', addNewProject);

function addNewProject() {
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

    const siteLink = document.createElement('a');
    siteLink.src = './src/img/link-variant.svg';
    siteLink.class = 'miniIcon';

    const codeLink = document.createElement('a');
    codeLink.src = './src/img/eye-arrow-right-outline.svg';
    codeLink.classList = 'miniIcon';

    h4.textContent = 'New Project 1';
    p.textContent = 'A whole lot of lorem ipsum and other cool stuff.'

    newCardLink.appendChild(favouriteStar);
    newCardLink.appendChild(codeLink);
    newCardLink.appendChild(siteLink);

    newProject.appendChild(h4);
    newProject.appendChild(p);
    newProject.appendChild(newCardLink);

    projectCards.appendChild(newProject);
}