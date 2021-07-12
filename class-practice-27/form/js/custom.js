jQuery(document).ready(function(){
	
	jQuery("form").submit(function(){
	
		var firstValue = jQuery(".first").val();
		var secondValue = jQuery(".second").val();
		
		var totalValue = parseInt(firstValue) +  parseInt(secondValue); 
		
		
		alert(totalValue);
	});
	
	jQuery("input[type='text']").focus(function(){
		jQuery(this).val("this is empty")
	});
	
	jQuery("input[type='text']").blur(function(){
		jQuery(this).val("this is not empty now")
	});
	
	
});