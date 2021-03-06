// Output 'Juice is Ready' and Random Image

function displayJuice() {
  var output = document.getElementById("output");
  output.style.display = "block";
}


// Generate Juice Story

const customName = document.getElementById('customName');
const customFruit = document.getElementById('customFruit');
const customDiet = document.getElementById('customDiet');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "This delicious Fruit and Diet juice was made personally for Name! It's made with 100% Organic and locally-grown, fresh ingredients. Wondering what else is inside? Yummy :insertX:, Citrus-y :insertY:, and Delicious :insertZ:.";
let insertX = ['Raspberries','Strawberries','Blueberries','Blackberries', 'Cranberries'];
let insertY = ['Orange','Lemon','Lime','Tangerine', 'Grapefruit', 'Clementine'];
let insertZ = ['Papaya','Mango','Peach','Pineapple', 'Pomegranate', 'Lychee'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertX:',xItem);
  newStory = newStory.replace(':insertY:',yItem);
  newStory = newStory.replace(':insertZ:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Name',name);
  }

  if(customFruit.value !== '') {
    const fruit = customFruit.value;
    newStory = newStory.replace('Fruit',fruit);
  }

  if(customDiet.value !== '') {
    const diet = customDiet.value;
    newStory = newStory.replace('Diet',diet);
  }


  console.log( newStory );

  story.textContent = newStory;
  story.style.visibility = 'visible';
}



// Let carousel work

$('.carousel').carousel()

// Hide forms after submit

$(document).ready(function() {
    $("#myform").submit(function(e) {
        $("#first").hide();
        $("#second").show();
    });
});
