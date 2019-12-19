document.addEventListener("DOMContentLoaded", function(event) {
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
});

// jquery code upbtn

/*$(document).ready(function () {
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
});*/