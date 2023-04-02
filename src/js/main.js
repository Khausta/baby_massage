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
  });