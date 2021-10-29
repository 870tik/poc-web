var subContent = document.getElementById("subImg");
var subContentY;
var menuText = document.getElementById("menuText");
var hiddenArea = document.getElementById("hiddenArea");
var menuSp = document.getElementById("menuDrower");
var pos = 0;

window.onload = function() {
  AOS.init();
}

window.onscroll = function() {
  var py = subContent.getBoundingClientRect().top;
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

function drower() {
  switch(pos){
    case 0 :
      menuText.style.right = pos + "vw";
      Object.assign(hiddenArea.style,{
        opacity:"0.5",
        zIndex:"10000"
        });
      pos = -60;
      menuSp.classList.add('active');
      break;
    case -60:
      menuText.style.right = pos + "vw";
      // hiddenArea.style.opacity = "0"
      Object.assign(hiddenArea.style,{
        opacity:"0",
        zIndex:"-10000"
        });
      hiddenArea.style.zIndex = "-10000"
      pos = 0;
      menuSp.classList.remove('active');
      break;
  }
}