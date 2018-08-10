const PubSub = require('../helpers/pub_sub.js');

const ArtViewInner = function (container, object) {
  this.container = container;
  this.object = object;
};

ArtViewInner.prototype.render = function () {

  const objectContainer = document.createElement('div');
  objectContainer.classList.add('object');

  const title = document.createElement('h3');

  title.textContent = this.object.title;
  this.container.appendChild(title);

if (this.object.primaryimageurl){
  const objectImage = document.createElement('img');
  objectImage.src = this.object.primaryimageurl;
  this.container.appendChild(objectImage);
}else{
  const objectImage = document.createElement('p');
  objectImage.textContent = "no primary image";
  this.container.appendChild(objectImage);
}


  const description = document.createElement('h4');
  description.classList.add('description_header')
  description.textContent = "Description:"
  this.container.appendChild(description);
  const descriptionContent = document.createElement('p');
  descriptionContent.textContent = this.object.description;
  this.container.appendChild(descriptionContent);


};
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
