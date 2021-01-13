// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
//  querySelector and querySelectorAll both use CSS SELECTORS

// querySelector return null or exactly one HTML element
// querySelectorAll returns a NodeList
// a NodeList is an array like object
// use bracket notation to access elements, can you use .length
// can also use .forEach()

// A- finding across the entire DOM
const header = document.querySelector("header");
//console.log({header});
const logoTitle = document.querySelector("#logoTitle");
//console.log("logoTitle", logoTitle);
//const logoTitle = document.querySelector('.heading')
const firstCard = document.querySelector('.card');
//console.log("first card", firstCard);
const dog = document.querySelector(".dog");
//console.log("dog", dog);
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
//console.log("firstCardImage", imageFirstCard);
const titleFirstCard = firstCard.querySelector('.card-title');
const subtitleFirstCard = firstCard.querySelector('.card-subtitle');
const textFirstCard = firstCard.querySelector('.card-text');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
//console.log("link1FirstCard", link1FirstCard);
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"
const allAnchors = document.querySelectorAll(".menu-item");
//console.log("allAnchors", allAnchors);

const printElem = elem => {
    console.log(elem.textContent);
}
// allAnchors.forEach(elem => {
//     console.log(elem.textContent);
// });

const anchorsRealArray = Array.from(allAnchors);

function findHome(elem) {
    if (elem.textContent === "Home") {
        return elem
    }
}
console.log(anchorsRealArray.filter(findHome));

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
imageFirstCard.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
//imageFirstCard.setAttribute("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*");
titleFirstCard.textContent = "Dogs are great";

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
//firstCard.className = "green-text card";
console.log(firstCard.classList);
firstCard.classList.add("green-text")
//firstCard.classList.remove("green-text")
firstCard.classList.toggle("green-text");

firstCard.style.color = "purple"; // AVOID



// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const newA = document.createElement("a");
newA.textContent = "Help";
document.querySelector("nav").appendChild(newA);


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const cardGroup = document.querySelector(".card-group");
cardGroup.appendChild(firstCard);

const cardClone = firstCard.cloneNode(true);
cardGroup.appendChild(cardClone);
cardGroup.appendChild(cardClone); // does nothing
cardGroup.appendChild(cardClone); // does nothing
cardGroup.appendChild(cardClone); // does nothing



// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
