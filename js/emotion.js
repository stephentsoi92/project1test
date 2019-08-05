var keyword;
var img_counter = 0;
var gif_counter = 0;
var img_response_storage;
var gif_response_storage;


$(".emotion-icons").on("click", function(event)
{
    var clicked_mood = event.target;
    keyword = clicked_mood.getAttribute('value');
    console.log(keyword);
    imgapiCall(keyword);
    gifapiCall(keyword);
    img_display(img_response_storage, img_counter);
    gif_display(gif_response_storage, gif_counter);
});

$(document).on("click", ".fa-smile", function(){
    $(".sidebar-icon").empty();
    $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-smile"></i></a></div>');
    $(".Emotion").empty();
    $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Happy</a>');
});

$(document).on("click", ".fa-sad-tear", function(){
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-sad-tear"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Sad</a>');
});

$(document).on("click", ".fa-angry", function(){
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-angry"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Angry</a>');
});

$(document).on("click", ".fa-meh-blank", function(){
  $(".sidebar-icon").empty();
  $(".sidebar-icon").append('<div class="emotion-icons"><a href="Emotions"><i class="fas fa-meh-blank"></i></a></div>');
  $(".Emotion").empty();
  $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Calm</a>');
});

