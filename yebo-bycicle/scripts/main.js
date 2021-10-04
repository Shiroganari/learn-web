$(document).ready(function(){
    let toggleButton = document.getElementById('toggle-button');
    let nav = document.getElementById('nav');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('show');
        toggleButton.classList.toggle('active');
        document.body.classList.toggle('lock');
    })

    $('.twitter__body').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

});