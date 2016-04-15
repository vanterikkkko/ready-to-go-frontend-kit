var body, html, sliderBody, btnLeft, btnRight, i, parts, vHeight, vWidth;
//Variable definitions
var i = 0,
    parts = 3,

    //Main html elements
    body = document.body,
    html = document.element,

    //viewport Height and Width
    vHeight = window.innerHeight,
    vWidth = window.innerWidth,

    sliderBody = _id("slider"),
    btnLeft = _id("btn-left"),
    btnRight = _id("btn-right"),

    urls = ["http://www.wallpapereast.com/static/images/pier_1080.jpg",
            "http://www.wallpapereast.com/static/images/pier_1080.jpg",
            "http://www.wallpapereast.com/static/images/pier_1080.jpg",
            "http://www.wallpapereast.com/static/images/pier_1080.jpg"];

    slide = _createEl("div");
    slide.className += "slide-el";

var slideBlock = _createEl("div");
    slideBlock.className += "slide-block slide-block-";

window.onload = function(){
  slideLayout();
}

function slideLayout(){
  for(var i=0; i < urls.length; i++){
    sliderBody.appendChild(slide.cloneNode(true));
  };
  var slides = _cl("slide-el");
  for(var i=0; i < slides.length; i++){
    for(var x=0; x < 3; x++){
      slides[i].appendChild(slideBlock.cloneNode(true))
    }
  }
}

function _id(el){
  return document.getElementById(""+ el +"");
}
function _cl(el){
  return document.getElementsByClassName(""+ el +"")
}
function _createEl(el){
  return document.createElement(""+ el +"");
}
