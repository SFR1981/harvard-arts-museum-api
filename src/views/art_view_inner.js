const PubSub = require('../helpers/pub_sub.js');

const ArtViewInner = function (container, object) {
  this.container = container;
  this.munro = object;
};

ArtViewInner.prototype.render = function () {

  const objectContainer = document.createElement('div');
  objectContainer.classList.add('object');

  const title = document.createElement('h3');

  title.textContent = object.title;
  this.container.appendChild(title);
}
  //
  // this.container.appendChild(name);
  // const miniList = document.createElement('ul');
  // const height = document.createElement('li');
  // height.textContent = `Height: ${this.munro.height}m`;
  // miniList.appendChild(height);
  // const meaning = document.createElement('li');
  // meaning.textContent = `Meaning: ${this.munro.meaning}`;
  // miniList.appendChild(meaning);
  // this.container.appendChild(miniList);




module.exports = ArtViewInner;
