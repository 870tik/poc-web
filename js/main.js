var subContent = document.getElementById("sub");

window.onload = function() {
  AOS.init();
  subContent.style.transform = 'scale(0.8) translate(0, 20%)'
}

window.onscroll = function() {
  var py = subContent.getBoundingClientRect().top;
  var scroll = window.pageYOffset;
  var height = subContent.getBoundingClientRect().height;
  if(py < height) {
    subContent.style.transform = 'scale(1) translate(0, 0)'
  }
}
