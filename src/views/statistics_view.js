const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');
const ArtView = require('./art_view.js');
const HighCharts = require('../../../Highcharts-6.1.1/code/highcharts.js');

const StatisticsView = function (container) {
  this.container = container;
  this.harvard = new Harvard();
  this.data = null;
  this.amount = null;

}


StatisticsView.prototype.bindEvents = function () {
  PubSub.subscribe("Harvard:stats-ready", evt =>{

    const stats = evt.detail.aggregations.by_classification.buckets;


    const categoriesArray = [];
    const valuesArray = [];
    // for each category, add name to name array and amount to amount array
    stats.forEach((classification, index) => {
        categoriesArray.push(classification.key);
        valuesArray.push(classification.doc_count);
        });





    var myChart = new HighCharts.chart('statistics-view', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Classification overview'
      },
      xAxis: {
          categories: categoriesArray//['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'number of objects'
          }
      },
      series: [{
          name: 'Harvard art museums',
          data: valuesArray
      } ]
  });

  })

};


module.exports = StatisticsView;
