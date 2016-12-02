jQuery(function($) {

	$("document").ready(function(event){
		bootbox.prompt({
		    title: "This is a prompt with a textarea!",
		    inputType: 'textarea',
		    callback: function (result) {
		        console.log(result);
		    }
		});
	});

    // This will let you use the .remove() function later on
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }

    //Preloader
    var preloader = $('.preloader');
    $(window).load(function() {
        preloader.remove();      
    });

    //#main-slider
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height', slideHeight);

    $(window).resize(function() {
        'use strict',
        $('#home-slider .item').css('height', slideHeight);
    });

    //Scroll Menu
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > slideHeight) {
            $('.main-nav').addClass('navbar-fixed-top');
        } else {
            $('.main-nav').removeClass('navbar-fixed-top');
        }
    });

    // Navigation Scroll
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

    // User define function
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function() {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })
    };

    $('#tohash').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

    //Initiat WOW JS
    new WOW().init();
    //smoothScroll
    smoothScroll.init();

    // Progress Bar
    $('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function() {
                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
            });
            $(this).unbind('inview');
        }
    });

    //Countdown
    $('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });

    // Portfolio Single View
    $('#portfolio').on('click', '.folio-read-more', function(event) {
        event.preventDefault();
        var link = $(this).data('single_url');
        var full_url = '#portfolio-single-wrap',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_top = $("#" + trgt).offset().top;

        $('html, body').animate({
            scrollTop: target_top
        }, 600);
        $('#portfolio-single').slideUp(500, function() {
            $(this).load(link, function() {
                $(this).slideDown(500);
            });
        });
    });

    // Close Portfolio Single View
    $('#portfolio-single-wrap').on('click', '.close-folio-item', function(event) {
        event.preventDefault();
        var full_url = '#portfolio',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_offset = $("#" + trgt).offset(),
            target_top = target_offset.top;
        $('html, body').animate({
            scrollTop: target_top
        }, 600);
        $("#portfolio-single").slideUp(500);
    });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function() {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        });
    });

    //Mapbox
    var stores = {
        "type": "FeatureCollection",
        "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                  4.8535159,
                  52.3704398
                ]
            },
            "properties": {
                "name": "Bar Baarsch",
                "street": "Jan Evertsenstraat 91",
                "city": "Amsterdam",
                "country": "Nederland"                
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9396585,
                    52.3649174
                ]
            },
            "properties": {
                "name": "Bar Joost",
                "street": "Molukkenstraat 33",
                "city": "Amsterdam",
                "country": "Nederland"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.7585309,
                    52.3745291
                ]
            },
            "properties": {
                "name": "Beer in a Box",
                "street": "",
                "city": "",
                "country": "Nederland"
                }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                   5.1131834,
                   52.0507802
                ]
            },
            "properties": {
                "name": "Bert's Bierhuis",
                "street": "Ravenswaarde 88",
                "city": "Nieuwegein",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9242658,
                    52.3623258
                ]
            },
            "properties": {
                "name": "Biertuin",
                "street": "Linnaeusstraat 29",
                "city": "Amsterdam",
                "country": "Nederland"
            }
            }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8996313,
                    52.3753028
                ]
            },
            "properties": {
                "name": "Bierwinkel De Prael",
                "street": "Oudezijds Voorburgwal 30",
                "city": "Amsterdam",
                "country": "Nederland"
                            }
            }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.4940644,
                    52.1571361
                ]
            },
            "properties": {
                "name": "Bierwinkel Leiden",
                "street": "Hartesteeg 9",
                "city": "Leiden",
                "country": "Nederland"
            }
            }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8769303,
                    52.379858
                ]
            },
            "properties": {
                "name": "Café Broer",
                "street": "Frederik Hendrikplantsoen 36",
                "city": "Amsterdam",
                "country": "Nederland"
            }
            }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8876399,
                    52.352159
                ]
            },
            "properties": {
                "name": "Café Cees",
                "street": "Ceintuurbaan 206",
                "city": "Amsterdam",
                "country": "Nederland"

            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9102654,
                    52.3594984
                ]
            },
            "properties": {
                "name": "Café Fest",
                "street": "Wibauthof 1",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                   4.887355,
                   52.380738
                ]
            },
            "properties": {
                "name": "Café Thijssen",
                "street": "Brouwersgracht 107",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                   4.9984494,
                   52.8076424
                ]
            },
            "properties": {
                "name": "De Bierboetiek",
                "street": "Professor Ter Veenweg 11",
                "city": "Middenmeer",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8898324,
                    52.372283
                ]
            },
            "properties": {
                "name": "De Bierkoning",
                "street": "Paleisstraat 125",
                "city": "Amsterdam",
                "country": "Nederland"
                     }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                   4.895074,
                   52.3515368
                ]
            },
            "properties": {
                "name": "De Bicker",
                "street": "Van der Helstplein 15",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.7782055,
                    52.3388401
                ]
            },
            "properties": {
                "name": "Dennis Delicious",
                "street": "Lorentzplein 37-38",
                "city": "Badhoevedorp",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.0833304,
                    52.1264366,
                ]
            },
            "properties": {
                "name": "Nectar",
                "street": "Mississippidreef 5-7",
                "city": "Utrecht",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.6977056,
                    52.3008391,
                ]
            },
            "properties": {
                "name": "Duycker Café",
                "street": "Raadhuisplein 5",
                "city": "Hoofddorp",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9317395,
                    52.3531647,
                ]
            },
            "properties": {
                "name": "Elsa's Café",
                "street": "Middenweg 73",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9354435,
                    52.3685885
                ]
            },
            "properties": {
                "name": "Gare de L'est",
                "street": "Cruquiusweg 9",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8894064,
                    52.3513048,
                ]
            },
            "properties": {
                "name": "Lokaal de Pijp",
                "street": "Dusartstraat 51",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.6951147,
                    52.301661
                ]
            },
            "properties": {
                "name": "Plein 14",
                "street": "Raadhuisplein 14a",
                "city": "Hoofddorp",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9089979,
                    52.3570983
                ]
            },
            "properties": {
                "name": "Ruyschkamer",
                "street": "Ruyschstraat 34-H",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8551573,
                    52.3546265
                ]
            },
            "properties": {
                "name": "Schinkelhaven",
                "street": "Amstelveenseweg 126",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8297735,
                    52.4396017,
                ]
            },
            "properties": {
                "name": "Slijterij Vonk",
                "street": "Tuiniersstraat 8",
                "city": "Zaandam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8738323,
                    52.3716011,
                ]
            },
            "properties": {
                "name": "Sterk Amsterdam",
                "street": "De Clercqstraat 7",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.8558696,
                    52.3642195
                ]
            },
            "properties": {
                "name": "Tabak's notenbar Postjesweg",
                "street": "Postjesweg 63",
                "city": "Amsterdam",
                "country": "Nederland"
            }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.9059409,
                    52.3436343
                ]
            },
            "properties": {
                "name": "Tabak's notenbar Rijnstraat",
                "street": "Rijnstraat 132",
                "city": "Amsterdam",
                "country": "Nederland"
                        }}, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                   4.8946927,
                   52.3452299
                ]
            },
            "properties": {
                "name": "Tap Zuid",
                "street": "Maasstraat 70",
                "city": "Amsterdam",
                "country": "Nederland"
            }

        }]
    };

    $('#search').keyup(function() {
	    var result = [];
	    for (var i = 0; i < stores.features.length; i++) {
	    	var name = stores.features[i].properties.name;
	    	name = name.toLowerCase();

	    	var matches = name.indexOf(this.value)
	    	if (matches < 0) {	    			    		
	    		$("#listing-" + i).attr("class", "hide");
	    	} else {
	    		$("#listing-" + i).attr("class", "show");
	    	}
	    }
	});

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJvdXdlcmlqZGV0d2Vla25hYXBqZXMiLCJhIjoiY2l2ejQ4NWx1MDAxNDJ0bzF1bmluNWEydyJ9.8zQWUV5_mz04vP5FGzjhAw';
    var map = new mapboxgl.Map({
        container: 'map',
        center: [4.87995, 52.37783],
        zoom: 10,
        style: "mapbox://styles/mapbox/streets-v9",
        hash: true
    });

    function flyToStore(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        // Check if there is already a popup on the map and if so, remove it
        if (popUps[0]) popUps[0].remove();

        var popup = new mapboxgl.Popup({
                closeOnClick: false
            })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>' + currentFeature.properties.name + ' </h3>' +
                '<h4>' + currentFeature.properties.street + '</h4>')
            .addTo(map);
    }

    map.on('load', function(e) {
        // Add the stores data as a source
        map.addSource('places', {
            type: 'geojson',
            data: stores
        });

        // Add a layer to the map with styling rules to render the source
        map.addLayer({
            id: 'locations',
            type: 'symbol',
            source: 'places',
            layout: {
                'icon-image': 'beer-15',
                'icon-allow-overlap': true
            }
        });
    });

    // Add an event listener for when a user clicks on the map
    map.on('click', function(e) {
        // Query all the rendered points in the view
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['locations']
        });
        if (features.length) {
            var clickedPoint = features[0];
            // 1. Fly to the point
            flyToStore(clickedPoint);
            // 2. Close all other popups and display popup for clicked store
            createPopUp(clickedPoint);
            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
            var selectedFeature = clickedPoint.properties.street;

            for (var i = 0; i < stores.features.length; i++) {
                if (stores.features[i].properties.street === selectedFeature) {
                    selectedFeatureIndex = i;
                }
            }
            // Select the correct list item using the found index and add the active class
            var listing = document.getElementById('listing-' + selectedFeatureIndex);
            listing.classList.add('active');
        }
        return false;
    });

    function linkClick(currentFeature) {
    	console.log(currentFeature);
	    // 1. Fly to the point associated with the clicked link
	    flyToStore(currentFeature);
	    // 2. Close all other popups and display popup for clicked store
	    createPopUp(currentFeature);
    }

    $('#listings').ready(function(e) {
        // Iterate through the list of stores
        for (i = 0; i < stores.features.length; i++) {
            var currentFeature = stores.features[i];
            // Shorten stores.feature.properties to just `prop` so we're not
            // writing this long form over and over again.
            var prop = currentFeature.properties;
            // Select the listing container in the HTML and append a div
            // with the class 'item' for each store
            var listings = document.getElementById("listings");
            var listing = listings.appendChild(document.createElement("div"));
            listing.className = 'item ' + prop.show;
            listing.id = "listing-" + i;

            // Create a new link with the class 'title' for each store
            // and fill it with the store address
            var link = listing.appendChild(document.createElement("a"));
            link.id = "store-" + i;
            link.href = "javascript:void(0)";
            link.className = "title";
            link.dataPosition = i;
            link.innerHTML = prop.name;

            // Add an event listener for the links in the sidebar listing
            link.addEventListener('click', function(event) {            	
            	linkClick(stores.features[this.dataPosition]);
            	event.preventDefault();
            	return false;
            }, false);

            // Create a new div with the class 'details' for each store
            // and fill it with the city and phone number
            var details = listing.appendChild(document.createElement("div"));
            details.innerHTML = prop.street;
            if (prop.city) {
                details.innerHTML += ' &middot; ' + prop.city;
            }
        }
    });
});