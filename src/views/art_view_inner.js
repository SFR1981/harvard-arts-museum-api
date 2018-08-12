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

if (this.object.primaryimageurl){   //if null image = this.object.images[0]
  const objectImage = document.createElement('img');
  objectImage.src = this.object.primaryimageurl;
  objectImage.classList.add('image');
  this.container.appendChild(objectImage);

  this.object.images.forEach((image) =>{
    // console.log(image.baseimageurl);
  })

}else{
  const objectImage = document.createElement('p');
  objectImage.textContent = "no primary image";
  this.container.appendChild(objectImage);
};

  //
  // const description = document.createElement('h4');
  // description.classList.add('description_header')
  // description.textContent = "Description:"
  // this.container.appendChild(description);
    if (this.object.description){
      const descriptionContent = document.createElement('p');
      descriptionContent.classList.add('description')
      descriptionContent.textContent = this.object.description;

      this.container.appendChild(descriptionContent);
    }



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
