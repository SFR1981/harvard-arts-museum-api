const Harvard = require('./models/harvard.js');
const ArtView = require('./views/art_view.js');
const SelectView = require('./views/select_view.js');
const StatisticsSelect = require('./views/statistics_select.js')
const StatisticsView = require('./views/statistics_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const displayArea = document.querySelector('div#art-infos')
  const artView = new ArtView(displayArea);
  artView.bindEvents();
  const statisticsLink = document.querySelector('#statistics');
  const statisticsSelect = new StatisticsSelect(statisticsLink);
  statisticsSelect.bindEvents();
  const selectArea = document.querySelector('select#select-class')
  const selectView = new SelectView(selectArea);
  selectView.bindEvents();
  const statisticsDisplay = document.querySelector('#statistics-view')
  const statisticsView = new StatisticsView(statisticsDisplay);
  statisticsView.bindEvents();

  const harvard  = new Harvard();
  console.log("BOOM BABY");
  harvard.bindEvents();



})
