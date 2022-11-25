// document.addEventListener("DOMContentLoaded", () => {
//     let burger=document.querySelector(".burger");
//     let Links= document.querySelector(".nav-links");
//     burger.addEventListener('click',()=> {
//     Links.classList.toggle("nav-show");
//      })   }); 

// side menu //
function myFunction(y) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    y.classList.toggle("change");

  }



// preloader time // 

  // setTimeout(function(){
  //   $('.loader-bg').fadeToggle();
  // }, 2000);





  // function myFunction() {
  //   y.classList.toggle("change");
  // }

// scrolling animation//

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  
  function a1() {
    var a1 = document.querySelectorAll(".a1");
  
    for (var i = 0; i < a1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = a1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        a1[i].classList.add("active");
      } else {
        a1[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", a1);



  function a2() {
    var a2 = document.querySelectorAll(".a2");
  
    for (var i = 0; i < a2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = a2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        a2[i].classList.add("active");
      } else {
        a2[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", a2);


// blog img zoom//

  const zoomElement = document.querySelector(".workspace");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  }
});



// sliding image //
$(function () {

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
      

});

// ajith //


$(".project-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  loop: true,
  center: true,
  dots: false,
  nav: true,
  navText : [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
  ],
  responsive: {
      0:{
          items:2
      },
      576:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:5
      }
  }
});


  
// index-img-zoom-in // 

