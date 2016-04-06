// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require jquery-ui/sortable
//= require jquery-ui/effect-highlight
//= require swipebox
//= require turbolinks
//= require_tree .
//= require jasny-bootstrap.min

//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require masonry/box-maker
//= require masonry/jquery.loremimages.min
//= require isotope/jquery.isotope


function setCategories(cat)
{
	$(cat).find('a:first').attr("rel", cat);
}

function noCategories () {
	$(".swipebox").attr("rel", "group");
}



$('.grid').isotope({
  // options
  itemSelector: '.box',
  //layoutMode: 'fitRows',
  transitionDuration: '0.8s'
});



$(document).ready(function(){

	$( '.swipebox' ).swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : true, // false will show top bar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: true // true will return to the first image after the last image is reached
	} );
});

/*
$(document).ready(function(){
    $('#opener').on('click', function() {   
    var panel = $('#slide-panel');
    if (panel.hasClass("visible")) {
       panel.removeClass('visible').animate({'margin-left':'-300px'});
       $('#content').css({'margin-right':'0px'});
    } else {panel.addClass('visible').animate({'margin-left':'0px'});
       $('#content').css({'margin-right':'-300px'});
    }   
      return false; 
    });
});*/

jQuery(function(){

"use strict";

jQuery(document.body)

// closes when bg clicked

.on('touchend click','#swipebox-slider .current img', function(){

return false;

})

.on('touchend click','#swipebox-slider .current', function(){

jQuery('#swipebox-close').click();

});

});