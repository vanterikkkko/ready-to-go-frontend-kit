window.onload = function(){
  init()
}

function init(){
  var owl = $(".owl-carousel"),
      nextBtn = $("#right-btn"),
      rightBtn = $("#left-btn"),
      backgroundHolder = $("#background-holder");
  carousel();

  owl.on("changed.owl.carousel", function(e){
    var page = e.page.index,
        pageSuspect, suspectURL;
    setTimeout(function(){
      pageSuspect = owl.find(".owl-item.active").children()
      suspectURL = pageSuspect.attr("src");
      backgroundHolder.css({"background-image": "url('" + suspectURL + "')"})
      console.log(suspectURL)
    }, 20)
  });


  nextBtn.on("click", function(){
    owl.trigger("next.owl.carousel", [400])
  });

  rightBtn.on("click", function(){
    owl.trigger("prev.owl.carousel", [400])
  })
}

var carousel = function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    center: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    responsive: {
      0: {
        stagePadding: 0,
        margin: 15,
        items: 1,
      },
      640: {
        stagePadding: 50,
        margin: 35,
        items: 1
      },
      1280: {
        stagePadding: 150,
        margin: 130,
        items: 1
      }
    }
  });
}
