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
  objectContainer.appendChild(title);

if (this.object.people){
  this.object.people.forEach((person) => {

    const artist = document.createElement('p');
    artist.textContent = person.name;
    objectContainer.appendChild(artist);
  });
};

const date = document.createElement('p');
date.textContent = `dated: ${this.object.dated}`;
objectContainer.appendChild(date);
const classification = document.createElement('p');
classification.textContent = `classification: ${this.object.classification}`;
objectContainer.appendChild(classification);


if (this.object.primaryimageurl){   //if null image = this.object.images[0]
  const objectImage = document.createElement('img');
  objectImage.src = this.object.primaryimageurl;
  objectImage.classList.add('image');
  objectContainer.appendChild(objectImage);

  this.object.images.forEach((image) =>{

  })

}else{
  const objectImage = document.createElement('p');
  objectImage.textContent = "no primary image";
  objectContainer.appendChild(objectImage);
};


    if (this.object.description){
      const descriptionContent = document.createElement('p');
      descriptionContent.classList.add('description')
      descriptionContent.textContent = this.object.description;

      objectContainer.appendChild(descriptionContent);
    }
 this.container.appendChild(objectContainer);

};


module.exports = ArtViewInner;
