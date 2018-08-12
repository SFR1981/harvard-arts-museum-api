const PubSub = require('../helpers/pub_sub.js');
const Harvard = require('../models/harvard.js');

const SelectView = function (selection) {
  this.selection = selection;
  this.harvard = new Harvard();

}


SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Harvard:dropdown-classification', (evt) => {
    console.log(this.selection);

    const allClassifications = evt.detail;
    console.log(allClassifications);

  this.populate(allClassifications);

  });

  this.selection.addEventListener('change', (evt) => {
    const selectedClass = evt.target.value;
    this.harvard.getThisClassification(selectedClass);
  });
};

SelectView.prototype.populate = function(allClassifications){
  allClassifications.forEach((classification, index) => {
    console.log(classification.key);
     const option = document.createElement('option');
     option.textContent = classification.key;
     option.value = classification.key;


     this.selection.appendChild(option);


  })
}





module.exports = SelectView;
