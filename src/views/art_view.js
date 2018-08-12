const PubSub = require('../helpers/pub_sub.js');
const ArtViewInner = require('./art_view_inner.js');


const ArtView = function (container) {
  this.container = container;
  this.objects = null;
}

ArtView.prototype.bindEvents = function () {
  PubSub.subscribe('Harvard:objects-ready', (evt) => {
    this.objects = evt.detail;
    // console.log(this.objects.records);
   console.log(this.objects.info.page);

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

    const page = document.createElement('h6');
    page.classList.add('page');
console.log(this.objects.info.page);
    page.textContent = `viewing page ${this.objects.info.page} of ${this.objects.info.pages}`;
    this.container.appendChild(page);
  this.objects.records.forEach((object)=> {
    const artViewInner = new ArtViewInner(this.container, object);
    artViewInner.render();


  })
};




//todo: nextpage -addEventListener click publishes nextpage, subscribed to by harvard, increments page
// calls get all


// there are over 200,000 objects, it is not practical to paginate  that , it would need 2000 pages!
//todo : return by sorted - choose options to sort by , enter value, add into url, keep old url? (don't reset unless user has chosen to- with event listenr - this allows for incremental search refinement)



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
