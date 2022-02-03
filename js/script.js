$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
});

$(document).ready(function () {
   $('.menu__link').click(function (event) {
      $('body').removeClass('lock');
       $('.header__burger, .menu').removeClass('active');
   });
});

