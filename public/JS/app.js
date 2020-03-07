function page(){
// -------------- Top Navbar
var btn = document.getElementById('menuBtn');

btn.onclick = function() {
  var x = document.getElementById("topNav");
  if (x.className === "navbar-nav") {
    x.className += " responsive";
  } else {
    x.className = "navbar-nav";
  }
}


// -------------- Scroll topbar
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
var home = document.getElementById('header');


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

home.onmouseover = function() {
  plansover.style.background = "var(--secondary)";
  aboutover.style.background = "var(--secondary)";
  contactover.style.background = "var(--secondary)";
}

}
window.addEventListener("load",page,false);
