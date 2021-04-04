'use strict';

// At the beginning, add (append) ten stars to random coordinates via JavaScript. 
// You'll have to create an element with class 'star' and set it an inline style. 
// The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.
const world = document.querySelector('.world');

for (let i = 1; i <= 10; i++) {
    const left = setCordinate(100);
    const top = setCordinate(50);
    const star = document.createElement('div');
    star.setAttribute('class', 'star');

    star.style.left = left + 'vw';
    star.style.top = top + 'vh';

    world.appendChild(star);
}

function setCordinate(n) {
    return Math.floor(Math.random() * n);
}

// On click anywhere on section.world, add a star beneath the cursor.
world.addEventListener('click', (event) => {
    const cordinateX = event.clientX;
    const cordinateY = event.clientY;

    const star = document.createElement('div');
    star.setAttribute('class', 'star');

    star.style.left = cordinateX / 11 + 'vw';
    star.style.top = cordinateY / 7.5 + 'vh';

    world.appendChild(star);
})

// On random interval, a star should fall. That means you should pick a random
//  star on random interval and give it fallen class, until all stars are fallen.


let deleteStar = setInterval(() => {
    const stars = document.querySelectorAll('.star')
    if (stars.length === 0) {
        clearInterval(deleteStar);
    } else {
        const randomStar = Math.floor(Math.random() * stars.length);
        stars[randomStar].setAttribute('class', 'fallen');
    }


}, randomTime());

function randomTime() {
    const time = Math.random() * 1000;
    console.log(time);
    return time;
}
// Make trees grow on click!
const oneTree = document.querySelector('.one');
const twoTree = document.querySelector('.two');

oneTree.addEventListener('click', growTree);
twoTree.addEventListener('click', growTree);

function growTree() {
    const span = document.createElement('span');
    this.appendChild(span);
}

// 💪 Add a rule that a new star cannot be added within 50px radius of any other.

// 💪 Move moon around by dragging it with mouse.

const moon = document.querySelector('.moon');
console.log(moon);

moon.addEventListener('mousedown', () => {
    moon.addEventListener('mousemove', (event) => {
        moon.style.right = 'none';
        moon.style.left = event.clientX / 11 + 'vw';
        moon.style.top = event.clientY / 7.5 + 'vh';

    })

})

