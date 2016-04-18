$(document).ready(function()
{	
    $(window).bind('beforeunload', function(){
    scrollTo(0,0);
    });
    $('.jumbotron').css({ height: ($(window).height()-50) +'px'  })
	responsiveResize();
    console.log("ready");
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
}
});
var toggle=0;
function responsiveResize () {
    $(window).on('resize', function() 
	{  
		$('.jumbotron').css({ height: ($(window).height()-50) +'px' });
	}); 
}

function toggleNavigation() {
    if (toggle) {
        toggle=0;
    } else {
        toggle=1;
        $('html, body').animate({
        scrollTop: $("#elem").offset().top
        }, 1000);
        console.log("toggle");
    }
   
}


