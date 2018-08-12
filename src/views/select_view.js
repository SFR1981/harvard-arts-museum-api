const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');

const SelectView = function (selection) {
  this.selection = selection;
  this.harvard = new Harvard();

}


SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Harvard:dropdown-region', (evt) => {
    console.log(evt);
    const allRegions = evt.detail;
    console.log(allRegions);
    this.populate(allRegions);

  });

  this.selection.addEventListener('change', (evt) => {
    const selectedRegion = evt.target.value;
    this.munros.getFilteredData(selectedRegion);
  });
};

SelectView.prototype.populate = function(allRegions){
  allRegions.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region;
    this.selection.appendChild(option);


  })
}





module.exports = SelectView;
