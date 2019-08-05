

function imgapiCall(keyword) 
{
    var queryURL = "https://api.unsplash.com/search/photos?page=1&per_page=100&query=" +
    keyword + "&client_id=85b8d3c3eeda1d3e99f256d19ed5228b2c9bacf053fd33e7b1303b9dec097df3";
    var queryURL
    $.ajax(
    {
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).then(function (response) 
    {      
        // Saving the response 
        img_response_storage = response;
        console.log(img_response_storage)        
    })
}

function img_display(response, img_counter)
{   
    // Saving the gif_original_url property
    var img_url = response.results[img_counter].urls.small;
    // Creating and storing an image tag
    var imgApi = $("<img>");
    // Setting the gif src, class and alt
    imgApi.attr("src", img_url);
    imgApi.attr("class", "mb-3 image-content");
    imgApi.attr("alt", "img");
    // Appending the gif to the App_response div
    $(".image-content").empty();
    $(".image-content").append(imgApi);
    console.log(img_url);
}

$(document).on("click", "#img-forward", function(){
    console.log(img_counter)
    if(img_counter >=99)
    {
        img_counter = 0
        console.log(img_counter)
        img_display(img_response_storage, img_counter);
    }
    else
    {
        img_counter++
        console.log(img_counter)
        img_display(img_response_storage, img_counter);
    }
})

$(document).on("click", "#img-back", function(){
    console.log(img_counter)
    if(img_counter <= 0)
    {
        img_counter = 99
        console.log(img_counter)
        img_display(img_response_storage, img_counter);
    }
    else
    {
        img_counter--
        console.log(img_counter)
        img_display(img_response_storage, img_counter);
    }
});

