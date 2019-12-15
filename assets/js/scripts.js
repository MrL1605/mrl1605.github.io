jQuery(document).ready(function ($) {
    
		$('#navbar').bind('click', 'ul li a', function(event) {
			event.preventDefault();
			console.log(event.target.hash);
			$.scrollTo(event.target.hash, 2000);
    });
	/*
		$('#trans-home').click(function(){
			$('#home').ScrollTo({
					duration: 2000,
					durationMode: 'all'
			});
			$('.navbar-nav li.active').removeClass('active');
			$(this).addClass("active");
		});
		$('#trans-timeline').click(function(){
			$('#timeline').ScrollTo({
					duration: 2000,
					durationMode: 'all'
			});
			$('.navbar-nav li.active').removeClass('active');
			$(this).addClass("active");
		});
		$('#trans-about').click(function(){
			$('#about').ScrollTo({
					duration: 2000,
					durationMode: 'all'
			});
			$('.navbar-nav li.active').removeClass('active');
			$(this).addClass("active");
		});
		$('#trans-contact').click(function(){
			$('#contact').ScrollTo({
					duration: 2000,
					durationMode: 'all'
			});
			$('.navbar-nav li.active').removeClass('active');
			$(this).addClass("active");
		});
	*/
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
