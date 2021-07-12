jQuery(document).ready(function(){
	function changeHobe(){
		var blue = jQuery(".blue").slider("value"),
		    red = jQuery(".red").slider("value"),
		    yellow = jQuery(".yellow").slider("value");
			
		jquery(".box").text(blue);
	}
	jQuery(".slider").slider({
		'max' : 255,
		'change': changeHobe
	});
	jQuery(".blue").slider("value",100);
	jQuery(".red").slider("value",70);
	jQuery(".yellow").slider("value",40);
	
	
	 jQuery( ".spinner" ).spinner({
      min: 2,
      max: 2500,
      step: 25,
      start: 1000,
      numberFormat: "C"
    });
	 jQuery( "#spinner" ).spinner();
});	