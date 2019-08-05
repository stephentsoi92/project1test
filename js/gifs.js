function gifapiCall(keyword) 
{
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    keyword + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=100";
    var queryURL
    $.ajax(
    {
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).then(function (response) 
    {      
        // Saving the response 
        gif_response_storage = response;
        console.log(gif_response_storage)        
    })
}

function gif_display(response, gif_counter)
{   
    // Saving the gif_original_url property
    var gif_url = response.data[String(gif_counter)].images.original.url;
    // Creating and storing an image tag
    var gif_api = $("<img>");
    // Setting the gif src, class and alt
    gif_api.attr("src", gif_url);
    gif_api.attr("class", "mb-3 gif-content");
    gif_api.attr("alt", "gif");
    // Appending the gif to the App_response div
    $(".gif-content").empty();
    $(".gif-content").append(gif_api);
    console.log(gif_url);
}

$(document).on("click", "#gif-forward", function(){
    console.log(gif_counter)
    if(gif_counter >=99)
    {
        gif_counter = 0
        console.log(gif_counter)
        gif_display(gif_response_storage, gif_counter);
    }
    else
    {
        gif_counter++
        console.log(gif_counter)
        gif_display(gif_response_storage, gif_counter);
    }
})

$(document).on("click", "#gif-back", function(){
    console.log(gif_counter)
    if(gif_counter <= 0)
    {
        gif_counter = 99
        console.log(gif_counter)
        gif_display(gif_response_storage, gif_counter);
    }
    else
    {
        gif_counter--
        console.log(gif_counter)
        gif_display(gif_response_storage, gif_counter);
    }
});

