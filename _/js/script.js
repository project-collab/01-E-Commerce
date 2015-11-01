"use strict"

function isElementInViewport (myImage) {

    var box = myImage.getBoundingClientbox();

    return (
        box.top >= 0 &&
        box.left >= 0 &&
        box.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        box.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

window.addEventListener('DOMContentLoaded', lazyLoadImages);
window.addEventListener('load', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
window.addEventListener('scroll', lazyLoadImages);

function lazyLoadImages () {
	
	var images = document.querySelectorAll('img[data-src]'),
		item;

	[].forEach

	// if all images are loaded, stop calling event listener
	if (images.length === 0) {
		window.removeEventListener('DOMContentLoaded', lazyLoadImages);
		window.removeEventListener('load', lazyLoadImages);
		window.removeEventListener('resize', lazyLoadImages);
		window.removeEventListener('scroll', lazyLoadImages);
	} // end if

} // lazy load func 


// http://developer.telerik.com/featured/lazy-loading-images-on-the-web/?ref=webdesignernews.com
