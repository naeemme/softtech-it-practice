jQuery(document).ready(function(){

	
			

var a= jQuery(".table").text();

jQuery(".fan").html("<h1>"+a+"</h1>");



jQuery(".table").css('color','red').css('background','blue');
jQuery(".fan").css('color','red').css('background','yellow');

jQuery(".fan").css({'color' : 'red','background' : 'blue'});

	
	jQuery("p").prevAll(".one").css('color','red');		
	
});