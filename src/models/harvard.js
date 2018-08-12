const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const API_KEY = require('../helpers/api_key.js');

const Harvard = function () {
  this.data = null;
  page = null;
  const pages = null;

}

Harvard.prototype.bindEvents = function () {
    this.getClassifications();
    this.getRandomPage();

    PubSub.subscribe("ArtView:changePage", (evt) =>{
      console.log(evt.detail);
      page = evt.detail;
    this.getObjects();
  })


};

Harvard.prototype.getClassifications = function () {
  const url = `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&aggregation={"by_classification":{"terms":{"field":"classification"}}}&size=0`
  const request = new Request (url);
  request.get((data) => {
    this.data = data.aggregations.by_classification.buckets;
    console.log(data.aggregations.by_classification.buckets);
    PubSub.publish('Harvard:dropdown-classification', this.data);
  })

};


Harvard.prototype.getThisClassification = function (classification) {

  const url = `https://api.harvardartmuseums.org/object\?apikey=${API_KEY}&q=classification:${classification}&size=100&&sort=imagecount&sortorder=desc`
  const request = new Request(url);
  console.log(url);
  request.get((data) => {
   this.data = data;

    PubSub.publish("Harvard:objects-ready", this.data);
  })
}




Harvard.prototype.getObjects = function () {
  const url = `https://api.harvardartmuseums.org/object\?apikey=${API_KEY}&size=100&page=${page}`
   const request = new Request(url);
   console.log(url);
   request.get((data) => {
    this.data = data;

     PubSub.publish("Harvard:objects-ready", this.data);
   })
 }

 Harvard.prototype.getRandomPage = function () {
   const url = `https://api.harvardartmuseums.org/object\?apikey=${API_KEY}&size=100&page=1`
    const request = new Request(url);

    request.get((data) => {
     this.data = data;
     // console.log(this.data.info.pages);
     page = Math.floor(Math.random() * (this.data.info.pages - 1 + 1)) + 1;
      console.log(page);
      this.getObjects();


    })
  }


// todo: aggregate function drop down list
// if results more than 100 say to reducre result

 //  Harvard.prototype.getNextObjects = function () {
 //     const url = `https://api.harvardartmuseums.org/object\?apikey=${API_KEY}&size=100`
 //      const request = new Request(url);
 //      request.get((data) => {
 //       this.data = data;
 //       return this.data;
 //        console.log(this.data);
 //        PubSub.publish("Harvard:objects-ready")
 //      })
 //
 // }




//
// Munros.prototype.getFilteredData = function (region) {
//   const url = `https://munroapi.herokuapp.com/api/munros/region/${ region }`;
//   const request = new Request(url);
//   console.log(url);
//   request.getFilteredData()
//     .then((data) => {
//     //  console.log(data);
//       this.data = data;
//
//       PubSub.publish('Munros:filtered-list-ready', this.data);
//   })
//     .catch((err) =>{
//       console.error(err);
//     })}
//
//
//
// //
//
//   Munros.prototype.getAllData = function () {
//     const url = `https://munroapi.herokuapp.com/api/munros/`
//     const request = new Request(url);
//     request.get((data) => {
//     this.data = data.map((munro) => {
//        return {
//       name: munro.name,
//       height: munro.height,
//       meaning: munro.meaning
//     }});
//     console.log(this.data);
//     PubSub.publish('Munro:all-Munros', this.data);
//   })
// };


//
// Munros.prototype.getAllRegions = function () {
//
//   const url = 'https://munroapi.herokuapp.com/api/munros/';
//   const request = new Request(url);
//   request.get((data) => {
//     this.data = data.map(munro => munro.region)
//  .filter((region, index, regions) =>  regions.indexOf(region) === index);
//
// console.log(this.data);
//
//   PubSub.publish('Munro:dropdown-region', this.data);
//      })
  //
  //
  // };

  //
  // Continents.prototype.getContinentNames = function (countries) {
  //   return countries
  //     .map(country => country.region)
  //     .filter((region, index, regions) => regions.indexOf(region) === index);
  // };




module.exports = Harvard;
