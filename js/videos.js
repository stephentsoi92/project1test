$(document).ready(function(){
    var happyId = "PLdxYKvDkmZvNdNEwVQEKKOb0hFdr-FZ06";
    var sadId = "PLdxYKvDkmZvOJGTxSyluUBL6RvPPZfSXn";
    var angryId = "PLdxYKvDkmZvN4JZlGhsL08AYBys2e9FFu";
    var calmId = "PLdxYKvDkmZvNSvgqioY-L87jEkzVPE0Dc";
    var key = "AIzaSyC27JleTXZM_CyLwtcEl58ns66S-VgjiOU";
    
    $(".fa-smile").on("click", function(){
       playListId=happyId;
       console.log(playListId);
       URL = "https://www.googleapis.com/youtube/v3/playlistItems";
        options = {
           part: "snippet",
           key: key,
           maxResults:10,
           playlistId: playListId
       };
       loadVids();
    })
    $(".fa-meh-blank").on("click", function(){
       playListId=calmId;
       console.log(playListId);
       URL = "https://www.googleapis.com/youtube/v3/playlistItems";
        options = {
           part: "snippet",
           key: key,
           maxResults:10,
           playlistId: playListId
       };
       loadVids();
    })
    $(".fa-sad-tear").on("click", function(){
       playListId=sadId;
       console.log(playListId);
       URL = "https://www.googleapis.com/youtube/v3/playlistItems";
        options = {
           part: "snippet",
           key: key,
           maxResults:10,
           playlistId: playListId
       };
       loadVids();
    })
    $(".fa-angry").on("click", function(){
       playListId=angryId;
       console.log(playListId);
       URL = "https://www.googleapis.com/youtube/v3/playlistItems";
        options = {
           part: "snippet",
           key: key,
           maxResults:10,
           playlistId: playListId
       };
       loadVids();
    })

    
    var playListId = "PLdxYKvDkmZvOJGTxSyluUBL6RvPPZfSXn";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    var options = {
       part: "snippet",
       key: key,
       maxResults:10,
       playlistId: playListId
    }
    loadVids();
    function loadVids() {
       $.getJSON(URL,options, function (data){
    console.log(data);
    var id = data.items[0].snippet.resourceId.videoId;
    mainVid(id);
    resultsLoop(data);
       })
    }
    function mainVid(id)  {
       $(".video-content").html(`<iframe width="800" height="400" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }
    function resultsLoop(data) {
       $(".main-video-content").empty();
    $.each(data.items, function(i, item){
       var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0,100);
      var vid = item.snippet.resourceId.videoId;
       $(".main-video-content").append(`<article class="item emotion-item d-flex flex-column flex-md-row justify-content-between mb-5" data-key="${vid}"><img class="emotion-content" src="${thumb}" alt=""><div class="details text-md-left"><h4>${title}</h4><p>${desc}</p></div></article>`);
    });
    }

    $(".main-video-content").on("click", "article", function() {
       var id = $(this).attr("data-key");
       mainVid(id);
    });
    });