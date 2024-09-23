let today = new Date();
let date = document.querySelector('.wheather-container-date');
let background = document.querySelector('.blur-layer');

let morning = (today.getHours() <= 12 && today.getHours() >= 8);
let afternoon = (today.getHours() <= 18 && today.getHours() >= 12);
let evning = (today.getHours() <= 0 && today.getHours() >= 18);
let night = (today.getHours() <= 8 && today.getHours() >= 0);

date.innerHTML = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

function changeBackground() {

    if (morning) {
        background.classList.add('morning');
    } else if (afternoon) {
        background.classList.add('afternoon');
    } else if (evning) {
        background.classList.add('evning');
    } else if (night) {
        background.classList.add('night');
    }
}
changeBackground();