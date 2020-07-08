$(function () {
  "use strict";

  /*-----------------------------------
   * FIXED  MENU - HEADER
   *-----------------------------------*/
  function menuscroll() {
    var $navmenu = $(".nav-menu");
    if ($(window).scrollTop() > 50) {
      $navmenu.addClass("is-scrolling");
    } else {
      $navmenu.removeClass("is-scrolling");
    }
  }
  menuscroll();
  $(window).on("scroll", function () {
    menuscroll();
  });
  /*-----------------------------------
   * NAVBAR CLOSE ON CLICK
   *-----------------------------------*/

  $(".navbar-nav > li:not(.dropdown) > a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /*
   * NAVBAR TOGGLE BG
   *-----------------*/
  var siteNav = $("#navbar");
  siteNav.on("show.bs.collapse", function (e) {
    $(this).parents(".nav-menu").addClass("menu-is-open");
  });
  siteNav.on("hide.bs.collapse", function (e) {
    $(this).parents(".nav-menu").removeClass("menu-is-open");
  });

  /*-----------------------------------
   * ONE PAGE SCROLLING
   *-----------------------------------*/
  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[data-toggle="tab"]')
    .on("click", function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*-----------------------------------
   * OWL CAROUSEL
   *-----------------------------------*/
  var $testimonialsDiv = $(".testimonials");
  if ($testimonialsDiv.length && $.fn.owlCarousel) {
    $testimonialsDiv.owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      navText: [
        '<span class="ti-arrow-left"></span>',
        '<span class="ti-arrow-right"></span>',
      ],
    });
  }

  var $galleryDiv = $(".img-gallery");
  if ($galleryDiv.length && $.fn.owlCarousel) {
    $galleryDiv.owlCarousel({
      nav: false,
      center: true,
      loop: true,
      autoplay: true,
      dots: true,
      navText: [
        '<span class="ti-arrow-left"></span>',
        '<span class="ti-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });
  }
}); /* End Fn */

// ================================functionality of slideshow========================================
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// ================================functionality of slideshow========================================

// collapsing navvbar on mobile
$(document).on("click", ".navbar-collapse.show", function (e) {
  $(this).collapse("hide");
});

// ==================slideanimation==================================================================

// subsribtion form


function onSubmitClick() {
  const userInput = document.getElementById("subsribe__input").value;

  var form = new FormData();
  form.append("name", userInput);
  form.append("email", userInput);
  form.append("subscribe", "true");
  var settings = {
    url: "http://www.tacitapp.com/php_scripts/subscribe.php",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(userInput);
   
  


  });
}


// $("form").on('submit', function(){
//     $('.modal').show();
//  })










// ========================adding contact form backend===============================
function getInputValue() {
    // Selecting the input element and get its value 
    var nameInput = document.getElementById("name").value;
    var mailInput = document.getElementById("email").value;
    var messageInput = document.getElementById("message").value;
    //details
    var settings = {
      "async": true,
      "crossDomain": false,
      "url": "https://nichepharma.com/email-senders/nichepharma.php?fromEmail=" + mailInput + "&name=" + nameInput + "&body=" + messageInput + "&subject=TEST",
      "method": "GET",
      "headers": {
        "User-Agent": "PostmanRuntime/7.17.1",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "cab2de23-6db1-48ed-be77-a918661ed54e,83701098-539d-4362-ba9a-dd6f67bb00c2",
        "Host": "nichepharma.com",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);

    });
    
  }
  const button = document.querySelector('#sendRequest');
  button.addEventListener('click', getInputValue);
  // ========================end of adding contact form backend===============================