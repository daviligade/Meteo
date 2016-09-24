function initMap() {
	        var mapDiv = document.getElementById('map');

	        var map = new google.maps.Map(mapDiv, {
	            center: {lat: 46.4988281, lng: 1.9142301},
	            zoom: 6,
				scrollwheel: false,
			    navigationControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    draggable: false,
			    disableDoubleClickZoom: true,
			    mapTypeId: 'roadmap',
			    styles: [
				    {
				        "featureType": "landscape",
				        "stylers": [
				            {
				                "hue": "#FFA800"
				            },
				            {
				                "saturation": 0
				            },
				            {
				                "lightness": 0
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "stylers": [
				            {
				                "hue": "#53FF00"
				            },
				            {
				                "saturation": -73
				            },
				            {
				                "lightness": 40
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "stylers": [
				            {
				                "hue": "#FBFF00"
				            },
				            {
				                "saturation": 0
				            },
				            {
				                "lightness": 0
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "stylers": [
				            {
				                "hue": "#00FFFD"
				            },
				            {
				                "saturation": 0
				            },
				            {
				                "lightness": 30
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "stylers": [
				            {
				                "hue": "#00BFFF"
				            },
				            {
				                "saturation": 6
				            },
				            {
				                "lightness": 8
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "stylers": [
				            {
				                "hue": "#679714"
				            },
				            {
				                "saturation": 33.4
				            },
				            {
				                "lightness": -25.4
				            },
				            {
				                "gamma": 1
				            }
				        ]
				    }
				]
	        });

	        var contentStringParis = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Paris</h1>'+
			'<div id="bodyContent">'+
			'<b>Paris</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Paris is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Paris Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Paris was founded in the 3rd century BC by a Celtic people ' +
			'called the Parisii, who gave the city its name. By the 12th ' +
			'century, Paris was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Paris, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Paris, <a target="_blank" href="https://en.wikipedia.org/wiki/Paris">'+
			'https://en.wikipedia.org/wiki/Paris</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringStrasbourg = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Strasbourg</h1>'+
			'<div id="bodyContent">'+
			'<b>Strasbourg</b>, is the capital and largest city of the Grand Est region of France and is ' +
			' the official seat of the European Parliament. Located close to the border ' +
			'with Germany, it is the capital of the Bas-Rhin département. In 2013, the city ' +
			'proper had 275,718 inhabitants, the Eurométropole de Strasbourg (Greater ' +
			'Strasbourg) had 475,934 inhabitants, the Arrondissement of Strasbourg had ' +
			'482,384 inhabitants and Strasbourg\'s metropolitan area had a population of ' +
			'773,347 (not counting the section across the border in Germany), making it the ' +
			'ninth largest metro area in France and home to 13% of the Grand Est region\'s ' +
			'inhabitants. The transnational Eurodistrict Strasbourg-Ortenau had a population of ' +
			'915,000 inhabitants in 2014.' +
			'<p>Attribution: Strasbourg, <a target="_blank" href="https://en.wikipedia.org/wiki/Strasbourg">'+
			'https://en.wikipedia.org/wiki/Strasbourg</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringNantes = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Nantes</h1>'+
			'<div id="bodyContent">'+
			'<b>Nantes</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Nantes is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Nantes Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Nantes was founded in the 3rd century BC by a Celtic people ' +
			'called the Nantesii, who gave the city its name. By the 12th ' +
			'century, Nantes was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Nantes, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Nantes, <a target="_blank" href="https://en.wikipedia.org/wiki/Nantes">'+
			'https://en.wikipedia.org/wiki/Nantes</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringLyon = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Lyon</h1>'+
			'<div id="bodyContent">'+
			'<b>Lyon</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Lyon is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Lyon Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Lyon was founded in the 3rd century BC by a Celtic people ' +
			'called the Lyonii, who gave the city its name. By the 12th ' +
			'century, Lyon was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Lyon, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Lyon, <a target="_blank" href="https://en.wikipedia.org/wiki/Lyon">'+
			'https://en.wikipedia.org/wiki/Lyon</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringBordeaux = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Bordeaux</h1>'+
			'<div id="bodyContent">'+
			'<b>Bordeaux</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Bordeaux is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Bordeaux Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Bordeaux was founded in the 3rd century BC by a Celtic people ' +
			'called the Bordeauxii, who gave the city its name. By the 12th ' +
			'century, Bordeaux was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Bordeaux, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Bordeaux, <a target="_blank" href="https://en.wikipedia.org/wiki/Bordeaux">'+
			'https://en.wikipedia.org/wiki/Bordeaux</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringToulouse = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Toulouse</h1>'+
			'<div id="bodyContent">'+
			'<b>Toulouse</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Toulouse is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Toulouse Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Toulouse was founded in the 3rd century BC by a Celtic people ' +
			'called the Toulouseii, who gave the city its name. By the 12th ' +
			'century, Toulouse was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Toulouse, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Toulouse, <a target="_blank" href="https://en.wikipedia.org/wiki/Toulouse">'+
			'https://en.wikipedia.org/wiki/Toulouse</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringNice = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Nice</h1>'+
			'<div id="bodyContent">'+
			'<b>Nice</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Nice is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Nice Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Nice was founded in the 3rd century BC by a Celtic people ' +
			'called the Niceii, who gave the city its name. By the 12th ' +
			'century, Nice was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Nice, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Nice, <a target="_blank" href="https://en.wikipedia.org/wiki/Nice">'+
			'https://en.wikipedia.org/wiki/Nice</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

			var contentStringAjaccio = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Ajaccio</h1>'+
			'<div id="bodyContent">'+
			'<b>Ajaccio</b>,  is the capital and the most populous city ' +
			'of <b>France</b>. It has an area of 105 km² (41 mi²) and a ' +
			'population in 2013 of 2,229,621 within the city limits.' +
			'Ajaccio is both a commune and department, and forms the centre ' +
			'and headquarters of the Île-de-France, or Ajaccio Region, which ' +
			'has an area of 12,012 square kilometers (4,638 square miles) ' +
			'and a population in 2014 of 12,005,077, comprising 18.2 percent ' +
			'of the population of France.' +
			'Ajaccio was founded in the 3rd century BC by a Celtic people ' +
			'called the Ajaccioii, who gave the city its name. By the 12th ' +
			'century, Ajaccio was the largest city in the western world, a ' +
			'prosperous trading centre, and the home of the University of ' +
			'Ajaccio, one of the oldest universities in history. By the 17th ' +
			'century it was one of Europe\'s major centres of finance, ' +
			'commerce, fashion, science, and the arts, and it retains that ' +
			'position still today.' +
			'<p>Attribution: Ajaccio, <a target="_blank" href="https://en.wikipedia.org/wiki/Ajaccio">'+
			'https://en.wikipedia.org/wiki/Ajaccio</a> '+
			'(last visited September 23, 2016).</p>'+
			'</div>'+
			'</div>';

	        var infowindowParis = new google.maps.InfoWindow({
			    content: contentStringParis
			});
			var markerParis = new google.maps.Marker({
			    position: new google.maps.LatLng(48.8567, 2.3508),
			    map: map,
			    title: 'Paris'
			});
			markerParis.addListener('click', function() {
			    infowindowParis.open(map, markerParis);
			});

			var infowindowStrasbourg = new google.maps.InfoWindow({
			    content: contentStringStrasbourg
			});
			var markerStrasbourg = new google.maps.Marker({
			    position: new google.maps.LatLng(48.5690922, 7.6920543),
			    map: map,
			    title: 'Strasbourg'
			});
			markerStrasbourg.addListener('click', function() {
			    infowindowStrasbourg.open(map, markerStrasbourg);
			});

			var infowindowNantes = new google.maps.InfoWindow({
			    content: contentStringNantes
			});
			var markerNantes = new google.maps.Marker({
			    position: new google.maps.LatLng(47.2383171, -1.6309323),
			    map: map,
			    title: 'Nantes'
			});
			markerNantes.addListener('click', function() {
			    infowindowNantes.open(map, markerNantes);
			});

			var infowindowLyon = new google.maps.InfoWindow({
			    content: contentStringLyon
			});
			var markerLyon = new google.maps.Marker({
			    position: new google.maps.LatLng(45.7580538, 4.764909),
			    map: map,
			    title: 'Lyon'
			});
			markerLyon.addListener('click', function() {
			    infowindowLyon.open(map, markerLyon);
			});

			var infowindowBordeaux = new google.maps.InfoWindow({
			    content: contentStringBordeaux
			});
			var markerBordeaux = new google.maps.Marker({
			    position: new google.maps.LatLng(44.8638281, -0.6563531),
			    map: map,
			    title: 'Bordeaux'
			});
			markerBordeaux.addListener('click', function() {
			    infowindowBordeaux.open(map, markerBordeaux);
			});

			var infowindowToulouse = new google.maps.InfoWindow({
			    content: contentStringToulouse
			});
			var markerToulouse = new google.maps.Marker({
			    position: new google.maps.LatLng(43.6008028, 1.3626288),
			    map: map,
			    title: 'Toulouse'
			});
			markerToulouse.addListener('click', function() {
			    infowindowToulouse.open(map, markerToulouse);
			});

			var infowindowNice = new google.maps.InfoWindow({
			    content: contentStringNice
			});
			var markerNice = new google.maps.Marker({
			    position: new google.maps.LatLng(43.7031654, 7.1827222),
			    map: map,
			    title: 'Nice'
			});
			markerNice.addListener('click', function() {
			    infowindowNice.open(map, markerNice);
			});

			var infowindowAjaccio = new google.maps.InfoWindow({
			    content: contentStringAjaccio
			});
			var markerAjaccio = new google.maps.Marker({
			    position: new google.maps.LatLng(41.9228327, 8.6356287),
			    map: map,
			    title: 'Ajaccio'
			});
			markerAjaccio.addListener('click', function() {
			    infowindowAjaccio.open(map, markerAjaccio);
			});


			var world_geometry = new google.maps.FusionTablesLayer({
			  query: {
			    select: 'geometry',
			    from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
			    where: "ISO_2DIGIT IN ('FR')"
			    /*where: "ISO_2DIGIT IN ('GB','IT','ES','DE', 'BE', 'LU', 'SI', 'CH', 'HR', 'CZ', 'AT', 'NL', 'PT')"*/
			  },
			  map: map,
			  suppressInfoWindows: true
			});
}