$(document).ready(function () {
	

	$.each(data.dealers, function(index) {
		var dealership = data.dealers[index];
		$(".dealer").append("<hr>");
		$(".dealer").append('<div id="' + dealership.Map + '"></div>')
		$(".dealer").append("<h2>" + dealership.Title + "<h2>");
		$(".dealer").append("<p>" + dealership.Address1 + "<br>" + dealership.Address2 + "<br>" + dealership.Country + "</p>");
		$(".dealer").append("<button>" + "Select This Dealer" + "</button>");
		$(".dealer").append("<h3>" + dealership.Phone + "<h3>");
		$(".dealer").append("<h4>" + "Reviews" + "<h4>");
		$(".dealer").append("<div>" + "<p>" + dealership.Review + "</p>" + "<h5>" + "View " + dealership.ReviewCount + " Reviews" + "</h5>" + "</div>");
	});

	
	function initialize() {

		$.each(data.dealers, function(index) {
			var dealership = data.dealers[index];
			var myLatlng = new google.maps.LatLng(dealership.Lat, dealership.Lng);
			var mapOptions = {
				center: new google.maps.LatLng(dealership.Lat, dealership.Lng),
				zoom: 8,
			}

			var map = new google.maps.Map(document.getElementById(dealership.Map),
					  mapOptions);

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: "dealership"
			})		
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
});
	







	

	

