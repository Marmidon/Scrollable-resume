$(document).ready(function()
{	
    $('.jumbotron').css({ height: ($(window).height()) +'px' })
	responsiveResize();
    console.log("ready");
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
});

function responsiveResize () {
    $(window).on('resize', function() 
	{  
		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	}); 
}

function applyResize()
{
	$(window).on('resize', function() 
	{  
		lnStickyNavigation = $('.scroll-down').offset().top + 20;
	
		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	}); 
}


