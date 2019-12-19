/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick=function(e) {
    if(e.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };

  window.onkeydown = function(e) {
    if(e.key === "Escape") {
      modal.classList.remove('modal--visible');
    } 
  };
});*/

// jquery code upbtn

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  var btn = $("#upbtn");
    $(window).scroll(function(){
      $(this).scrollTop() < 800 ? btn.hide() : btn.show();  
    });  
    btn.click(function(){
      $("html,body").animate({scrollTop:0},600);
    });

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

});