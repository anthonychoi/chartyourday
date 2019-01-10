google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Sleep', 24]
  ]);

  var options = {
    title: 'My 24 Hours',
    legend: 'none',
    animation:  {
      startup: true,
      duration: 1500,
      easing: 'inAndOut'
 }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
