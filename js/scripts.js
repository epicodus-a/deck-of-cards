var appendElement = function(element, selector, n){
  for (let i = 0; i < n; i++){
    selector.append(element);
  }
}


$().ready(function(){

  $(".club-img").click(function(){
    // $(".diamond-img").show();
    // $(".heart-img").show();
    //
    // $(".heart-deck").hide();
    // $(".diamond-deck").hide();
    $(".club-img").hide();
    var clubDeck = "<img src='img/club.png'/>";
    var selector = $(".club-deck");
    appendElement(clubDeck, selector, 12);
  });

  $(".diamond-img").click(function(){
    // $(".club-img").show();
    // $(".heart-img").show();
    //
    // $(".club-deck").hide();
    // $(".heart-deck").hide();

    $(".diamond-img").hide();
    var clubDeck = "<img src='img/diamond.png'/>";
    var selector = $(".diamond-deck");
    appendElement(clubDeck, selector, 12);
  });

  $(".heart-img").click(function(){
    // $(".club-img").show();
    // $(".diamond-img").show();
    //
    // $(".club-deck").hide();
    // $(".diamond-deck").hide();
    $(".heart-img").hide();
    var clubDeck = "<img src='img/heart.png'/>";
    var selector = $(".heart-deck");
    appendElement(clubDeck, selector, 12);
  });


})
