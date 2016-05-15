jQuery(document).ready(function($) {

    "use strict";



    //Sticky Navigation

    if ($('#header').length) {

        $(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('#header').offset().top;
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('#header').addClass('cp_sticky');
			    } else {
			        $('#header').removeClass('cp_sticky'); 
			    }
			};
			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});

    }



    //Home Testimonials Slider

    if ($('#home-testimonials-slider').length) {

        $('#home-testimonials-slider').bxSlider({

            auto: true,

            infiniteLoop: true,

            hideControlOnEnd: true

        });

    }

	 //Post Slider

    if ($('#post-slider').length) {

        $('#post-slider').bxSlider({

            auto: true,

            infiniteLoop: true,

            hideControlOnEnd: true

        });

    }

	

	//Audio

	if ($('audio').length) {

	 $('audio').audioPlayer();

	}

	

	 //Tweets Slider

    if ($('#tweets-slider').length) {

        $('#tweets-slider').bxSlider({

            auto: true,

			mode: 'fade',

            infiniteLoop: true,

            hideControlOnEnd: true

        });

    }

	

	//Contact Map 1

    if ($('#map_contact_2').length) {

        var map;

        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);

        //Initialize MAP

        var myOptions = {

            zoom: 12,

            center: myLatLng,

            //disableDefaultUI: true,

            zoomControl: true,

            mapTypeId: google.maps.MapTypeId.ROADMAP,

            mapTypeControl: false,

            styles: [{

                saturation: -100,

                lightness: 10



            }],

        }

        map = new google.maps.Map(document.getElementById('map_contact_2'), myOptions);

        //End Initialize MAP

        //Set Marker

        var marker = new google.maps.Marker({

            position: map.getCenter(),

            map: map,

            icon: 'images/map-icon.png'

        });

        marker.getPosition();

        //End marker



        //Set info window

        var infowindow = new google.maps.InfoWindow({

            content: '',

            position: myLatLng

        });

        infowindow.open(map);

    }

	

	 //Location Slider

    if ($('#location-slider').length) {

        $('#location-slider').bxSlider({

            auto: true,

			mode: 'fade',

            infiniteLoop: true,

            hideControlOnEnd: true

        });

    }



});