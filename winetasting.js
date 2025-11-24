import {wineTastingTextNodes} from './wineTastingTextNodes.js';


let currentIndex = 0;

const leftArrow = document.getElementById('wineTastingLeftArrow');  
const rightArrow = document.getElementById('wineTastingRightArrow');
const eventImage = document.getElementById('wineTastingEventImage');
const eventTitle = document.getElementById('wineTastingEventTitle');
const eventParagraph = document.getElementById('wineTastingEventParagraph');

function updateContent() {
    const currentNode = wineTastingTextNodes[currentIndex];
    eventImage.src = currentNode.img;
    eventTitle.textContent = currentNode.title;
    eventParagraph.textContent = currentNode.text;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + wineTastingTextNodes.length) % wineTastingTextNodes.length;
    updateContent();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % wineTastingTextNodes.length;
    updateContent();
});

// Initialize content on page load
updateContent();    

