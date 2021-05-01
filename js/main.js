var subContent = document.getElementById("subImg");
var subContentY;

window.onload = function() {
  AOS.init();
}

window.onscroll = function() {
  var py = subContent.getBoundingClientRect().top;
  var scroll = window.pageYOffset;
  var height = subContent.getBoundingClientRect().height;
  if(py < height - height / 10 && ((height - py) / height) <= 1) {
    subContent.style.width = (0.92 + ((height - py) / height)/10 * 0.8) * 100 + 'vw';
    subContent.style.height = (0.92 + ((height - py) / height)/10 * 0.8) * 100 + 'vh';
    subContent.style.transform = 'translateY(' + (0.1 - ((height - py) / height)/10) * 100 + 'vh)';
  } else if(py < height && ((height - py) / height) > 1) {
    subContent.style.width = '100vw';
    subContent.style.height = '100vh';
    subContent.style.transform = 'translateY(0vh)';
  }
}
