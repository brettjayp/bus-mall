/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// global variables
var imageOneEl = document.getElementById('imageOne');
var imageTwoEl = document.getElementById('imageTwo');
var imageThreeEl = document.getElementById('imageThree');
var containerEl = document.getElementById('boxContainer');
var dataListEl = document.getElementById('dataList');
var imagePool = [];
var lastUsed = [0, 0, 0];
var clicks = 0;

function Item(name, extension, category, alt){ // function to add items, we use different extensions so must include that
  this.title = name;
  this.alt = alt;
  this.src = `img/${name}.${extension}`;
  this.category = category;

  this.displayCount = 0;
  this.clickCount = 0;
//   this.clickPercent = 0;

  imagePool.push(this);
}

// Item.prototype.calculations = function(){ // function with set of features to calculate various properties for data analisys
//     this.clickPercent = 0;
//     for(var i = 0; i < imagePool.length; i++){
//       this.clickPercent = ( this.clickCount / this.displayCount ) * 100;
//     }
//   };

function runAtEnd(){ // run this container function only after all 25 clicks
  var ulEl = addElement('ul', false, dataListEl);
  addElement('lh', 'Report Data', ulEl);

  

  for(var i = 0; i < imagePool.length; i++){
    addElement('li', `The ${imagePool[i].title} item was displayed ${imagePool[i].displayCount} times, and was clicked on ${imagePool[i].clickCount} times, resulting in a clicked percentage of ${imagePool[i].clickPercent}%`,ulEl);
  }
}

Item.prototype.calculations = function(){ // function with set of features to calculate various properties for data analisys
  this.clickPercent = 0;
  for(var i = 0; i < imagePool.length; i++){
    this.clickPercent = 100 * this.clickCount * this.displayCount;
  }
};



function imageGenerator(){ // generate three images at random, built in prevention of on-screen duplicates and immediate repeats
  {var index = randomValue(imagePool.length);  //  imageOne
    while(lastUsed.indexOf(index) > -1){index = randomValue(imagePool.length)};
    imageOneEl.src = imagePool[index].src;
    imageOneEl.alt = imagePool[index].name;
    imageOneEl.title = imagePool[index].title;
    imageOneEl.alt = imagePool[index].alt;
  }
  
  {var indexTwo = randomValue(imagePool.length);  //  imageTwo
    while(indexTwo === index || lastUsed.indexOf(indexTwo) > -1){indexTwo = randomValue(imagePool.length);} // prevent duplicate of index
    imageTwoEl.src = imagePool[indexTwo].src;
    imageTwoEl.alt = imagePool[indexTwo].name;
    imageTwoEl.title = imagePool[indexTwo].title;
    imageTwoEl.alt = imagePool[indexTwo].alt;
  }

  {var indexThree = randomValue(imagePool.length);  // imageThree
    while(indexThree === index || indexThree === indexTwo || lastUsed.indexOf(indexThree) > -1){indexThree = randomValue(imagePool.length);}  // prevent duplicate of index and indexTwo
    imageThreeEl.src = imagePool[indexThree].src;
    imageThreeEl.alt = imagePool[indexThree].name;
    imageThreeEl.title = imagePool[indexThree].title;
    imageThreeEl.alt = imagePool[indexThree].alt;
  }
  //  group of global variables to change at end of function.
  {lastUsed[0] = index;
    lastUsed[1] = indexTwo;
    lastUsed[2] = indexThree;
    imagePool[index].displayCount++;
    imagePool[indexTwo].displayCount++;
    imagePool[indexThree].displayCount++;
  }
  
  { //  console logs for sanity
    console.log(`Displayed:\n   ${imagePool[index].title} displayCount: ${imagePool[index].displayCount}\n   ${imagePool[indexTwo].title} displayCount: ${imagePool[indexTwo].displayCount}\n   ${imagePool[indexThree].title} displayCount: ${imagePool[indexThree].displayCount}`);
  }
}

function randomValue(max){ // helper function, random number
  return Math.floor(Math.random() * Math.floor(max));
}

function addElement(element, content, parent){ // helper function to create new elements to render on page
  var newElement = document.createElement(element);
  if(content){
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  }
  parent.appendChild(newElement);
  return newElement;
}

function handleClick(event){ // fuction to increase click count and recall imageGenerator() when user makes a selection
  clicks++;
  var clickedImage = event.target.title;

  for(var i = 0; i < imagePool.length; i++){
    if(clickedImage === imagePool[i].title){
      imagePool[i].clickCount++;
      console.log(`The user clicked on ${imagePool[i].title} and its click count is now ${imagePool[i].clickCount}.`);
    }
  }
}

function twentyFive(){ //function to only allow 25 click events
  if(clicks < 25){
    handleClick(event);
    imageGenerator();
  } else {
    alert('Thank you for your input. You\'ve submitted 25 responses. No need to continue.');
    Item.prototype.calculations();
    runAtEnd();
  }
//   if(clicks === 25){
//     imagePool.calculations();
//   }
}

containerEl.addEventListener('click', twentyFive);

{ // add new items
  new Item('bag', 'jpg', 'travel', 'R2D2 Suitcases');
  new Item('banana', 'jpg', 'kitchen', 'Banana Slicer');
  new Item('bathroom', 'jpg', 'electronics', 'Tablet & Toilet Paper Stand');
  new Item('boots', 'jpg', 'fashion', 'Open Toe Rain Boots');
  new Item('breakfast', 'jpg', 'kitchen', 'All-in-one Breakfast Machine');
  new Item('bubblegum', 'jpg', 'food', 'Meatball Themed Bubble Gum');
  new Item('chair', 'jpg', 'home', 'An Impractical Chair');
  new Item('cthulhu', 'jpg', 'toys', 'Green Figurine of Cthulhu');
  new Item('dragon', 'jpg', 'food', 'Can of Dragon Meat');
  new Item('pen', 'jpg', 'office', 'Utensil Attachments for a Pen');
  new Item('dog-duck', 'jpg', 'animals', 'Duck Bill Costume for Dogs');
  new Item('pet-sweep', 'jpg', 'animals', 'Floor Sweeping Slippers for Pets');
  new Item('scissors', 'jpg', 'kitchen', 'Scissors Made For Pizza Slices');
  new Item('shark', 'jpg', 'home', 'Shark Themed Sleeping Bag');
  new Item('sweep', 'png', 'fashion', 'Floor Sweeping Onesie for Babies');
  new Item('tauntaun', 'jpg', 'toys', 'Star Wars Animal Themed Baby Blanket');
  new Item('unicorn', 'jpg', 'food', 'Can of Unicorn Meat');
  new Item('usb', 'gif', 'electronics', 'Silly Wiggling Octopus USB Stick');
  new Item('water-can', 'jpg', 'home improvement', 'An Impractical Watering Pail');
  new Item('wine-glass', 'jpg', 'kitchen', 'An Impractical Wine Glass');
}

imageGenerator();

function newImagesButton(){ // helper function for debug, used in button on page
  console.log(`lastUsed at start is ${lastUsed}`);
  imageGenerator();
  console.log(`lastUsed at end is ${lastUsed}`);
}
