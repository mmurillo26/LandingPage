function page(){
// -------------- Top Navbar
  var btn = document.getElementById('menuBtn');
  var esc = document.getElementById('nav-list');

  btn.onclick = function() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar-nav") {
      x.className += " responsive";
    } else {
      x.className = "navbar-nav";
    }
  }

  esc.onclick = function() {
    var y = document.getElementById("topNav");
      y.className = "navbar-nav";
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
}
window.addEventListener("load",page,false);
