var input;

$(document).ready(function() {
	
	$("#btn1").click(function() {

		input = document.getElementById("text").value;
	
		$.getJSON("http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=" + input + "&apikey=55d1bcd288f21cbac9c36b8f000646f7", function(data) {
			
			console.log(data);
			console.log(data.data.results);

			$.each(data.data.results, function(i, obj) {

				$("#jq").append("<li>" + obj.name + "</li>");

				
			});

			$("#js").html("");

			var id = 0;

			data.data.results.map(function(obj) {


				$("#js").append("<li>" + obj.name + "<ul id=" + id + "></li>");

				obj.comics.items.map(function(comicObj) {

					$("#" + id).append("<li>" + comicObj.name + "</li>");

				});

				id++;

				console.log(id);

				$("#js").append("</ul>");

				//console.log(obj.name);

			});			
		});
	});
});