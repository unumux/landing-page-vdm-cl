if (!Modernizr.svg) {
    var imgs = document.getElementsByTagName('img');
    var endsWithDotSvg = /.*\.svg$/
    var i = 0;
    var l = imgs.length;
    for(; i != l; ++i) {
        if(imgs[i].src.match(endsWithDotSvg)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }
}


///////////// Smooth Scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if ($(window).width() > '991') {
      	if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 61
	        }, 1000);
	        return false;
	      }
      }
      else {
      	if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top 
	        }, 1000);
	        return false;
	      }
      }
      
    }
  });
});

