const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');
const ArtView = require('./art_view.js');
const HighCharts = require('highcharts');

const StatisticsView = function (container) {
  this.container = container;
  this.harvard = new Harvard();

}


StatisticsView.prototype.bindingEvents = function () {

};
