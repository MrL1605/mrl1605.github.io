// Data gathered from http://populationpyramid.net/germany/2015/
$(function () {
    // Age categories
  	var categories_hate = ['Politics', 'XYZ', 'Prate', 'Others work', 'Colors', 'ASD'];
		var categories_love = ['Friends and Family', 'My Laptop and Phone', 'Doing Projects', 'Physics', 'Travel', 'Myself'];
	
    $(document).ready(function () {
        $('#love-hate-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: '',
            xAxis: [{
                categories: categories_hate,
                reversed: true,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: true,
                categories: categories_love,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return '';
                    }
                }
            },
					  tooltip:{
								enabled:false
						},
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Hate',
                data: [-220, -200, -150, -130, -80, -52]
            }, {
                name: 'Love',
                data: [210, 190, 160, 135, 110, 50]
            }]
        });
    });
    

	// Load the fonts
	Highcharts.createElement('link', {
		 href: 'https://fonts.googleapis.com/css?family=Unica+One',
		 rel: 'stylesheet',
		 type: 'text/css'
	}, null, document.getElementsByTagName('head')[0]);

	Highcharts.theme = {
				 colors: ["#FF3D5E", "#10D173", "#FF3D5E", "#7798BF", "#AAEEEE", "#FF0066", "#EEAAEE",
						"#55BF3B", "#DF5353", "#7798BF", "#AAEEEE"],

	chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif",
      },
      plotBorderColor: '#606063'
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3',
						fontSize:'25px'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3',
						fontSize:'25px'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3',
				fontSize:'25px'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
	labels: {
		 	style: {
				color: '#707073'
      }
		 }
	};

	// Apply the theme
	Highcharts.setOptions(Highcharts.theme);


});