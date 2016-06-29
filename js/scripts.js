jQuery(document).ready(function ($) {
    $('.timeline-panel').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600 && $(this).parents(".timeline-normal").length) {
            $(this).css("visibility", "visible");
            $(this).addClass("stretchLeft");                
        }
        if (imagePos < topOfWindow + 600 && $(this).parents(".timeline-inverted").length) {
            $(this).css("visibility", "visible");
            $(this).addClass("stretchRight");
        }
    });
    $(window).scroll(function() {
		$('.timeline-panel').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600 && $(this).parents(".timeline-normal").length) {
                $(this).css("visibility", "visible");
                $(this).addClass("stretchLeft");                
            }
            if (imagePos < topOfWindow + 600 && $(this).parents(".timeline-inverted").length) {
                $(this).css("visibility", "visible");
                $(this).addClass("stretchRight");
            }
		});
	});
});	
/*
jQuery(document).ready(function($) {
  $(window).scroll(function(){
    console.log("Executing scrolling");
  	$('.container li').each(function(){
      	var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
            windowHeight  = $(window).height(),
            breakPoint    = windowHeight * 0.9;
  
        console.log("For each li scrolltop : " +  scrollTop + " offset : "+ elementOffset +" distance : " + distance + " breakoint :" + breakPoint);
  			if(distance > breakPoint) {
  				$(this).addClass("more-padding");	
  				console.log("Adding more padding ");
  			}  
  			if(distance < breakPoint) {
  				$(this).removeClass("more-padding");	
  			}
  	});
  });
});
/*
jQuery(document).ready(function($) {
    var $timeline_block = $('.cd-timeline-block');
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this)
            .find('.cd-timeline-img, .cd-timeline-content')
            .addClass('is-hidden');
        }
    });
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() +
                $(window).height() * 0.75 && $(this).find(
                    '.cd-timeline-img').hasClass(
                    'is-hidden')) {
                $(this).find(
                    '.cd-timeline-img, .cd-timeline-content'
                ).removeClass('is-hidden').addClass(
                    'bounce-in');
            }
        });
    });
});

*/