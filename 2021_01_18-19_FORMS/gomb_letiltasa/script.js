const newsletterBtn = document.querySelector('#newsletter');
const favAnimalRadioGroup = document.querySelectorAll("input[name = 'fav-animal']");
const newsletter = document.querySelectorAll('input[name = "newsletter"]');
const loveCatBtn = document.querySelector('#love-cat');

favAnimalRadioGroup.forEach(elem => {
    elem.addEventListener('click', () => {
        if (elem.id !== 'viktor') {
            newsletterBtn.disabled = false;
        } else if (elem.id === 'viktor' && newsletter[1].checked === true) {
            newsletterBtn.disabled = false;
            console.log(newsletter[1].checked);
        } else {
            newsletterBtn.disabled = true;
            console.log(newsletter[1]);
        }
    })
})

newsletter.forEach(elem => {
    elem.addEventListener('click', () => {
        if (elem.id === 'nwsl-yes') {
            loveCatBtn.disabled = false;
            newsletterBtn.disabled = true;
        } else if (elem.id === 'nwsl-no' && favAnimalRadioGroup[2].checked) {
            loveCatBtn.disabled = true;
            newsletterBtn.disabled = false;
        } else {
            loveCatBtn.disabled = true;
            newsletterBtn.disabled = true;
        }
    })
})

console.log(newsletter[1].checked);

newsletterBtn.addEventListener('click', () => {
    if (favAnimalRadioGroup[2].checked && newsletter[1].checked) {
        alert('Upsz, mégis felvettünk a macskákkal kapcsolatos hírlevelünkre');
    } else {
        alert('Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre');
    }
})



loveCatBtn.addEventListener('click', () => {
    alert('Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre');
})

// Ha Viktort választod és nemmel válaszolsz a macskás feliratkozásra, 
// akkor csak a feliratkozás gomb legyen elérhető
// Ezesetben kattintás után jelenjen meg a következő: 
// Upsz, mégis felvettünk a macskákkal kapcsolatos hírlevelünkre

