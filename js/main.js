var subContent = document.getElementById("sub");
var subContentY;

window.onload = function() {
  AOS.init();
}

window.onscroll = function() {
  var py = subContent.getBoundingClientRect().top;
  var scroll = window.pageYOffset;
  var height = subContent.getBoundingClientRect().height;
  if(py < height && ((height - py) / height) <= 1) {
    subContent.style.width = (0.8 + ((height - py) / height)/10 * 2) * 100 + 'vw';
    subContent.style.height = (0.8 + ((height - py) / height)/10 * 2) * 100 + 'vh';
  } else if(py < height && ((height - py) / height) > 1) {
    subContent.style.width = '100vw';
    subContent.style.height = '100vh';
  }
}
