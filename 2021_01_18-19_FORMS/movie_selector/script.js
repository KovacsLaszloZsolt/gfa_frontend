const genreSelect = document.querySelector('#genre-sel');
const moviesSelect = document.querySelector('#movies-sel');
const movieTitleSpan = document.querySelector('.movie-title');

genreSelect.addEventListener('click', (elem) => {
    moviesSelect[0].selected = true;
    movieTitleSpan.textContent = '-';
    console.log(elem);
    enable(elem.target.value)
})


function enable(value) {
    for (let i = 1; i < moviesSelect.length; i++) {
        if (moviesSelect[i].className === value) {
            moviesSelect[i].hidden = false;
        } else {
            moviesSelect[i].hidden = true;
        }
    }
}

moviesSelect.addEventListener('click', (elem) => {
    movieTitleSpan.textContent = elem.target.value;
})