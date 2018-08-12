const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');

const YearView = function (selection) {
  this.selection = selection;
  this.harvard = new Harvard();

}


YearView.prototype.bindEvents = function () {
  this.selection.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const year = evt.target[0].value
    console.log(evt.target[0].value);
    const field =  'dated'
   this.harvard.search(field, year);
  })


  }






module.exports = YearView;
