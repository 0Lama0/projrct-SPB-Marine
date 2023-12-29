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


function changeImage(imagePath) {
    var buttons = document.querySelectorAll('.tabs button');

    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var clickedButton = event.currentTarget;
    clickedButton.classList.add('active');

    document.getElementById('mainImage').src = imagePath;
}



function toggleNav() {
    var sidenav = document.getElementById('mySidenav');
    if (sidenav.style.width === '250px') {
        sidenav.style.width = '0';
    } else {
        sidenav.style.width = '250px';
    }
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}
