angular.module('leafletMapApp', [])
  .controller('leafletMapController', function ($scope, $http) {

    // Scoped Variables
    $scope.result = '2016 Presidential Election';
    $scope.states = [
      {
        'display': 'All States',
        'value': 'usStates'
      },
      {
        'display': 'Alabama',
        'value': 'states/alabama',
        'abbreviation': 'AL',
        'electoralVotes': '9',
        'winner': 'Trump',
        'percentage': '62.9'
      },
      // {
      //   'display': 'Alaska',
      //   'value': 'states/alaska',
      //   'abbreviation': 'AK',
      //   'electoralVotes': '3',
      //   'winner': 'Trump',
      //   'percentage': '52.9'
      // },
      {
        'display': 'Arizona',
        'value': 'states/arizona',
        'abbreviation': 'AZ',
        'electoralVotes': '11',
        'winner': 'Trump',
        'percentage': '49.5'
      },
      {
        'display': 'Arkansas',
        'value': 'states/arkansas',
        'abbreviation': 'AR',
        'electoralVotes': '6',
        'winner': 'Trump',
        'percentage': '60.4'
      },
      {
        'display': 'California',
        'value': 'states/california',
        'abbreviation': 'CA',
        'electoralVotes': '55',
        'winner': 'Clinton',
        'percentage': '61.6'
      },
      {
        'display': 'Colorado',
        'value': 'states/colorado',
        'abbreviation': 'CO',
        'electoralVotes': '9',
        'winner': 'Clinton',
        'percentage': '47.2'
      },
      {
        'display': 'Connecticut',
        'value': 'states/connecticut',
        'abbreviation': 'CT',
        'electoralVotes': '7',
        'winner': 'Clinton',
        'percentage': '54.5'
      },
      {
        'display': 'Delaware',
        'value': 'states/delaware',
        'abbreviation': 'DE',
        'electoralVotes': '3',
        'winner': 'Clinton',
        'percentage': '53.4'
      },
      {
        'display': 'Florida',
        'value': 'states/florida',
        'abbreviation': 'FL',
        'electoralVotes': '29',
        'winner': 'Trump',
        'percentage': '49.1'
      },
      {
        'display': 'Georgia',
        'value': 'states/georgia',
        'abbreviation': 'GA',
        'electoralVotes': '16',
        'winner': 'Trump',
        'percentage': '51.3'
      },
      {
        'display': 'Hawaii',
        'value': 'states/hawaii',
        'abbreviation': 'HI',
        'electoralVotes': '4',
        'winner': 'Clinton',
        'percentage': '62.3'
      },
      {
        'display': 'Idaho',
        'value': 'states/idaho',
        'abbreviation': 'ID',
        'electoralVotes': '4',
        'winner': 'Trump',
        'percentage': '59.2'
      },
      {
        'display': 'Illinois',
        'value': 'states/illinois',
        'abbreviation': 'IL',
        'electoralVotes': '20',
        'winner': 'Clinton',
        'percentage': '55.4'
      },
      {
        'display': 'Indiana',
        'value': 'states/indiana',
        'abbreviation': 'IN',
        'electoralVotes': '11',
        'winner': 'Trump',
        'percentage': '57.2'
      },
      {
        'display': 'Iowa',
        'value': 'states/iowa',
        'abbreviation': 'IA',
        'electoralVotes': '6',
        'winner': 'Trump',
        'percentage': '51.8'
      },
      {
        'display': 'Kansas',
        'value': 'states/kansas',
        'abbreviation': 'KS',
        'electoralVotes': '6',
        'winner': 'Trump',
        'percentage': '57.2'
      },
      {
        'display': 'Kentucky',
        'value': 'states/kentucky',
        'abbreviation': 'KY',
        'electoralVotes': '8',
        'winner': 'Trump',
        'percentage': '62.5'
      },
      {
        'display': 'Louisiana',
        'value': 'states/louisiana',
        'abbreviation': 'LA',
        'electoralVotes': '8',
        'winner': 'Trump',
        'percentage': '58.1'
      },
      {
        'display': 'Maine',
        'value': 'states/maine',
        'abbreviation': 'ME',
        'electoralVotes': '3',
        'winner': 'Clinton',
        'percentage': '47.9'
      },
      {
        'display': 'Maryland',
        'value': 'states/maryland',
        'abbreviation': 'MD',
        'electoralVotes': '10',
        'winner': 'Clinton',
        'percentage': '60.5'
      },
      {
        'display': 'Massachusetts',
        'value': 'states/massachusetts',
        'abbreviation': 'MA',
        'electoralVotes': '11',
        'winner': 'Clinton',
        'percentage': '60.8'
      },
      {
        'display': 'Michigan',
        'value': 'states/michigan',
        'abbreviation': 'MI',
        'electoralVotes': '16',
        'winner': 'Trump',
        'percentage': '47.6'
      },
      {
        'display': 'Minnesota',
        'value': 'states/minnesota',
        'abbreviation': 'MN',
        'electoralVotes': '10',
        'winner': 'Clinton',
        'percentage': '46.9'
      },
      {
        'display': 'Mississippi',
        'value': 'states/mississippi',
        'abbreviation': 'MS',
        'electoralVotes': '6',
        'winner': 'Trump',
        'percentage': '58.3'
      },
      {
        'display': 'Missouri',
        'value': 'states/missouri',
        'abbreviation': 'MO',
        'electoralVotes': '10',
        'winner': 'Trump',
        'percentage': '57.1'
      },
      {
        'display': 'Montana',
        'value': 'states/montana',
        'abbreviation': 'MT',
        'electoralVotes': '3',
        'winner': 'Trump',
        'percentage': '56.5'
      },
      {
        'display': 'Nebraska',
        'value': 'states/nebraska',
        'abbreviation': 'NE',
        'electoralVotes': '5',
        'winner': 'Trump',
        'percentage': '60.3'
      },
      {
        'display': 'Nevada',
        'value': 'states/nevada',
        'abbreviation': 'NV',
        'electoralVotes': '6',
        'winner': 'Clinton',
        'percentage': '47.9'
      },
      {
        'display': 'New Hampshire',
        'value': 'states/newHampshire',
        'abbreviation': 'NH',
        'electoralVotes': '4',
        'winner': 'Clinton',
        'percentage': '47.6'
      },
      {
        'display': 'New Jersey',
        'value': 'states/newJersey',
        'abbreviation': 'NJ',
        'electoralVotes': '14',
        'winner': 'Clinton',
        'percentage': '55.0'
      },
      {
        'display': 'New Mexico',
        'value': 'states/newMexico',
        'abbreviation': 'NM',
        'electoralVotes': '5',
        'winner': 'Clinton',
        'percentage': '48.3'
      },
      {
        'display': 'New York',
        'value': 'states/newYork',
        'abbreviation': 'NY',
        'electoralVotes': '29',
        'winner': 'Clinton',
        'percentage': '58.8'
      },
      {
        'display': 'North Carolina',
        'value': 'states/northCarolina',
        'abbreviation': 'NC',
        'electoralVotes': '15',
        'winner': 'Trump',
        'percentage': '50.5'
      },
      {
        'display': 'North Dakota',
        'value': 'states/northDakota',
        'abbreviation': 'ND',
        'electoralVotes': '3',
        'winner': 'Trump',
        'percentage': '64.1'
      },
      {
        'display': 'Ohio',
        'value': 'states/ohio',
        'abbreviation': 'OH',
        'electoralVotes': '18',
        'winner': 'Trump',
        'percentage': '52.1'
      },
      {
        'display': 'Oklahoma',
        'value': 'states/oklahoma',
        'abbreviation': 'OK',
        'electoralVotes': '7',
        'winner': 'Trump',
        'percentage': '65.3'
      },
      {
        'display': 'Oregon',
        'value': 'states/oregon',
        'abbreviation': 'OR',
        'electoralVotes': '7',
        'winner': 'Clinton',
        'percentage': '51.7'
      },
      {
        'display': 'Pennsylvania',
        'value': 'states/pennsylvania',
        'abbreviation': 'PA',
        'electoralVotes': '20',
        'winner': 'Trump',
        'percentage': '48.8'
      },
      // {
      //   'display': 'Puerto Rico',
      //   'value': 'states/puertoRico',
      //   'abbreviation': 'PR'
      // },
      {
        'display': 'Rhode Island',
        'value': 'states/rhodeIsland',
        'abbreviation': 'RI',
        'electoralVotes': '4',
        'winner': 'Clinton',
        'percentage': '55.4'
      },
      {
        'display': 'South Carolina',
        'value': 'states/southCarolina',
        'abbreviation': 'SC',
        'electoralVotes': '9',
        'winner': 'Trump',
        'percentage': '54.9'
      },
      {
        'display': 'South Dakota',
        'value': 'states/southDakota',
        'abbreviation': 'SD',
        'electoralVotes': '3',
        'winner': 'Trump',
        'percentage': '61.5'
      },
      {
        'display': 'Tennessee',
        'value': 'states/tennessee',
        'abbreviation': 'TN',
        'electoralVotes': '11',
        'winner': 'Trump',
        'percentage': '61.1'
      },
      {
        'display': 'Texas',
        'value': 'states/texas',
        'abbreviation': 'TX',
        'electoralVotes': '38',
        'winner': 'Trump',
        'percentage': '52.6'
      },
      {
        'display': 'Utah',
        'value': 'states/utah',
        'abbreviation': 'UT',
        'electoralVotes': '6',
        'winner': 'Trump',
        'percentage': '45.9'
      },
      {
        'display': 'Vermont',
        'value': 'states/vermont',
        'abbreviation': 'VT',
        'electoralVotes': '3',
        'winner': 'Clinton',
        'percentage': '61.1'
      },
      {
        'display': 'Virginia',
        'value': 'states/virginia',
        'abbreviation': 'VA',
        'electoralVotes': '13',
        'winner': 'Clinton',
        'percentage': '49.9'
      },
      {
        'display': 'Washington',
        'value': 'states/washington',
        'abbreviation': 'WA',
        'electoralVotes': '12',
        'winner': 'Clinton',
        'percentage': '54.4'
      },
      {
        'display': 'West Virginia',
        'value': 'states/westVirginia',
        'abbreviation': 'WV',
        'electoralVotes': '5',
        'winner': 'Trump',
        'percentage': '68.7'
      },
      {
        'display': 'Wisconsin',
        'value': 'states/wisconsin',
        'abbreviation': 'WI',
        'electoralVotes': '10',
        'winner': 'Trump',
        'percentage': '47.9'
      },
      {
        'display': 'Wyoming',
        'value': 'states/wyoming',
        'abbreviation': 'WY',
        'electoralVotes': '3',
        'winner': 'Trump',
        'percentage': '70.1'
      }
    ];

    // Functions
    $scope.updateState = function() {
      getGeoJson();
    };
    $scope.startProductTour = startProductTour;

    // Global Variables
    var leafletMap,
      heatGradient;

     /**
     * @name initialize
     * @desc creates the visualization on the chart div
     * @returns {void}
     */
     function initialize() {
       checkForFirstTimeUse();
       configureMap();
     }

    /**
    * @name checkForFirstTimeUse
    * @desc start the tour if this is the users first time
    * @return {void}
    */
    function checkForFirstTimeUse() {
      var productTour = window.localStorage.getItem('ProductTour');

      if (productTour === null) {
        setTimeout(function () {
          window.localStorage.setItem('ProductTour', true);
          startProductTour();
        }, 0);
      }
    }
    
    /**
    * @name startProductTour
    * @desc begin product tour using driver.js
    * @return {void}
    */
    function startProductTour() {
      var driver = new Driver(),
        steps;

      steps = [
        {
          element: '#product-tour-results',
          popover: {
            title: 'Welcome!',
            description: 'Explore the results of the 2016 Presidential Election! Click on a state to drill down to county-level.'
          }
        }
//         {
//           element: '#product-tour-states-controls',
//           popover: {
//             title: 'Select a State',
//             description: 'Drill down to county-level results by selecting a state here or clicking on a state!'
//           }
//         }
      ];

      driver.defineSteps(steps);
      driver.start();
    }

    /**
    * @name configureMap
    * @desc initialize and configure Leaflet map
    * @returns {void}
    */
    function configureMap() {
      var optionsObj,
        baseMaps,
        satellite,
        streets,
        mapboxAccessToken = 'pk.eyJ1IjoiY3N0cmVldCIsImEiOiJjaXkxc3JlYTcwMGRtMnFwaWNpMGFpeG9jIn0.E6AfqMcvQBO_-G9eDRHZdw',
        mapboxAttribution = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, &copy; <a href="http://mapbox.com">Mapbox</a>';

      satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="http://www.esri.com/">Esri</a>'
      });

      streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        id: 'mapbox.streets',
        attribution: mapboxAttribution
      });

      baseMaps = {
        'Satellite': satellite,
        'Streets': streets
      }

      optionsObj = {
        minZoom: 2,
        maxBounds: [
          [-90, -180],
          [90, 180]
        ],
        zoomControl: false,
        doubleClickZoom: false,
        trackResize: true,
        layers: [satellite]
      };

      heatGradient = getHeatGradient();

      if (leafletMap) {
        leafletMap.remove();
      }

      leafletMap = L.map('map', optionsObj);

      L.control.layers(baseMaps).addTo(leafletMap);

      addLegend();
      getGeoJson();
    }

    /**
    * @name getHeatGradient
    * @desc define the heat gradient
    * @param {array} colorArray array of heat colors
    * @param {object} extremes extremes of heat data
    * @returns {array} object of colors and value
    */
    function getHeatGradient(colorArray, extremes) {
      return [
        ['#d12a38', 0.9],
        ['#C0444E', 0.8],
        ['#CE6661', 0.7],
        ['#DD9080', 0.6],
        ['#EECF96', 0.5],
        ['#ffffbf', 0.4],
        ['#abd9e9', 0.3],
        ['#74add1', 0.2],
        ['#4575b4', 0.1],
        ['#0b57ba', 0]        
      ];
    }

    /**
    * @name addLegend
    * @desc add the legend to the map
    * @returns {void}
    */
    function addLegend() {
      var legend = L.control({ position: 'bottomleft' });

      legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend'),
          i;

        div.innerHTML += '<div class="legend-text"><b>Dem</b></div>';
        for (i = heatGradient.length - 1; i >= 0; i--) {
          div.innerHTML += '<i title="' + cleanValue(heatGradient[i][1]) + '%" style="background:' + heatGradient[i][0] + '"></i> ';
        }
        div.innerHTML += '<div class="legend-text"><b>Rep</b></div>';
        return div;
      };

      legend.addTo(leafletMap);
    }

    /**
    * @name getGeoJson
    * @desc get proper geoJson for choropleth
    * @returns {void}
    */
    function getGeoJson() {
      var mapType;
      
      if (!$scope.hasOwnProperty('selectedState')) {
        $scope.selectedState = {
          'display': 'All States',
          'value': 'usStates'
        };
      }

      mapType = $scope.selectedState.value;

      $http({
        url: './resources/json/' + mapType + '.json',
        method: 'GET'
      }).then(function (response) {
        paintGeoJson(response.data);
      }, function (error) {
        console.error(error);
      });
    }

    /**
    * @name paintGeoJson
    * @desc paint the geojson layer on leaflet map
    * @param {object} jsonData geoJSON data
    * @returns {void}
    */
    function paintGeoJson(jsonData) {
      removeOldGeoJson();
      getData(jsonData);
    }

    /**
    * @name removeOldGeoJson
    * @desc remove existing geoJson if it already exists
    * @returns {void}
    */
    function removeOldGeoJson() {
      leafletMap.eachLayer(function (layer) {
        if (layer.myTag && layer.myTag === "existingGeoJson") {
          leafletMap.removeLayer(layer)
        }

      });
    }

    /**
    * @name getData
    * @desc fetch data to paint
    * @param {object} jsonData geoJSON data
    * @returns {void}
    */
    function getData(jsonData) {
      if ($scope.selectedState.value === 'usStates') {
        $http({
          url: './resources/data/states.json',
          method: 'GET'
        }).then(function (response) {
          addStateHeatData(jsonData, response.data);
        }, function (error) {
          console.error(error);
        });
      } else {
        $http({
          url: './resources/data/2016_Presidential_Election_Results.json',
          method: 'GET'
        }).then(function (response) {
          addCountyHeatData(jsonData, response.data);
        }, function (error) {
          console.error(error);
        });
      }
    }

    /**
    * @name addStateHeatData
    * @desc add heat data to json data to reference
    * @param {object} jsonData geoJSON data
    * @param {object} data geoJSON data
    * @returns {void}
    */
    function addStateHeatData(jsonData, data) {
      var i, j;

      for (i = 0; i < data.length; i++) {
          for (j = 0; j < jsonData.features.length; j++) {
            if (ignorePunctuation(data[i].State) === ignorePunctuation(jsonData.features[j].properties.name)) {
              jsonData.features[j].properties.rep = data[i].per_gop;
              jsonData.features[j].properties.dem = data[i].per_dem;
              jsonData.features[j].properties.color = getHeatColor(data[i].per_gop);
              break;
            }
          }
      }

      createGeoJsonFeature(jsonData);
    }

    /**
    * @name addCountyHeatData
    * @desc add heat data to json data to reference
    * @param {object} jsonData geoJSON data
    * @param {object} data geoJSON data
    * @returns {void}
    */
    function addCountyHeatData(jsonData, data) {
      var i, j;

      for (i = 0; i < data.length; i++) {
        // check if data index is the same state as the selected state
        if (data[i].state_abbr === $scope.selectedState.abbreviation) {
          for (j = 0; j < jsonData.features.length; j++) {
            if (ignorePunctuation(data[i].county_name) === ignorePunctuation(jsonData.features[j].properties.NAMELSAD10)) {
              jsonData.features[j].properties.rep = data[i].per_gop;
              jsonData.features[j].properties.dem = data[i].per_dem;
              jsonData.features[j].properties.color = getHeatColor(data[i].per_gop);
              break;
            }
          }
        }
      }

      createGeoJsonFeature(jsonData);
    }

    /**
    * @name createGeoJsonFeature
    * @desc create geoJson feature for leaflet
    * @param {object} jsonData geoJSON data
    * @returns {void}
    */
    function createGeoJsonFeature(jsonData) {
      var geoJsonFeature = L.geoJson(jsonData, {
        style: function (feature) {
          return {
            // Line
            weight: 1,
            opacity: 0.65,
            color: 'black',
            // Area
            fillColor: feature.properties.color,
            fillOpacity: 0.8
          };
        },
        onEachFeature: function (feature, layer) {
          layer.bindTooltip(getTooltipContent(feature), {
            sticky: true
            // direction: 'top'
          });
          layer.myTag = "existingGeoJson";
          layer.on({
            mouseover: function (e) {
              var target = e.target;

              target.setStyle({
                weight: 2,
                color: '#666',
                fillOpacity: 0.95
              });

              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                target.bringToFront();
              }
            },
            mouseout: function (e) {
              geoJsonFeature.resetStyle(e.target);
            },
            click: function (e) {
              if ($scope.selectedState.value === 'usStates') {
                var i;
                for (i = 0; i < $scope.states.length; i++) {
                    if ($scope.states[i].display === e.target.feature.properties.name) {
                      $scope.selectedState = $scope.states[i];
                      getGeoJson();
                    }   
                }
              } else {
                $scope.selectedState = {
                  'display': 'All States',
                  'value': 'usStates'
                };
                getGeoJson();
              }
            }
          });
        }
      });

      // Add geoJSON feature to map
      geoJsonFeature.addTo(leafletMap);

      // Update Restult title
      if ($scope.selectedState.value === 'usStates') {
        $scope.result = '2016 Presidential Election';
        leafletMap.fitBounds([[25.82, -124.39], [49.38, -66.94]]);
      } else {
        $scope.result = $scope.selectedState.display + ' (' + $scope.selectedState.electoralVotes + '): ' + $scope.selectedState.winner + ' ' + $scope.selectedState.percentage + '%';
        // Center map on geoJSON
        leafletMap.fitBounds(geoJsonFeature.getBounds());
      }
    }

    /**
    * @name getHeatColor
    * @desc  determine the heat color for a feature
    * @param {number} value feature property value
    * @returns {string} color (hex value)
    */
    function getHeatColor(value) {
      var i;

      for (i = 0; i < heatGradient.length; i++) {
        if (value >= heatGradient[i][1]) {
          return heatGradient[i][0];
        }
      }

      return '#FFFFFF';
    }

    /**
     * @name ignorePunctuation
     * @param {string} item original value
     * @desc remove all punctuation from string
     * @return {string} value with no punctuation
     */
    function ignorePunctuation(item) {
      if (typeof item === 'string') {
        return item.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/ /g, '').toLowerCase();
      }
      return item;
    }

    /**
     * @name cleanValue
     * @param {string | number} item the value to replace
     * @desc if number just returns value, otherwise removes spaces from string
     * @return {string | number} altered value
     */
    function cleanValue(item) {
      if (typeof item === 'string') {
        return item.replace(/_/g, ' ');
      } else if (typeof item === 'number') {
        item = item * 100;
        return item.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 1
        });
      }
      return item;
    }

    /**
    * @name getTooltipContent
    * @desc define the tooltip content for a data point
    * @param {object} feature feature values to show in tooltip
    * @returns {string} string of tooltip content
    */
    function getTooltipContent(feature) {
      var tooltipContent = '';

      if (feature.properties.hasOwnProperty('color')) {
        tooltipContent += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + feature.properties.color + ';"></span>'
      }

      if (feature.properties.hasOwnProperty('name')) {
        tooltipContent += '<b>' + feature.properties.name + '</b>';
      } else if (feature.properties.hasOwnProperty('NAME10')) {
        tooltipContent += '<b>' + feature.properties.NAME10 + '</b>';
      }

      if (feature.properties.hasOwnProperty('rep') && feature.properties.hasOwnProperty('dem')) {
        tooltipContent += '<br>' + cleanValue(feature.properties.rep) + '% Republican';
        tooltipContent += '<br>' + cleanValue(feature.properties.dem) + '% Democratic';
      }

      return tooltipContent;
    }
     
     initialize();
});
