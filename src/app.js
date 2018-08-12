const Harvard = require('./models/harvard.js');
const ArtView = require('./views/art_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const displayArea = document.querySelector('div#art-infos')
  const artView = new ArtView(displayArea);
  artView.bindEvents();
  const selectArea = document.querySelector('select#select-class')
  const selectView = new SelectView(selectArea);
  selectView.bindEvents();

  const harvard  = new Harvard();
  console.log("BOOM BABY");
  harvard.bindEvents();



})
