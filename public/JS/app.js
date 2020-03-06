function comenzar(){

// -------------- Scrollbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mainNav").style.padding = "0.2rem";
  } else {
    document.getElementById("mainNav").style.padding = "1rem";
  }
}
// ------------- section focus
var plans = document.getElementById('plans');
var plansover = document.getElementById('plansover');
var about = document.getElementById('about');
var aboutover = document.getElementById('aboutover');
var contact = document.getElementById('contact');
var contactover = document.getElementById('contactover');



plans.onmouseover = function() {
  plansover.style.background = "var(--success)";
  aboutover.style.background = "var(--secondary)";
  contactover.style.background = "var(--secondary)";
}

about.onmouseover = function() {
  plansover.style.background = "var(--secondary)";
  aboutover.style.background = "var(--success)";
  contactover.style.background = "var(--secondary)";
}

contact.onmouseover = function() {
  plansover.style.background = "var(--secondary)";
  aboutover.style.background = "var(--secondary)";
  contactover.style.background = "var(--success)";
}

// ------------- Modals
var modal = document.getElementById("myModal");

var opn = document.getElementById("opnModal");

var span = document.getElementById("close");

opn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
window.addEventListener("load",comenzar,false);
