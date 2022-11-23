// document.addEventListener("DOMContentLoaded", () => {
//     let burger=document.querySelector(".burger");
//     let Links= document.querySelector(".nav-links");
//     burger.addEventListener('click',()=> {
//     Links.classList.toggle("nav-show");
//      })   }); 


function myFunction(y) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    y.classList.toggle("change");

  }





  // function myFunction() {
  //   y.classList.toggle("change");
  // }

