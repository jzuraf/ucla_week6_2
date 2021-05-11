function displayJuice() {
  var output = document.getElementById("output");
  output.style.display = "block";
}

const customName = document.getElementById('customName');
const customFruit = document.getElementById('customFruit');
const customDiet = document.getElementById('customDiet');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "This delicious Fruit juice was made personally for Name! It's made with 100% Organic and locally-grown, fresh ingredients. What's inside: Fruit, Diet, :insertX:, :insertY:, and :insertZ:.";
let insertX = ['Raspberry','Strawberry','Blueberry','Blackberry', 'Cranberry'];
let insertY = ['Orange','Lemon','Lime','Tangerine', 'Grapefruit', 'Clementine'];
let insertZ = ['Papaya','Mango','Peach','Pineapple', 'Pomegranate', 'Lychee'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customNameA.value;
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



  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
}
