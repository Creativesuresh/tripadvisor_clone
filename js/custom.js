/* Mobile Menu Script Start */
$(document)
.off("click", ".trigger__menunav--act")
.on("click", ".trigger__menunav--act", function (e) {
  
  e.stopPropagation();
  $("body").toggleClass("mbl-hiden");
  $(".mobile__menu").toggleClass("active");
});
  $(document).click(function (e) {
    if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
      if ($(".menu").is(":visible")) {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("mbl-hiden");
      }
    }
  });


// if ($(".trigger__menunav--act").length > 0) {
//   $(document)
//     .off("click", ".trigger__menunav--act")
//     .on("click", ".trigger__menunav--act", function (e) {
//       e.stopPropagation();
//       $("body").toggleClass("mbl-hiden");
//       $(".mobile__menu").toggleClass("active");
//     });
//   $(document).click(function (e) {
//     if (!$(e.target).is(".trigger__menunav--act, .menu, .menu * ")) {
//       if ($(".menu").is(":visible")) {
//         $(".mobile__menu").removeClass("active");
//         $("body").removeClass("mbl-hiden");
//       }
//     }
//   });
// }

// if ($("#close_mobile_menu").length > 0) {
//   $(document)
//     .off("click", "#close_mobile_menu")
//     .on("click", "#close_mobile_menu", function (e) {
//       e.stopPropagation();
//       $(".mobile__menu").removeClass("active");
//       $("body").removeClass("mbl-hiden");
//     });
// }
/* Mobile Menu Script End */

/* Sticky Header Fixed Script */
$(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
      $("header").addClass("small_sticky");
    } else {
      $("header").removeClass("small_sticky");
    }
  });
  /* Sticky Header End Script */

  $('#tour__country--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        860:{
            items:3,
            nav:false
        },

        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#local__tour--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        860:{
            items:3,
            nav:false
        },

        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#our__explore--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

$('#chennai__trip--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        860:{
            items:3,
            nav:false
        },

        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#international__trip--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        860:{
            items:3,
            nav:false
        },

        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#holiday__tour--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },

        860:{
            items:3,
            nav:false
        },

        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('#rental__house--slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },

        860:{
            items:2,
            nav:false
        },

        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}
