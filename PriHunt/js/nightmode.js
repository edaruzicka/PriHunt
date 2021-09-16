// On button click, change css for most elements to be black instead of white
$("#btn-nightmode").click(function() {
    $(".info-block").css("background-color", "black");
    $(".info-block").css("color", "white");
    $(".info-block").css("box-shadow", "0 0 10px white");
    $(".info-img").css("filter", "invert(1)");
    $(".info-block-trip").css("background-color", "black");
    $(".info-block-trip").css("color", "white");
    $(".info-block-trip").css("box-shadow", "0 0 10px white");
    $(".info-block-big").css("background-color", "black");
    $(".info-block-big").css("color", "white");
    $(".info-block-big").css("box-shadow", "0 0 10px white");
    $("body").css("background-color", "black");
});