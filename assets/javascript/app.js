$("#therock-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=the+rock+wwe&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var therockImage = $("<img>");
	therockImage.attr("src", imageUrl);
	therockImage.attr("alt", "the rock image");
	$("#images").prepend(therockImage);
	});
	});

$("#kane-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kane+wwe&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var kaneImage = $("<img>");
	kaneImage.attr("src", imageUrl);
	kaneImage.attr("alt", "kane image");
	$("#images").prepend(kaneImage);
	});
	});

$("#undertaker-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=the+undertaker&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var undertakerImage = $("<img>");
	undertakerImage.attr("src", imageUrl);
	undertakerImage.attr("alt", "undertaker image");
	$("#images").prepend(undertakerImage);
	});
	});


$("#kurtangle-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kurt+angle&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var kurtangleImage = $("<img>");
	kurtangleImage.attr("src", imageUrl);
	kurtangleImage.attr("alt", "kurt angle image");
	$("#images").prepend(kurtangleImage);
	});
	});

$("#johncena-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=john+cena+wwe&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var johncenaImage = $("<img>");
	johncenaImage.attr("src", imageUrl);
	johncenaImage.attr("alt", "john cena image");
	$("#images").prepend(johncenaImage);
	});
	});

$("#machoman-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=macho+man+randy+savage&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var machomanImage = $("<img>");
	machomanImage.attr("src", imageUrl);
	machomanImage.attr("alt", "macho man image");
	$("#images").prepend(machomanImage);
	});
	});

$("#chrisjericho-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chris+jericho+wwe&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var chrisjerichoImage = $("<img>");
	chrisjerichoImage.attr("src", imageUrl);
	chrisjerichoImage.attr("alt", "chris jericho image");
	$("#images").prepend(chrisjerichoImage);
	});
	});

$("#mickfoley-button").on("click", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=mick+foley+wwe&rating=pg";
	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.done(function(response) {
	var imageUrl = response.data.image_original_url;
	var mickfoleyImage = $("<img>");
	mickfoleyImage.attr("src", imageUrl);
	mickfoleyImage.attr("alt", "mick foley");
	$("#images").prepend(mickfoleyImage);
	});
	});

$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

// Pseudo-coding my final steps:
// 01. I need to give my "add a button" bar some functionality.
// 02. Despite querying ratings in my API request, I can't seem to get the image ratings to actually display underneath the designated images.
// 03. Gifs are not pausing on click despite on click function above. When I try to add that on click function into the individual buttons themselves nothing shows up at all.