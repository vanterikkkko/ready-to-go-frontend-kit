var body, html, sliderBody, btnLeft, btnRight, i, parts,
    vHeight, vWidth, slide, slideBlock;
//Variable definitions
var i = 0,
    parts = 7,

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
            "http://www.wallpapereast.com/static/images/abstract-hd-wallpaper-338453.jpg",
            "http://www.wallpapereast.com/static/images/pier_1080.jpg",
            "http://www.wallpapereast.com/static/images/abstract-hd-wallpaper-338453.jpg"];

window.addEventListener("resize", function(){
  vHeight = window.innerHeight;
  vWidth = window.innerWidth;

  slideBlockCreate()
}, false);

window.onload = function(){
  createElements();
  slideLayout();
}
function createElements(){
  slide = _createEl("div");
  slide.className += "slide-el";

  slideBlockCreate();
}

function slideBlockCreate(){
  console.log(vHeight, vWidth);

  slideBlock = _createEl("div");
  slideBlock.className += "slide-block slide-block-";
  slideBlock.style.width = vWidth + "px";
  slideBlock.style.height = (vHeight / parts ) + "px";
}

function slideLayout(){
  for(var i=0; i < urls.length; i++){
    sliderBody.appendChild(slide.cloneNode(true));
  };
  var slides = _cl("slide-el");
  for(var i=0; i < slides.length; i++){
    for(var x=0; x < parts; x++){
      slides[i].appendChild(slideBlock.cloneNode(true))
      slides[i].className = "slide-el slide-el-"+ i +""
    }
  };
  for(var i = 0; i < slides.length; i++){
    console.log(urls[i]);
    for(var x=0;x<slides[i].children.length;x++){
      slides[i].children[x].style["background-image"] = "url("+urls[i]+")";
    }
  }
}

//Select each slide
//Select it's children
//Each children suppose to have the same bgi that parent has.












function _id(el){
  return document.getElementById(""+ el +"");
}
function _cl(el){
  return document.getElementsByClassName(""+ el +"")
}
function _createEl(el){
  return document.createElement(""+ el +"");
}
