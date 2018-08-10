const Harvard = require('./models/harvard.js');
const ArtView = require('./views/art_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const displayArea = document.querySelector('div#art-infos')
  const artView = new ArtView(displayArea);
  artView.bindEvents();
  const harvard  = new Harvard();
  console.log("BOOM BABY");
  harvard.bindEvents();
  // const mu = new Munros();
  //
  // const display = document.querySelector('div#munros-list')
  // const munroListView = new MunrosListView(display);
  // munroListView.bindEvents();
  // const selection = document.querySelector('select#munros');
  // const selectView = new SelectView(selection);
  // selectView.bindEvents();
  //
  // munros.bindEvents();


})
