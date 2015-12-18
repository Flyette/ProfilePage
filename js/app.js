"use strict";
$(document).ready(function(){
	
	$("body").on('click', 'li a', function(){
		$('.text').hide();
		var id = $(this).attr('href');
		$(id).show();
		if (id == "#contact"){
			$('#element_to_pop_up').toggle();
			$('.b-close').on('click', function(){
				$('#element_to_pop_up').hide();
			});
		}
	});
	


	var maketemplate = function (mymustache, cible, json){
		var info = Mustache.to_html(mymustache, json);
		cible.html(info);

	}
	
	$.getJSON('https://s.idsympa.com/u-16.json', function(json) {
		var mytemplate = $("#tpl").html(); //html avec des trous
		maketemplate(mytemplate, $('body'), json);
	});



	
});
