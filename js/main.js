'use strict'

const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;
        
        function posicionMenu() {
          if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
          } else {
          navbar.classList.remove("sticky");
          }
        }