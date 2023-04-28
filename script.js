window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

window.onscroll = function() {myFunctions()};

var navbar = document.getElementById("navbars");
var sticky = navbar.offsetTop;

function myFunctions() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}




function openNav() {
  document.getElementById("mySidenav").style.right = "0px"
 
}

function closeNav() {
  document.getElementById("mySidenav").style.right="-310px"
  
}





