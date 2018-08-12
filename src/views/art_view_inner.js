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

if (this.object.people){
  this.object.people.forEach((person) => {

    const artist = document.createElement('p');
    artist.textContent = person.name;
    this.container.appendChild(artist);
  });
};

const date = document.createElement('p');
date.textContent = `dated: ${this.object.dated}`;
this.container.appendChild(date);
const classification = document.createElement('p');
classification.textContent = `classification: ${this.object.classification}`;
this.container.appendChild(classification);


if (this.object.primaryimageurl){   //if null image = this.object.images[0]
  const objectImage = document.createElement('img');
  objectImage.src = this.object.primaryimageurl;
  objectImage.classList.add('image');
  this.container.appendChild(objectImage);

  this.object.images.forEach((image) =>{

  })

}else{
  const objectImage = document.createElement('p');
  objectImage.textContent = "no primary image";
  this.container.appendChild(objectImage);
};


    if (this.object.description){
      const descriptionContent = document.createElement('p');
      descriptionContent.classList.add('description')
      descriptionContent.textContent = this.object.description;

      this.container.appendChild(descriptionContent);
    }


};


module.exports = ArtViewInner;
