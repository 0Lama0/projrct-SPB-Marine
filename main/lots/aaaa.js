var openModalBtns = document.querySelectorAll('.openModalBtn');

var modal = document.getElementById("myModal");

openModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (modal) {
            modal.style.display = "block";
        }
    });
});

var closeBtn = document.querySelector('#myModal .close');

closeBtn.addEventListener('click', function() {
    if (modal) {
        modal.style.display = "none";
    }
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});