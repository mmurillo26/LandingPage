function page(){
// -------------- Top Navbar
  var btn = document.getElementById('menuBtn');
  var esc = document.getElementById('nav-list');

  btn.onclick = function() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar-nav") {
      x.className += " responsive-lg";
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

  document.getElementsByClassName('info-plan')[0].onmouseover = function() {
    document.getElementsByClassName("moreView")[0].style.display = "block";
  }
  document.getElementsByClassName('info-plan')[1].onmouseover = function() {
    document.getElementsByClassName("moreView")[1].style.display = "block";
  }
  document.getElementsByClassName('info-plan')[2].onmouseover = function() {
    document.getElementsByClassName("moreView")[2].style.display = "block";
  }
  document.getElementsByClassName('info-plan')[3].onmouseover = function() {
    document.getElementsByClassName("moreView")[3].style.display = "block";
  }
  document.getElementsByClassName('info-plan')[4].onmouseover = function() {
    document.getElementsByClassName("moreView")[4].style.display = "block";
  }
  document.getElementsByClassName('info-plan')[5].onmouseover = function() {
    document.getElementsByClassName("moreView")[5].style.display = "block";
  }
}
window.addEventListener("load",page,false);
