$(document).ready(function(){
    let toggleButton = document.getElementById("toggle-button");
    let nav = document.getElementById("nav");
    let topLine = document.getElementById("top-line");

    fixedTopLine();
    window.onscroll = function() {
        fixedTopLine();
    } 

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('show');
        toggleButton.classList.toggle('active');
        document.body.classList.toggle("lock");
    })

    $('.clients__content').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    function fixedTopLine() {
        if (window.pageYOffset >= topLine.offsetTop + 1) {
            topLine.classList.add('sticky')
        } else {
            topLine.classList.remove('sticky');
        }
    }
});