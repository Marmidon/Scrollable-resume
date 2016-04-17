$(document).ready(function()
{	
    $('.jumbotron').css({ height: ($(window).height()-50) +'px' })
	responsiveResize();
    console.log("ready");
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
});

function responsiveResize () {
    $(window).on('resize', function() 
	{  
		$('.jumbotron').css({ height: ($(window).height()-50) +'px' });
	}); 
}


