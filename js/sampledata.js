(function(){

	var templateHtml = $('#template').html();
	var templateFactory = _.template(templateHtml);
	var characters = [
		{
			"firstname": "Noele",
			"lastname" : "Illien",
			"job" : "Chef",
			"countryoforigin" : "Switzerland",
			"gender" : "Female"
		},
		{
			"firstname": "Jackie",
			"lastname" : "Wattles",
			"job" : "Graphic designer",
			"countryoforigin" : "USA",	
			"gender" : "Female"	
		},
		{
			"firstname": "Yiqin",
			"lastname" : "Shen",
			"job" : "Boba tea shop owner",
			"countryoforigin" : "China",
			"gender" : "Female"		
		},
		{
			"firstname": "Isabel",
			"lastname" : "Albino",
			"job" : "Swimsuit model",
			"countryoforigin" : "USA",
			"gender" : "Female"	
		},
		{
			"firstname": "Gurman",
			"lastname" : "Bhatia",
			"job" : "CTO of ProPublica",
			"countryoforigin" : "India",	
			"gender" : "Female"		
		},
		{
			"firstname": "Taryn",
			"lastname" : "Finley",
			"job" : "Talent agent",
			"countryoforigin" : "USA",
			"gender" : "Female"
		},
		{
			"firstname": "Isabelle",
			"lastname" : "Niu",
			"job" : "Pirate",
			"countryoforigin" : "China",
			"gender" : "Female"		
		},
		{
			"firstname": "Latena",
			"lastname" : "Hazard",
			"job" : "Dating coach",
			"countryoforigin" : "China",
			"gender" : "Female"		
		},
		{
			"firstname": "MJ",
			"lastname" : "Daoud",
			"job" : "Teacher",
			"countryoforigin" : "Lebanon",
			"gender" : "Female",		
		},
		{
			"firstname": "Euna",
			"lastname" : "Park",
			"job" : "Museum curator",
			"countryoforigin" : "USA",
			"gender" : "Female",		
		},
		{
			"firstname": "Rashmi",
			"lastname" : "Chugani",
			"job" : "Diplomat",
			"countryoforigin" : "Peru",
			"gender" : "Female",
		}
	];


	characters.forEach(function(student){
		console.log(student);
		$('#lines').append(templateFactory(student));
			});


}).call(this);
 