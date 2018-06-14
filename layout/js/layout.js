var scroll = document.querySelector("#backtotop");

scroll.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    requestAnimationFrame(scrollToTop);
  });


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "7%";
    } else {
      document.getElementById("header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }