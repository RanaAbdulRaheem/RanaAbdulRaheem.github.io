const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
var elementToChange = document.querySelectorAll(".content");
var navbar = document.querySelector('.navbar');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'black';
        body.style.color = 'white';
        navbar.style.background = 'black';
        body.style.transition = '2s';
        navbar.style.transition = '2s';

    } else {
        body.style.background = ' rgb(108, 108, 108)';
        body.style.color = 'black';
        elementToChange.forEach(function(element) {
            element.style.color = "white";
        });
        navbar.style.background = ' rgb(108, 108, 108)';
        body.style.transition = '2s';
        navbar.style.transition = '2s';

    }
});
