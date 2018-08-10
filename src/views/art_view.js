const PubSub = require('../helpers/pub_sub.js');


const ArtView = function (container) {
  this.container = container;
  this.objects = null;
}

ArtView.prototype.bindEvents = function () {
  PubSub.subscribe('Harvard:objects-ready', (evt) => {
    this.objects = evt.detail;
    console.log(this.objects.records);

    this.render();
  });
}
//
//   PubSub.subscribe('Harvard:filtered-list-ready', (evt)=>{
//     this.objects = evt.detail;
//     console.log("yo");
//     this.container.innerHTML = '';
//     this.render()
//   })
// };

ArtView.prototype.render = function () {
  this.objects.records.forEach((object)=> {
      console.log(object.title);
    const objectName = document.createElement('p')
    objectName.textContent = object.title;
    this.container.appendChild(objectName);

  })
};
//     const munroContainer = document.createElement('div');
// munroContainer.classList.add('munro');
//
// const name = document.createElement('h3');
// name.textContent = this.munro.name;
// this.container.appendChild(name);
// const miniList = document.createElement('ul');
// const height = document.createElement('li');
// height.textContent = `Height: ${this.munro.height}m`;
// miniList.appendChild(height);
// const meaning = document.createElement('li');
// meaning.textContent = `Meaning: ${this.munro.meaning}`;
// miniList.appendChild(meaning);
// this.container.appendChild(miniList);


// ArtView.prototype.render = function () {
//
//   this.munros.forEach((munro) => {
//     const munroView = new MunroView(this.container, munro);
//     munroView.render();
//   });
// };



module.exports = ArtView;
