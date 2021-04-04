'use strict';

// 1, Építsd fel a szükséges struktúrát JavaScript-el (használj szemantikus
//     html elemeket)
//   2, Formázd az oldalt a megadott módon! (CSS)
//   3, Ne használj CSS class-okat! (Próbáld megoldani csupán a tag-ek
//     segítségével. Segítség: itt nézz körül: http://tamop412.elte.hu/tananyagok/weblapkeszites/lecke11_lap5.html)
//   4, Adj hozzá funkcionalitást a gombokhoz!
//       - Ha a "Fel" -ra kattintasz, a kiemelés eggyel mozogjon feljebb
//       - Ha a "Le" -ra kattintasz, a kiemelés eggyel mozogjon lejebb
//       - Ha az "X" -ra kattintasz, a kiemelt elemet távolítsa el a program,
//         a kiemelés pedig kerüljön a legfelső elemre
//       - Ha a ">" -ra kattintasz, a kiemelt elem kerüljön át a jobb oldalra
//       és baloldalon a kiemelés kerüljön a legfelső elemre
//   5, Gondolj a szélsőséges esetekre is, ne legyen hiba a konzolon!

createList('leftlist', ['bread', 'milk', 'orange', 'tomate']);
createList('move', ['Up', '>', 'X', 'Down']);
createList('rightlist', []);

function createList(classUl, content) {
    const body = document.querySelector('body');
    const ul = document.createElement('ul');
    ul.setAttribute('class', classUl)

    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.textContent = content[i];
        ul.appendChild(li);
    }

    body.appendChild(ul);
}

const selectedLi = document.querySelector('ul:nth-of-type(1) li:nth-of-type(1)');
selectedLi.setAttribute('class', 'selected');

const up = document.querySelector('ul:nth-of-type(2) li:first-of-type');
const down = document.querySelector('ul:nth-of-type(2) li:last-of-type');
const moveRight = document.querySelector('ul:nth-of-type(2) li:nth-of-type(2)');
const del = document.querySelector('ul:nth-of-type(2) li:nth-of-type(3)')

up.addEventListener('click', () => {
    const leftList = document.querySelector('ul:nth-of-type(1)');

    for (let i = 0; i < leftList.childElementCount; i++) {
        if (leftList.childNodes[i].className === 'selected' && i !== 0) {
            leftList.childNodes[i].className = '';
            leftList.childNodes[i - 1].className = 'selected';
        }
    }

})

down.addEventListener('click', () => {
    const leftList = document.querySelector('ul:nth-of-type(1)');

    for (let i = leftList.childElementCount - 1; i >= 0; i--) {
        if (leftList.childNodes[i].className === 'selected' && i !== leftList.childElementCount - 1) {
            leftList.childNodes[i].className = '';
            leftList.childNodes[i + 1].className = 'selected';
        }
    }
})

moveRight.addEventListener('click', () => {
    const leftList = document.querySelector('ul:nth-of-type(1)');
    const rightList = document.querySelector('ul:nth-of-type(3)');
    console.log(rightList);

    for (let i = 0; i < leftList.childElementCount; i++) {
        if (leftList.childNodes[i].className === 'selected') {
            for (let j = 0; j < rightList.childElementCount; j++) {
                if (rightList.childNodes[j].textContent === '') {
                    rightList.childNodes[j].textContent = leftList.childNodes[i].textContent;
                    break;
                }
            }
            leftList.childNodes[i].remove();
        }
    }

    if (leftList.childElementCount) {
        leftList.childNodes[0].setAttribute('class', 'selected');
    }
})

del.addEventListener('click', () => {
    const leftList = document.querySelector('ul:nth-of-type(1)');

    for (let i = 0; i < leftList.childElementCount; i++) {
        if (leftList.childNodes[i].className === 'selected') {
            leftList.childNodes[i].remove();
            leftList.childNodes[0].className = 'selected';
        }
    }

})


