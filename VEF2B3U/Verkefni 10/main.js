"use strict";
"strict";
let concertEvents = [];
let images = [];
var el = document.getElementById('gallery');
$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {



    window.console.log(response);
	for(let i = 0; i<response.results.length; i++){
			concertEvents.push
			({
				name:response.results[i].eventDateName,
				where:response.results[i].eventHallName,
				imageSrc:response.results[i].imageSource
			});
			images.push({
					images :'<img src="'+response.results[i].imageSource+'" data-tags="'+response.results[i].eventHallName+'" alt="'+response.results[i].eventDateName+'" /> '
				});
	   }
	   x();
}
});
function x(){
	for (var i = 0; i < images.length; i++) {
		el.innerHTML += images[i].images;
	}
}






















/*

(function(){
	var $imgs = $('#gallery img');
	let $buttons = $('#buttons');
	var tagged = {};

	$imgs.each(function(){
		var img = this;
		var tags = $(this).data('tags');

		if (tags) {
			tags.split(',').forEach(function(tagName){
				if (tagged[tagName] == null) {
					tagged[tagName] = [];
				}
				tagged[tagName].push(img);
			});
		}
	});
}());




(function(){
	$('<button/>',{
		text: 'Show All',
		class: 'active',
		click: function(){
			$(this)
				.addClass('active')
				.siblings()
				.removeClass('active');
				$imgs.show();
		}
	}).appendTo($buttons);

	$.each(tagged, function(tagName){
		$('<button/>', {
			text: tagName + ' ('+tagged[tagName].length + ')',
			click: function(){
				$(this)
				.addClass('active')
				.siblings()
				.removeClass('active');
				$imgs
				.hide()
				.filter(tagged[tagName])
				.show();
			}
		}).appendTo($buttons);
	});
}());
*/
(function() {

  var $imgs = $('#gallery img');                  // Store all images
  var $buttons = $('#buttons');                   // Store buttons element
  var tagged = {};                                // Create tagged object

  $imgs.each(function() {                         // Loop through images and
    var img = this;                               // Store img in variable
    var tags = $(this).data('tags');              // Get this element's tags

    if (tags) {                                   // If the element had tags
      tags.split(',').forEach(function(tagName) { // Split at comma and
        if (tagged[tagName] === null) {            // If object doesn't have tag
          tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(img);                // Add the image to the array
      });
    }
  });

  $('<button/>', {                                 // Create empty button
    text: 'Show All',                              // Add text 'show all'
    class: 'active',                               // Make it active
    click: function() {                            // Add onclick handler to
      $(this)                                      // Get the clicked on button
        .addClass('active')                        // Add the class of active
        .siblings()                                // Get its siblings
        .removeClass('active');                    // Remove active from siblings
      $imgs.show();                                // Show all images
    }
  }).appendTo($buttons);                           // Add to buttons

  $.each(tagged, function(tagName) {               // For each tag name
    $('<button/>', {                               // Create empty button
      text: tagName + ' (' + tagged[tagName].length + ')', // Add tag name
      click: function() {                          // Add click handler
        $(this)                                    // The button clicked on
          .addClass('active')                      // Make clicked item active
          .siblings()                              // Get its siblings
          .removeClass('active');                  // Remove active from siblings
        $imgs                                      // With all of the images
          .hide()                                  // Hide them
          .filter(tagged[tagName])                 // Find ones with this tag
          .show();                                 // Show just those images
      }
    }).appendTo($buttons);                         // Add to the buttons
  });

}());

