jQuery(document).ready(function(){
	jQuery(".box").draggable({
		'containment' :'.big-box'
		
	});
	jQuery(".rox").selectable();
	jQuery(".fox").sortable();
});