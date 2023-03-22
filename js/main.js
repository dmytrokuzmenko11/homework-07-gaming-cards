

let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
let bigPictures = ['jack', 'queen', 'king'];
let card = [];

// cards from 2 to 10

for (let i = 2; i <= 10; i++) {
    for (let k = 0; k < suit.length; k++) {
        cardSuit = `<div class="card__suit">${i}<img src="./img/${suit[k]}.svg" alt="${suit[k]}"></div>`;
        card.push(`<div class="card">${cardSuit}${cardSuit}</div>`);
    }

}

// jack's, queen's, king's card

let cardNames = ['J', 'Q', 'K'];

for (let i = 0; i <= 2; i++) {
    for (let k = 0; k < suit.length; k++) {
        cardSuit = `<div class="card__suit">${cardNames[i]}<img src="./img/${suit[k]}.svg" alt="${suit[k]}"></div>`;
        cardPictures = `<img class="card__suit__bigPicture" src="./img/${bigPictures[i]}.svg" alt="${bigPictures[k]}"></img>`;
        card.push(`<div class="card">${cardSuit}${cardPictures}${cardSuit}</div>`);
        }
    }

// aces

let aceLetter = ['A'];

for (let i = 0; i < 1; i++) {
    for (let k = 0; k < suit.length; k++) {
        cardSuit = `<div class="card__suit">${aceLetter[i]}<img src="./img/${suit[k]}.svg" alt="${suit[k]}"></div>`;
        acePictures = `<img class="card__suit__bigPicture" src="./img/${suit[k]}.svg" alt="${suit[k]}"></img>`;
        card.push(`<div class="card">${cardSuit}${acePictures}${cardSuit}</div>`);
        }
    }

document.write(`<div class="wrapper">${card.join('')}</div>`);


