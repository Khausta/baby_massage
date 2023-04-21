// 'use strict';

$(document).ready(function(){
    $("#owl-1").owlCarousel({
        loop : true,
        margin: 20,
        nav: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false
            }
        
        }
    });

    $("#owl-2").owlCarousel({
        loop : true,
        margin: 20,
        nav: true,
        autoplay: true,
       
        responsive:{
            0:{
                items:1,
            },
            600:{
                items: 2,
            },
            1000:{
                items:3,
            }
        
        }
    });


    //call
  $('.overlay .modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut();
  });

  //validation
  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        text: {
          required: false,
          maxlength: 200
        },
        checked: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите Ваше имя",
          minlength: jQuery.validator.format("Введите {0} символа и более")
        },
        phone: "Пожалуйста, введите Ваш номер телефона",
        checked:  {
          required: "Пожалуйста, ознакомьтесь с Политикой конфиденциальности"
        },
        errorPlacement: function (error, element) {
          if (element.attr("type") == "checkbox") {
              return element.next('label').append(error);
          }
      
           error.insertAfter($(element));
        }

      }
    });
  }
  valideForms('form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");
    
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;  
    }

      $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
      });
      return false;
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__menu_hamburger'),
          menu = document.querySelector('.menu_list-top'),
          menuItem = document.querySelectorAll('.menu_list-top ul li.menuItem');
         

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('header__menu_hamburger-active');
        menu.classList.toggle('menu_list-top-active');
      });    
        menuItem.forEach( item => { 
            item.addEventListener('click', () => {
            hamburger.classList.toggle('header__menu_hamburger-active');
            menu.classList.toggle('menu_list-top-active');
          });
      });   
  });

  



