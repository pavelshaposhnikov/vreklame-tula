/* Nav Toggle */ 
let nav = $("#nav");
let navToggle = $("#navToggle");
  
$("#navToggle").on("click", function(event) {
  event.preventDefault();
  nav.toggleClass("show");
});


$('.nav-toggle').on('click', function(event){
  $('.nav-toggle').toggleClass('opened');
  $('#body').toggleClass('no-scroll');
});

$('.nav__link').on('click', function(event){
  $('#body').removeClass('no-scroll');
  $('.nav').removeClass('show');
  $('.nav-toggle').removeClass('opened');
});


/* Слайдер секции "Наши последние работы" */ 
$('.portfolio__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
          responsive: [
            {
              breakpoint: 1250,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
          ]
  });


/* Слайдер секции "Отзывы клиентов" */  
$('.reviews__items').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
                arrows: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
        ]
});