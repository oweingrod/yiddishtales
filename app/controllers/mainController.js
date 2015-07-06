angular.module('mainController', ['ngRoute'])


.controller('mainController', function($location, $scope){


	var url = $location.$$path;

	url = url.split('/');

	console.log(url[1]);

	
	var flour = {
		title: 'Flour',
		yiddish: 'Mel',
		url: '#/flour'
	};

	var relative = {
		title: 'A Relative',
		yiddish: 'A Kroyve',
		url: '#/a-relative'
	};

	var aunt_hadas = {
		title: 'Aunt Hadas',
		yiddish: 'Di Mume Hadas',
		url: '#/aunt-hadas'
	};

	var foyleh = {
		title: 'Blind Foyleh',
		yiddish: 'Der Blinder Foyleh',
		url: '#/blind-foyleh'
	};

	var streets_of_warsaw = {
		title: 'From the Streets of Warsaw',
		yiddish: '',
		url: '#/from-the-streets-of-warsaw'
	};

	var gentile_matters = {
		title: 'Gentile Matters', 
		yiddish: 'Goyishe Gesheftn',
		url: '#/gentile-matters'
	};

	var grandmother_from_praga = {
		title: 'Grand-mother from Praga',
		yiddish: 'Di Prager Bobeshi',
		url: '#/grandmother-from-praga'
	};

	var jewish_houses = {
		title: 'Jewish Houses',
		yiddish: 'Yiddishe Shtubn',
		url: '#/jewish-houses'
	};

	var long_ago = {
		title: 'Long Ago',
		yiddish: 'Amol',
		url: '#/long-ago'
	};

	var man_and_wife = {
		title: 'Man and Wife',
		yiddish: 'Man un Vayb',
		url: '#/man-and-wife'
	};

	var new_furniture = {
		title: 'New Furniture',
		yiddish: 'Naye Mebl',
		url: '#/new-furniture'
	};

	var old_folks_home = {
		title: 'Old Folks Home',
		yiddish: '',
		url: '#/old-folks-home'
	};

	var old_mauritz = {
		title: 'Old Mauritz',
		yiddish: 'Der Alter Mauritz',
		url: '#/old-mauritz'
	};

	var rozshke = {
		title: 'Rozshke',
		yiddish: 'Rozshkes',
		url: '#/rozshke'
	};

	var the_bath_house = {
		title: 'The Bath House',
		yiddish: 'Di Bod',
		url: '#/the-bath-house'
	};

	var the_gentile_girl = {
		title: 'The Gentile Girl',
		yiddish: 'Der Shikse',
		url: '#/the-gentile-girl'
	};

	var the_shtroisfeder_family = {
		title: 'The Shtroisfeder Family',
		yiddish: 'Di Shtroisfeders',
		url: '#/the-shtroisfeder-family'
	};

	var the_wise_one = {
		title: 'The Wise One',
		yiddish: 'Der Khochem',
		url: '#/the-wise-one'
	};

	var very_personal_regards = {
		title: 'Very Personal Regards',
		yiddish: 'A Lebediker Grus',
		url: '#/very-personal-regards'
	};

	var were_not_leaving_yet = {
		title: "We're Not Leaving Yet",
		yiddish: 'Men Fort Nisht',
		url: '#/were-not-leaving-yet'
	};

	$scope.stories = [flour,
					  relative,
					  aunt_hadas,
					  foyleh,
					  streets_of_warsaw,
					  gentile_matters,
					  grandmother_from_praga,
					  jewish_houses,
					  long_ago,
					  man_and_wife,
					  new_furniture,
					  old_folks_home,
					  old_mauritz,
					  rozshke,
					  the_bath_house,
					  the_gentile_girl,
					  the_shtroisfeder_family,
					  the_wise_one,
					  very_personal_regards,
					  were_not_leaving_yet];


    if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
	}

	if (url[1] === "a-relative"){
		
		$scope.title = relative.title;
		$scope.yiddish = relative.yiddish;
		console.log('hi');
	}

	if (url[1] === "aunt-hadas"){
		$scope.title = aunt_hadas.title;
		$scope.yiddish = aunt_hadas.yiddish;
		console.log('hi');
	}

	if (url[1] === "blind-foyleh"){
		$scope.title = foyleh.title;
		$scope.yiddish = foyleh.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}

	if (url[1] === "flour"){
		$scope.title = flour.title;
		$scope.yiddish = flour.yiddish;
		console.log('hi');
	}


	
$(document).ready(function() {
  var progressBar = $('progress');
  var max, value;

  //set a timeout of 300ms because you can't read the correct height until angular renders
  setTimeout(function() {
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    max = docHeight - winHeight;
    $('progress').attr('max', max);

  }, 300);



  /* Set the max scrollable area */
  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     $('progress').attr('value', value);
     console.log("value " + value);
     console.log("max " + max);
     if (progressBar.attr('value') === value)
      console.log("we're in the clear");
     else 
      console.log('hmm');

  });

  if ( url[1] === "" )
  {
  	$('#nav_stories').click(function() 
  	{
  		$('#cover').fadeTo(200, 0.5);

  		console.log( $('#nav_list').height() );

  		$('.description').css( "margin-top", "1475px");
  	});
  }




	});
});