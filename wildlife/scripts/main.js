$(document).ready(function(){
    let toggleButton = document.getElementById('toggle-button');
    let menu = document.getElementById('menu');

    // toggle-button
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('show');
        toggleButton.classList.toggle('active');
    })

    // slick-slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 568,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });
});