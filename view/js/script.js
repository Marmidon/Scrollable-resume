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
        if (detectIE()) {
    $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 
            console.log("Using explorer!");

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta, 1000);
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

var IEversion = detectIE();

if (IEversion !== false) {

} else {
 
}

// add details to debug result


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


