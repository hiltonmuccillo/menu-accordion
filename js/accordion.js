var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      var panel = this.nextElementSibling;
      if (panel.className == "panel panel-opened") {
        panel.className = "panel panel-closed";
      }      
      return;
    }

    closeSubmenu();

    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.className == "panel panel-closed") {
      panel.className = "panel panel-opened";
    }
  });  
}

function closeSubmenu() {
  var pan = document.querySelectorAll(".panel");
  for (i = 0; i < pan.length; i++) {
    pan[i].className = "panel panel-closed";
  }
  var accc = document.querySelectorAll(".accordion");
  for (i = 0; i < accc.length; i++) {
    accc[i].classList.remove("active");
  }
}