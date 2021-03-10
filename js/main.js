/* Nav Toggle */ 
let nav = $("#nav");
let navToggle = $("#navToggle");
let navdetails = $("#navdetails");
  
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

/* List remover */ 
$("#navdetails").on('click', function(e){
  $(".navdetails").removeAttr("open");
})

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
              breakpoint: 1240,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
              }
            },
            {
              breakpoint: 680,
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
            breakpoint: 1240,
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

/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 50
  }, 600);
});