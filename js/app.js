/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// global variables
var imageOneEl = document.getElementById('imageOne');
var imageTwoEl = document.getElementById('imageTwo');
var imageThreeEl = document.getElementById('imageThree');
var imagePool = [];

// function to add items, and call to do so
// function is very simple for now, will expand. extensions used inclue .jpg .png .gif so we must include extension type
function item(name, extension){
  this.title = name;
  this.alt = name;
  this.src = `img/${name}.${extension}`;

  imagePool.push(this);
}
function imageGenerator(){
  var index = randomValue(imagePool.length);

  imageOneEl.src = imagePool[index].src;
  imageOneEl.alt = imagePool[index].name;
  imageOneEl.title = imagePool[index].name;

  var indexTwo = randomValue(imagePool.length);

  while(indexTwo === index){
    indexTwo = randomValue(imagePool.length);
  }

  imageTwoEl.src = imagePool[indexTwo].src;
  imageTwoEl.alt = imagePool[indexTwo].name;
  imageTwoEl.title = imagePool[indexTwo].name;

  var indexThree = randomValue(imagePool.length);

  while(indexThree === index || indexThree === indexTwo){
    indexTwo = randomValue(imagePool.length);
  }

  imageThreeEl.src = imagePool[indexThree].src;
  imageThreeEl.alt = imagePool[indexThree].name;
  imageThreeEl.title = imagePool[indexThree].name;

}

// helper function, random number
function randomValue(max){
  return Math.floor(Math.random() * Math.floor(max));
}

// add items
new item('bag', 'jpg');
new item('banana', 'jpg');
new item('bathroom', 'jpg');
new item('boots', 'jpg');
new item('breakfast', 'jpg');
new item('bubblegum', 'jpg');
new item('chair', 'jpg');
new item('cthulhu', 'jpg');
new item('dragon', 'jpg');
new item('pen', 'jpg');

imageGenerator();
