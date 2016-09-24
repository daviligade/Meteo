app.controller('mapController', 
        function($scope, $http, NgMap, GOOGLE_URL_WITH_KEY) {
            $scope.markers = [];
            $scope.homeCity = [];
            $http.get("http://api.openweathermap.org/data/2.5/group?id=2988507,2973783,2990969,2996944,3031582,2972315,6454924,6452235&units=metric&APPID=367bbe27a5275930a89f567226a31ee0").success(function(data) {
			    $scope.markers = data;
			});

			$scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvEz5fRsabeSrRmS3WG2eOgxXqU6sq8W4";
			$scope.homeCityInserted;
			$scope.verifyCity = function(city) {
				$scope.homeCityIsValid = false;
				$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=367bbe27a5275930a89f567226a31ee0").success(function(data) {
			    	if (data.name == city) {
			    		$scope.homeCity = data;
			    		$scope.homeCityIsValid = true;
			    	} else {
			    		$scope.homeCityIsValid = false;
			    	}  	
				});
			};

			NgMap.getMap().then(function(map) {
				$scope.map = map;
				console.log(map.getCenter());
				console.log('markers', map.markers);
				console.log('shapes', map.shapes);
			});
			$scope.cities = [
			    {id: 1, name: 'Paris', pos:[2.35, 48.85], content:
			    'Paris,  is the capital and the most populous city ' +
				'of France. It has an area of 105 km² (41 mi²) and a ' +
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
				'Attribution: https://en.wikipedia.org/wiki/Paris' +
				'(last visited September 23, 2016).'},
			    {id: 2, name: 'Strasbourg', pos:[7.74, 48.58], content:
			    'Strasbourg is the capital and largest city of the Grand Est ' +
			    'region of France and is the official seat of the European ' +
			    'Parliament. Located close to the border with Germany, it is the ' +
			    'capital of the Bas-Rhin département. In 2013, the city proper had ' +
			    '275,718 inhabitants, the Eurométropole de Strasbourg (Greater Strasbourg) ' +
			    'had 475,934 inhabitants, the Arrondissement of Strasbourg had 482,384 ' +
			    'inhabitants and Strasbourg\'s metropolitan area had a population ' +
			    'of 773,347 (not counting the section across the border in Germany), ' +
			    'making it the ninth largest metro area in France and home to 13% of ' +
			    'the Grand Est region\'s inhabitants. The transnational Eurodistrict ' +
			    'Strasbourg-Ortenau had a population of 915,000 inhabitants in 2014'},
			    {id: 3, name: 'Nantes', pos:[-1.55, 47.22], content:
			    'Nantes is the capital city of the Pays de la Loire region and the ' +
			    'Loire-Atlantique département, and it is the largest city in traditional ' +
			    'Brittany and in the whole Grand-Ouest (northwestern France). Together with ' +
			    'Vannes, Rennes and Carhaix, it was one of the major cities of the historic ' +
			    'province of Brittany and the ancient Duchy of Brittany. Nantes is still ' +
			    'widely regarded as its capital city'},
			    {id: 4, name: 'Lyon', pos:[4.85, 45.75], content:
			    'Lyon or Lyons is a city in east-central France, in the Auvergne-Rhône-Alpes ' +
			    'region, about 470 km (292 mi) from Paris and 320 km (199 mi) from Marseille. ' +
			    'Inhabitants of the city are called Lyonnais. Lyon had a population of 500,715 ' +
			    'in 2013 and is France\'s third-largest city after Paris and Marseille. Lyon is ' +
			    'the capital of the department of Rhône and the region of Auvergne-Rhône-Alpes. ' +
			    'The metropolitan area of Lyon had a population of 2,237,676 in 2013, the ' +
			    'second-largest in France after Paris.'},
			    {id: 5, name: 'Bordeaux', pos:[-0.58, 44.84], content:
			    'Bordeaux is a port city on the Garonne River in the Gironde department in ' +
			    'southwestern France. The municipality (commune) of Bordeaux proper has a ' +
			    'population of 243,626 (2012). Together with its suburbs and satellite towns ' +
			    'Bordeaux is the centre of the Bordeaux Métropole, which with 749,595 inhabitants ' +
			    '(as of 2013) and 1,178,335 in the Metropolitan Area, the sixth largest in France. ' +
			    'It is the capital of the Aquitaine-Limousin-Poitou-Charentes region, as well as the ' +
			    'prefecture of the Gironde department. Its inhabitants are called "Bordelais" (for ' +
			    'men) or "Bordelaises" (women). The term "Bordelais" may also refer to the city and ' +
			    'its surrounding region.'},
			    {id: 6, name: 'Toulouse', pos:[1.44, 43.6], content:
			    'Toulouse is the capital city of the southwestern French department of Haute-Garonne, ' +
			    'as well as of the Occitanie region. It lies on the banks of the River Garonne, 150 ' +
			    'kilometres (93 miles) from the Mediterranean Sea, 230 km (143 mi) from the Atlantic ' +
			    'Ocean, and 680 km (420 mi) from Paris. It is the fourth-largest city in France with ' +
			    '458,298 inhabitants in 2013 January. Moreover, with 1,291,517 inhabitants at the ' +
			    'January 2013 census, the Toulouse metropolitan area is also the fourth-largest in ' +
			    'France, after Paris (12.3 million), Lyon (2.2 million) and Marseille (1.7 million).'},
			    {id: 7, name: 'Nice', pos:[7.25, 43.7], content:
			    'Nice is the fifth most populous city in France and the capital of the Alpes-Maritimes ' +
			    'département. The urban area of Nice extends beyond the administrative city limits, ' +
			    'with a population of about 1 million[1][2] on an area of 721 km2 (278 sq mi). Located ' +
			    'in the Côte d\'Azur area on the south east coast of France on the Mediterranean Sea, ' +
			    'Nice is the second-largest French city on the Mediterranean coast and the second-largest ' +
			    'city in the Provence-Alpes-Côte d\'Azur region after Marseille. Nice is about 13 ' +
			    'kilometres (8 miles) from the principality of Monaco, and its airport is a gateway to the ' +
			    'principality as well.'},
			    {id: 8, name: 'Ajaccio', pos:[8.73, 41.92], content:
			    'Ajaccio  is a French commune, prefecture of the department of Corse-du-Sud, and head ' +
			    'office of the Collectivité territoriale de Corse (capital city of Corsica). It ' +
			    'is also the largest settlement on the island. Ajaccio is located on the west coast ' +
			    'of the island of Corsica, 210 nautical miles (390 km) southeast of Marseille.'}
			  ];
			  $scope.showCity = function(event, city) {
			    $scope.selectedCity = city;
			    $scope.map.showInfoWindow('myInfoWindow', this);
			    $scope.streamTwitter = "<a class='twitter-timeline' href='https://twitter.com/search?q=%23m%C3%A9t%C3%A9o%20%23" + $scope.selectedCity.name + "' data-widget-id='779702440807501824'><h2>Tweet with<br />#météo et #" + $scope.selectedCity.name + "</h2></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>";
			  };
    	}
);