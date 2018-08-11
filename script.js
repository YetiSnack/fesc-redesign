google.charts.load('current', {
  'packages': ['corechart']
});

// Draw static charts
google.charts.setOnLoadCallback(drawChartA);
google.charts.setOnLoadCallback(drawChartB);

//Draw dynamic charts
google.charts.setOnLoadCallback(drawChartC);
google.charts.setOnLoadCallback(drawChartD);

function drawChartA() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Billion BTU'],
    ['1960', 35680],
    ['1961', 34417],
    ['1962', 35826],
    ['1963', 38613],
    ['1964', 39016],
    ['1965', 39916],
    ['1966', 42760],
    ['1967', 44550],
    ['1968', 49556],
    ['1969', 51489],
    ['1970', 51035],
    ['1971', 49968],
    ['1972', 54389],
    ['1973', 56250],
    ['1974', 52429],
    ['1975', 50007],
    ['1976', 56507],
    ['1977', 59953],
    ['1978', 65357],
    ['1979', 69419],
    ['1980', 90049],
    ['1981', 83117],
    ['1982', 104674],
    ['1983', 91705],
    ['1984', 108740],
    ['1985', 110698],
    ['1986', 116356],
    ['1987', 107606],
    ['1988', 113802],
    ['1989', 232261],
    ['1990', 198986],
    ['1991', 212955],
    ['1992', 230779],
    ['1993', 217028],
    ['1994', 215563],
    ['1995', 220211],
    ['1996', 240343],
    ['1997', 231308],
    ['1998', 205485],
    ['1999', 204114],
    ['2000', 194952],
    ['2001', 158038],
    ['2002', 174327],
    ['2003', 188473],
    ['2004', 179462],
    ['2005', 183175],
    ['2006', 185564],
    ['2007', 190489],
    ['2008', 195232],
    ['2009', 213642],
    ['2010', 223518],
    ['2011', 222956],
    ['2012', 220020],
    ['2013', 229666],
    ['2014', 226863],
    ['2015', 234192]


  ]);
  var options = {
    title: 'Renewable Energy Production In Florida',
    curveType: 'none',
    titlePosition: 'in',
    legend: {
      position: 'top'
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('curve_chartA'));
  chart.draw(data, options);
}

function drawChartB() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Billion BTU'],
    ['1960', 57344],
    ['1961', 62705],
    ['1962', 71216],
    ['1963', 78258],
    ['1964', 87016],
    ['1965', 95878],
    ['1966', 108610],
    ['1967', 119314],
    ['1968', 135509],
    ['1969', 153032],
    ['1970', 171346],
    ['1971', 188564],
    ['1972', 209665],
    ['1973', 237104],
    ['1974', 235482],
    ['1975', 242096],
    ['1976', 252408],
    ['1977', 270767],
    ['1978', 289031],
    ['1979', 295551],
    ['1980', 309694],
    ['1981', 317921],
    ['1982', 315744],
    ['1983', 329216],
    ['1984', 353246],
    ['1985', 379307],
    ['1986', 398095],
    ['1987', 417862],
    ['1988', 444382],
    ['1989', 472473],
    ['1990', 489741],
    ['1991', 499299],
    ['1992', 501598],
    ['1993', 521176],
    ['1994', 544365],
    ['1995', 571483],
    ['1996', 586291],
    ['1997', 597240],
    ['1998', 639254],
    ['1999', 638966],
    ['2000', 668216],
    ['2001', 684966],
    ['2002', 718136],
    ['2003', 741696],
    ['2004', 745810],
    ['2005', 767622],
    ['2006', 778685],
    ['2007', 788461],
    ['2008', 771702],
    ['2009', 766848],
    ['2010', 788887],
    ['2011', 768009],
    ['2012', 752941],
    ['2013', 757189],
    ['2014', 771379],
    ['2015', 803865],
    ['2016', 804283]
  ]);
  var options = {
    theme: 'maximized',
    title: 'Electricity total consumption (i.e. sold) Florida',
    curveType: 'function',
    backgroundColor: '#8bb0d1',
    legend: {
      position: 'bottom'
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('curve_chartB'));
  chart.draw(data, options);
}

function drawChartC() {

  let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=b2d7cde19e854df8d44a4fda3998d0d3&series_id=SEDS.TETCB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function() {
    let res = JSON.parse(request.response);
    let name = res.series[0].name
    let chartData = res.series[0].data
    let desc = "Source: " + res.series[0].source
    let infoSource = document.querySelector('#dSource')
    infoSource.innerHTML = desc
    chartData.reverse()
    let seriesFormat = []
    seriesFormat[0] = 'Year'
    seriesFormat[1] = res.series[0].units
    chartData.unshift(seriesFormat)
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
      title: name,
      curveType: 'none',
      titlePosition: 'in',
      legend: {
        position: 'top'
      }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chartC'));
    chart.draw(data, options);
  }
  // Callback for when there's an error
  request.error = function(err) {
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}


function drawChartD() {

  let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=b2d7cde19e854df8d44a4fda3998d0d3&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function() {
    let res = JSON.parse(request.response);
    let name = res.series[0].name
    let chartData = res.series[0].data
    let desc = "Source: " + res.series[0].source
    let infoSource = document.querySelector('#dSource')
    infoSource.innerHTML = desc
    chartData.reverse()
    let seriesFormat = []
    seriesFormat[0] = 'Year'
    seriesFormat[1] = res.series[0].units
    chartData.unshift(seriesFormat)
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
      title: name,
      curveType: 'none',
      titlePosition: 'in',
      legend: {
        position: 'top'
      }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chartD'));
    chart.draw(data, options);
  }
  request.error = function(err) {
    console.log("error is: ", err)
  }
  request.send()
}
