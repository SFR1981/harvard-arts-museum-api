const PubSub = require('../helpers/pub_sub.js');
const ArtViewInner = require('./art_view_inner.js');
const Harvard = require('../models/harvard.js');


const ArtView = function (container) {
  this.container = container;
  this.objects = null;
  this.harvard = new Harvard();

}

ArtView.prototype.bindEvents = function () {
  PubSub.subscribe('Harvard:objects-ready', (evt) => {
    this.objects = evt.detail;
    this.container.innerHTML = "";
    this.render();

   PubSub.subscribe('Harvard:stats-ready', evt =>{
     this.reset();

   })



  });
}



ArtView.prototype.reset = function () {
  this.container.innerHTML = "";


};

ArtView.prototype.render = function () {


    const page = document.createElement('h6');
    page.classList.add('page');
    page.textContent = `viewing page ${this.objects.info.page} of ${this.objects.info.pages}`;
    this.container.appendChild(page);


    if (this.objects.info.prev){
      const prev = document.createElement('a');
      prev.classList.add('prev-link');
      prev.textContent = "previous page ";
      prev.addEventListener('click', ()=> {
      PubSub.publish('ArtView:changePage', this.objects.info.page-1);

    });
      this.container.appendChild(prev);

    };

    const randomPage = document.createElement('a');
    randomPage.textContent = 'show a random page';
    randomPage.addEventListener("click", ()=> {
    this.harvard.getRandomPage();
       });
    this.container.appendChild(randomPage);


    if (this.objects.info.next){
      const next = document.createElement('a');
      next.classList.add('next-link');
      next.textContent = "next page";
      next.addEventListener('click', ()=> {
        console.log("NEXT");
      PubSub.publish('ArtView:changePage', this.objects.info.page+1)
    });
      this.container.appendChild(next);

    }

    const hoverToEnlarge = document.createElement('p');
    hoverToEnlarge.classList.add('hoverToEnlarge')
    hoverToEnlarge.textContent = 'Hover over an image to enlarge'
    this.container.appendChild(hoverToEnlarge);

// nested view
  this.objects.records.forEach((object)=> {
    const artViewInner = new ArtViewInner(this.container, object);
    artViewInner.render();


  })
};







module.exports = ArtView;
