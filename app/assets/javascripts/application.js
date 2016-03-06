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
//= require turbolinks
//= require_tree .
//= require fancybox
//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require masonry/box-maker
//= require masonry/jquery.loremimages.min
//= require isotope/jquery.isotope





$('.grid').isotope({
  // options
  itemSelector: '.box',
  //layoutMode: 'fitRows',
  transitionDuration: '0.8s'
});


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
});