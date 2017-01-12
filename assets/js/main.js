/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    "use strict";

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0 &&
            $header.hasClass('alt')) {

            $window.on('resize', function() {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: function() {
                    $header.removeClass('alt');
                },
                enter: function() {
                    $header.addClass('alt');
                },
                leave: function() {
                    $header.removeClass('alt');
                }
            });

        }

        // Menu.
        var $menu = $('#menu');

        $menu._locked = false;

        $menu._lock = function() {

            if ($menu._locked)
                return false;

            $menu._locked = true;

            window.setTimeout(function() {
                $menu._locked = false;
            }, 350);

            return true;

        };

        $menu._show = function() {

            if ($menu._lock())
                $body.addClass('is-menu-visible');

        };

        $menu._hide = function() {

            if ($menu._lock())
                $body.removeClass('is-menu-visible');

        };

        $menu._toggle = function() {

            if ($menu._lock())
                $body.toggleClass('is-menu-visible');

        };

        $menu
            .appendTo($body)
            .on('click', function(event) {

                event.stopPropagation();

                // Hide.
                $menu._hide();

            })
            .find('.inner')
            .on('click', '.close', function(event) {

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                // Hide.
                $menu._hide();

            })
            .on('click', function(event) {
                event.stopPropagation();
            })
            .on('click', 'a', function(event) {

                var href = $(this).attr('href');

                event.preventDefault();
                event.stopPropagation();

                // Hide.
                $menu._hide();

                // Redirect.
                window.setTimeout(function() {
                    window.location.href = href;
                }, 350);

            });

        $body.on('click', 'a[href="#menu"]', function(event) {
            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

        }).on('keydown', function(event) {
            // Hide on escape.
            if (event.keyCode == 27)
                $menu._hide();
        });

        //Mapbox
        var stores = {
            "type": "FeatureCollection",
            "features": [{
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
                        5.2998611,
                        52.1715211,
                    ]
                },
                "properties": {
                    "name": "Beer in a Box",
                    "street": "beerinabox.nl",
                    "city": "",
                    "country": "Nederland"
                }
                }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        5.2998611,
                        52.1715211,
                    ]
                },
                "properties": {
                    "name": "Beerscout",
                    "street": "beerscout.nl",
                    "city": "",
                    "country": "Nederland"
                }
            }, {
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
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        5.2183485,
                        52.3681438
                    ]
                },
                 "properties": {
                    "name": "Bier en Plezier",
                    "street": "Schippergarage 13",
                    "city": "Almere",
                    "country": "Nederland"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.9242347,
                        52.3623118,                    
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

                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        5.2174543,
                        52.3702214,
                    ]
                },
                "properties": {
                    "name": "G'Vine",
                    "street": "Belfort 130,",
                    "city": "Almere",
                    "country": "Nederland"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        5.6098718,
                        51.452934,
                    ]
                },
                "properties": {
                    "name": "Het Biermoment",
                    "street": "Schorfhoeve 4",
                    "city": "Helmond",
                    "country": "Nederland"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.8895073,
                        52.3513004,
                    ]
                },
                "properties": {
                    "name": "Lokaal de Pijp",
                    "street": "Dusartstraat 51",
                    "city": "Amsterdam",
                    "country": "Nederland"
                }
            }, {
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
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.8892923,
                        52.3767284,
                    ]
                },
                "properties": {
                    "name": "Proeflokaal Arendsnest",
                    "street": "Herengracht 90",
                    "city": "Amsterdam",
                    "country": "Nederland"
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.3651259,
                        52.068552,
                    ]
                },
                "properties": {
                    "name": "Voorburgse Bierwinkel",
                    "street": "Wielemakersslop 8",
                    "city": "Voorburg",
                    "country": "Nederland"
                }
            }]
        };

        $('#search').on('input', function() {
            var result = [];
            for (var i = 0; i < stores.features.length; i++) {
                var name = stores.features[i].properties.name;
                name = name.toLowerCase();

                var matches = name.indexOf(this.value)
                if (matches < 0) {
                    $("#listing-" + i).hide();
                } else {
                    $("#listing-" + i).show();
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
            // 1. Fly to the point associated with the clicked link
            flyToStore(currentFeature);
            // 2. Close all other popups and display popup for clicked store
            createPopUp(currentFeature);
        }

        $('#listings').ready(function(e) {
            // Iterate through the list of stores
            for (var i = 0; i < stores.features.length; i++) {
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
})(jQuery);