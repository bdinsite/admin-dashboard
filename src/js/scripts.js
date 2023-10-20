const input = document.querySelector('input');
const cardSearch = document.querySelectorAll('.project');
input.addEventListener('change', wordSearch);

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