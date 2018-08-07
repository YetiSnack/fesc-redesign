
/*
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
*/
console.log("let's build some charts!")



// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.load('current', {
  'packages': ['gauge']
});

      google.charts.load('current', {'packages':['timeline']});



// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1, ],
    ['Olives', 1, ],
    ['Zucchini', 1, ],
    ['Pepperoni', 2, ]
  ]);

  var options = {
    width: 1920,
    height: 200,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
  };

  // Instantiate and draw our chart, passing in some options.
  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div'));
  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  chart.draw(data, options);
  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 100);
  setInterval(function() {
    data.setValue(1, 1, 20 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 100);
  setInterval(function() {
    data.setValue(2, 1, 30 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 100);
  setInterval(function() {
    data.setValue(3, 1, 50 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 100);
  setInterval(function() {
    data.setValue(4, 1, 10 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 100);
}


function drawChart1() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1, ],
    ['Olives', 1, ],
    ['Zucchini', 1, ],
    ['Pepperoni', 2, ]
  ]);


  // Set chart options
  var options = {
    'title': 'How Much Pizza Your Mom Ate Last Night',
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none'
  };


  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart1_div'));
  chart.draw(data, options);
}

function drawChart2(){
  var container = document.getElementById('semesters');
          var chart = new google.visualization.Timeline(container);
          var dataTable = new google.visualization.DataTable();

          dataTable.addColumn({ type: 'string', id: 'Requirements' });
          dataTable.addColumn({ type: 'date', id: 'Start' });
          dataTable.addColumn({ type: 'date', id: 'End' });
          dataTable.addRows([
            [ 'General Education', new Date(2018, 8, 1), new Date(2019, 4, 30) ],
            [ 'Choose Major',      new Date(2019, 4, 1),  new Date(2019, 7, 31) ],
            [ 'Preferred Area Of Study - 1',  new Date(2019, 8,1),  new Date(2020,4, 30) ],
            [ 'Preferred Area Of Study - 3',  new Date(2020, 8, 1),  new Date(2022, 4, 30) ]]);

          chart.draw(dataTable);

}
