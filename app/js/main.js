

	function getScrollTop() {
		requestAnimationFrame(getScrollTop);
		
		if(document.body.scrollTop > 20 || window.pageYOffset > 20) {
			document.body.classList.add('page-scrolled');
		}
		
		else {
			document.body.classList.remove('page-scrolled');
		}
	}
	
	window.addEventListener('DOMContentLoaded', getScrollTop);

window.onscroll = function() {
    getScrollTop();
};

