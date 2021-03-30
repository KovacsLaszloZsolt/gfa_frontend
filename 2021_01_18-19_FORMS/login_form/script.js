const eyeIcon = document.querySelector('.eye-icon');

eyeIcon.addEventListener('click', () => {
    const psw = document.querySelector('.psw');

    if (psw.getAttribute('type') === 'password') {
        psw.setAttribute('type', 'text');
    } else {
        psw.setAttribute('type', 'password');
    }
})