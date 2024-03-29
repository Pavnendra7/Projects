// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "person-3.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "person-4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById('person-img');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//  Set Starting Item

let currentItem = 0;

// Load initial Item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem); 
});


//  show person based on Item 

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent=item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//  Show next person 

nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson(currentItem);
})

// Show previous button

prevBtn.addEventListener('click', ()=> {
  currentItem--;
  if(currentItem<0){
    currentItem= reviews.length-1;
  }
  showPerson(currentItem);
})

// Show Random Button

randomBtn.addEventListener('click', () => {
  currentItem =  Math.floor(Math.random() * reviews.length);
 showPerson(currentItem);
})