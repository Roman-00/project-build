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
  // Плавная прокрутка
  $("body").on('click', '[href*="#"]', function(e){
      var fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container__projects', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');


  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  var stepsSwiper = new Swiper('.steps__swiper-container', {
    loop: !0,
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: !0,
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    }
  });

  var stepsSwiper = new Swiper('.steps__swiper-container', {
    loop: !0,
    pagination: {
      el: '.steps__swiper-fraction',
      type: 'fraction',
      clickable: !0,
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    }
  });

  // переключение слайдов по табам из секции 6
  $('.steps__tabs-item').on('click', function () {
    $('.steps__tabs-item').removeClass('active');
    $(this).addClass('active');
    const e = $(this).data('index');
    stepsSwiper.slideTo(e);
  });

  stepsSwiper.on('slideChange', (function () {
    let e = stepsSwiper.activeIndex - 1;
    if (e === 6) {e=0};
    $('.steps__tabs-item').removeClass('active');
    $('.steps__tabs-item').eq(e).addClass('active');
  }));
  
  //animate wow 
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       100,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();

  // Валидация формы в модальном окне
  $('.modal__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      checkboxModal: {
        required: true
      },
      userPhone: "required",
      // правило обьект
      userEmail: {
        required: true,
        email: true
      }
    },// сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      checkboxModal: {
        required: "Отметьте галочку",
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите e-mail",
        email: "Введите корректный email Пример: name@domain.com"
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modal.removeClass('modal--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
         ym('65026879', 'reachGoal', 'button'); return true;
       }
     });
    },
  });

  // Валидация формы в секции контроль
  $('.control__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      checkboxControl: {
        required: true
      },
      userPhone: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      checkboxControl: {
        required: "Отметьте галочку",
      },
      userPhone: "Телефон обязателен",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
         let ownModal = document.getElementById('ownModal');
         ownModal.classList.add('active');
         const RemoveOwnModal = () => {
          ownModal.classList.remove('active')
         };
         setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modal.removeClass('modal--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
       }
     });
    },
  });

   // Валидация формы в footer секция
   $('.footer__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        maxlength: 15,
        minlength: 2
      },
      checkboxFooter: {
        required: true
      },
      userPhone: "required",
      userQuestion: "required",
      // правило обьект
    },// сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 символов",
        maxlength: "Имя не должно превышать 15 символов"
      },
      checkboxFooter: {
        required: "Отметьте галочку",
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Обязательно введите свой вопрос!",
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    errorElement: "div",
    errorClass: "invalid",

    // Jquery Ajax form
    submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "send.php",
       data: $(form).serialize(),
       success: function (response) {
        let ownModal = document.getElementById('ownModal');
        ownModal.classList.add('active');
        const RemoveOwnModal = () => {
         ownModal.classList.remove('active')
        };
        setTimeout(RemoveOwnModal, 3000); 
         $(form)[0].reset();
         modal.removeClass('modal--visible');
       },
       error: function (response) {
         console.error('Ошибка запроса! ' + response);
       }
     });
    },
  });
  
  ownModal.onclick = function() {
    ownModal.classList.remove('active');
  };
  
  //Маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "Ваш номер телефона"});

  //Youtube API
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  };

  var player;
  // Появления карты после прокрутки
  var clients = $('.clients');
  var clientsTop = clients.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > clientsTop) {
      $('#map-in').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5b7f88401d4bf19ac293ac4cf87802227c54d63b1896ef24450b8f9cd078ab94&amp;width=100%25&amp;lang=ru_RU&amp;scroll=false&amp;center=47.244734, 39.723227"></script>');
      $(window).unbind('scroll');
    }
  });

  //Создаём макет содержимого карты.  
  /*ymaps.ready(function () {
    var myMap = new ymaps.Map('map-in', {
            center: [47.244734, 39.723227],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
  });*/

  // Показывать карту только когда докрутили до нее
});
