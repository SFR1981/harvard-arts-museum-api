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
   console.log("PAGE LOAD");
     this.container.innerHTML = "";

    this.render();



  });
}

ArtView.prototype.render = function () {


    const page = document.createElement('h6');
    page.classList.add('page');
console.log(this.objects.info.page);
    page.textContent = `viewing page ${this.objects.info.page} of ${this.objects.info.pages}`;
    this.container.appendChild(page);


    if (this.objects.info.prev){
      const prev = document.createElement('a');
      prev.classList.add('prev-link');
      prev.textContent = "previous page ";
      prev.addEventListener('click', ()=> {
      PubSub.publish('ArtView:changePage', this.objects.info.page-1);
      console.log("PREV");
    });
      this.container.appendChild(prev);

    };

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

  this.objects.records.forEach((object)=> {
    const artViewInner = new ArtViewInner(this.container, object);
    artViewInner.render();


  })
};





ArtView.prototype.reset = function () {
  this.container.innerHTML = "";


};



module.exports = ArtView;
