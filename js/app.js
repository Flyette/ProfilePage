"use strict";
$(document).ready(function(){
	
	$("body").on('click', 'li a', function(){
		$('.text').hide();
		var id = $(this).attr('href');
		$(id).show();
		if (id == "#contact"){
			$('#element_to_pop_up').show();
		}
	});
	

	/*$.getJSON('http://vps227573.ovh.net/u-16.json', function(data) {
		var val = $('[elt]');
		for(var n =0; n < val.length; n ++){
			var attribut = $(val[n]).attr('elt');
			var result = data[attribut];
			$(val[n]).html(result);}
		});
	*/
	// $.getJSON('http://vps227573.ovh.net/u-16.json', function(data) {
	// 	    var fullName = "{{first_name}} {{last_name}}";
	// 	    var infoFullName = Mustache.to_html(fullName, data);
	// 	    $('.me').html(infoFullName);
	// 	});
	var maketemplate = function (mymustache, cible, json){
		var info = Mustache.to_html(mymustache, json);
		cible.html(info);

	}
	
	$.getJSON('https://s.idsympa.com/u-16.json', function(json) {
		var mytemplate = $("#tpl").html(); //html avec des trous
		maketemplate(mytemplate, $('body'), json);
	});


            //$('#my-button').on('click', function() {
            	console.log('pop');
                // Prevents the default action to be triggered. 
                // e.preventDefault();

           
                //$('#element_to_pop_up').show();

           // });
	
	});
