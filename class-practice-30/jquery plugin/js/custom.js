jQuery(document).ready(function(){
	jQuery(".slider").owlCarousel({
		'autoPlay' : 3000,
		'items' : 3,
		'itemsDesktop' : [1200, 6],
		'itemsDesktopSmall' : [1000, 4],
		'itemsTablet' : [768, 3],
		'stopOnHover' : true,
	});
	
	jQuery(".full-slider .prev").click(function(){
		jQuery(".slider").trigger('owl.prev');
		
		return false;
	});
	jQuery(".full-slider .next").click(function(){
		jQuery(".slider").trigger('owl.next');
		
		return false;
	});
	
});