const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');


const StatisticsSelect = function (selection) {
  this.selection = selection;
  this.harvard = new Harvard();


}


StatisticsSelect.prototype.bindEvents = function () {

  const objects = document.createElement('div');
  objects.textContent = "View Statistics for Object Classification";
  objects.addEventListener('click', (evt) =>{
     this.harvard.getStatistics();
  })
  this.selection.appendChild(objects);

  const date = document.createElement('div');
  date.textContent = "View Statistics for Object Dates";
  date.addEventListener('click', (evt) =>{
     this.harvard.getYearStats();
  })
  this.selection.appendChild(date);
//   this.selection.addEventListener('click', (evt) => {
//
//      this.harvard.getStatistics();
//     this.harvard.getYearStats();
//
// });
}


module.exports = StatisticsSelect;
