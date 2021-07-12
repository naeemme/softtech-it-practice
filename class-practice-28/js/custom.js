jQuery(document).ready(function(){
	jQuery(".something").accordion({
		'collapsible' :true
	});
	var logitem =['ami','apni','tmi','amra','sobai'];
	
	jQuery(".input").autocomplete({'source': logitem});
	

		jQuery(".ui-widget").autocomplete();
		jQuery(".onekgula").buttonset();
		jQuery(".sob").buttonset();
		jQuery(".time").datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
		jQuery(".popupopen").click(function(){
			jQuery(".popupbox").dialog();
			
		});
		jQuery(".firstmenu").menu();
		
		jQuery(".loading").progressbar({
			'value' : 70
			
		});
		
			
		jQuery(".some-tabs").tabs();
	
});