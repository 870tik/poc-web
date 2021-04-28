
window.onload = function() {
  AOS.init();
}

window.onscroll = function() {
  var subContent = document.getElementById("sub");
  console.log(subContent.getBoundingClientRect());
  if(subContent.getBoundingClientRect().top < 300) {
    subContent.style.transform = 'translate(0px' + subContent.getBoundingClientRect().top + ')'
  }
}
