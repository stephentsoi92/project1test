// THIS makes the request for the user to browse and upload a picture from its computer
function pictureUpload(){
    var preview = document.querySelector('.img-url'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
        $(".picture-placeholder").hide()
        $('input[type=file]').hide()
    }
    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
// This is the API call that makes the request to push a url and return a value for the emotion
function face_recognition(url) 
{
    console.log("facecall")
    var queryURL = "https://apis.paralleldots.com/v4/facial_emotion";
    $.ajax(
    {
        url: queryURL,
        method: "POST",
        data:{
            api_key: "26eKaRKtotWjy0z61BpGKOqaHNYhOH47MByh5ullhqY",
            return_landmark: 1,
            face_tokens: "c2fc0ad7c8da3af5a34b9c70ff764da0",
            url: url
        }
    }).then(function (response) 
    {      
        // Saving the response 
        console.log(response)                
        emotionLog (response)
})
}
// FUNCTION TO GET THE EMOTION ONCE THE API IS CALLED
function emotionLog (response)
{
    // The strongest emotion is obtained
    var strongEmotion = response.facial_emotion[0].tag.toLowerCase()
    // console.log(response.facial_emotion[0].tag)
    if (strongEmotion === "surprise")
    {
        var strongEmotion = "happy"
    }
    if (strongEmotion === "disgust")
    {
        var strongEmotion = "angry"
    }
    if (strongEmotion === "neutral" || strongEmotion === "fear")
    {
        var strongEmotion = "calm"
    }
    console.log(strongEmotion)
    return strongEmotion
}
//STORAGE FIREBASE
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyDfFuDAqRUF6Chbpie_eA2NFnl7JsejT9s",
    authDomain: "faceapp-5fc2b.appspot.com",
    databaseURL: "https://faceapp-5fc2b.firebaseio.com",
    storageBucket: "gs://faceapp-5fc2b.appspot.com",
  };
  firebase.initializeApp(config);
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();
// Create a child reference
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'
var fileName = "space.jpg"
var pictureUrl = "";
$(".img-url").on("DOMSubtreeModified", function(event){
    pictureUrl = $(this).attr("src")
    console.log(pictureUrl)
    console.log(this)
    //ICON SIDEBAR
    // pictureChange = $()
    // $(".sidebar-icon").empty();
    // $(".sidebar-icon").append('<div class="emotion-icons"><img src="'+preview.src = reader.result+''"><i class="fas fa-smile"></i></a></div>');
    // $(".Emotion").empty();
    // $(".Emotion").append('<a class="nav-link js-scroll-trigger" href="#Emotions">Happy</a>')
    
    // Child references can also take paths delimited by '/'
    var spaceRef = storageRef.child('images/space.jpg');
    // spaceRef now points to "images/space.jpg"
    // imagesRef still points to "images"
    // File path is 'images/space.jpg'
    var path = spaceRef.fullPath
    // File name is 'space.jpg'
    var name = spaceRef.name
    // Points to 'images'
    var imagesRef = spaceRef.parent;
    // Data URL string
    var message = pictureUrl;
    try {
        spaceRef.putString(message, 'data_url').then(function(snapshot) {
            console.log('Uploaded a data_url string!');
            storageRef.child('images/space.jpg').getDownloadURL().then(function(url) {
                console.log(url)
                face_recognition(url)
                });
            },function(error){
                console.log(error)
            }).catch(function(error){
                console.log(error)
            });
    } catch(err){
        console.log(err)
    }
  
    // Create the file metadata
    var metadata = {
    contentType: 'image/jpeg'
    };
    var file = document.querySelector('input[type=file]').files[0];
});
