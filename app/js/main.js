(function () {

	function getScrollTop() {
		requestAnimationFrame(getScrollTop);
		
		if(document.body.scrollTop > 0) {
			document.body.classList.add('page-scrolled');
		}
		
		else {
			document.body.classList.remove('page-scrolled');
		}
	}
	
	window.addEventListener('DOMContentLoaded', getScrollTop);

})();

