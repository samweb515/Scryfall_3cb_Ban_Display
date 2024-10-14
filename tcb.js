/* 
 * Author: Samuel Webster
 * Date: October 2024
*/

const banlist = ["Aarakocra Sneak"];

/*
 * Affects view once individual card is selected 
*/

function highlightCards() {
    const card = document.getElementsByClassName('card-image-front');
    const text = document.getElementsByClassName('card-text');
    if (banlist.includes(text[0].querySelector('.card-text-card-name').textContent.trim())) {
        if (card != null) {
            card[0].classList.add('card-highlight');
        }
        if (text != null) {
            text[0].classList.add('text-highlight');
        }
    }
}

const intervalId = setInterval(() => {
    if (document.querySelector('.card-text')) {
        highlightCards();
        clearInterval(intervalId);
    }
}, 100);

const observer = new MutationObserver(highlightCards);
observer.observe(document.body, { childList: true, subtree: true });

/*
 * Affects view while searching through card grid
*/

function highlightCardsGrid() {
    const cards = Array.from(document.getElementsByClassName('card-grid-item'));
    cards.forEach(card => {
        if (banlist.includes(card.querySelector('.card-grid-item-invisible-label').textContent)) {
            card.classList.add('card-highlight');
        }
    });
}

const intervalId1 = setInterval(() => {
    if (document.querySelector('.card-grid-item')) {
        highlightCardsGrid();
        clearInterval(intervalId1);
    }
}, 100);

const observer1 = new MutationObserver(highlightCardsGrid);
observer1.observe(document.body, { childList: true, subtree: true });