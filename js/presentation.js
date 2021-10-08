document.querySelector("#task_1").addEventListener('click', function () {
    document.querySelector(".muscle_cangaroo").classList.add("appear");
    document.querySelector(".action").textContent = "You clicked that button!"
    document.querySelector(".muscle_cangaroo").addEventListener("animationend", appearSpeech);
})

function appearSpeech() {
    document.querySelector(".speech_bubble").classList.remove("hidden");
}

document.querySelector("#hover_over1").addEventListener('mouseover', function () {
    document.querySelector(".demo_article").style.background = '#8bec5e';
})

document.querySelector("#hover_over1").addEventListener('mouseout', function () {
    document.querySelector(".demo_article").style.background = '#fff';
})

document.querySelector("#hover_over2").addEventListener('mouseover', function () {
    document.querySelector(".tasks_list").style.background = 'hotpink';
})

document.querySelector("#hover_over2").addEventListener('mouseout', function () {
    document.querySelector(".tasks_list").style.background = '#fff';
})

document.querySelector("#hover_over3").addEventListener('mouseover', function () {
    document.querySelector("li.demo_list").style.background = 'yellow';
})

document.querySelector("#hover_over3").addEventListener('mouseout', function () {
    document.querySelector("li.demo_list").style.background = '#fff';
})

document.querySelector("#hover_over4").addEventListener('mouseover', function () {
    const items = document.querySelectorAll("li.demo_list");

    items.forEach(function (item) {
        item.style.background = 'yellow';
    })
})

document.querySelector("#hover_over4").addEventListener('mouseout', function () {
    const items = document.querySelectorAll("li.demo_list");

    items.forEach(function (item) {
        item.style.background = 'white';
    })
})

document.querySelector("#hover_over5").addEventListener('mouseover', function () {
    document.querySelector("ul.specific_select li.demo_list:nth-child(4)").style.background = '#8bec5e';
})

document.querySelector("#hover_over5").addEventListener('mouseout', function () {
    document.querySelector("ul.specific_select li.demo_list:nth-child(4)").style.background = 'white';
})

document.querySelector("#hover_over6").addEventListener('mouseover', function () {
    const items = document.querySelectorAll("ul.specific_select li.demo_list:nth-child(even)");

    items.forEach(function (item) {
        item.style.background = 'yellow';
    })
})

document.querySelector("#hover_over6").addEventListener('mouseout', function () {
    const items = document.querySelectorAll("ul.specific_select li.demo_list:nth-child(even)");

    items.forEach(function (item) {
        item.style.background = 'white';
    })
})

document.querySelector("#hover_over7").addEventListener('mouseover', function () {
    document.querySelector("ul.specific_select li.demo_list:last-child").style.background = 'hotpink';
})

document.querySelector("#hover_over7").addEventListener('mouseout', function () {
    document.querySelector("ul.specific_select li.demo_list:last-child").style.background = 'white';
})

let val;

const list = document.querySelector("ul.traversing_list");
const listItem = document.querySelector("ul.traversing_list li.demo_list");

console.log(list);

val = list;

// Get child nodes
val = list.children;
val = list.children[2].classList;
val = list.children[2].children;

// Get parent node
val = listItem.parentElement;
val = listItem.parentElement.classList;
val = listItem.parentElement.parentElement;

console.log(val);

// // Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'demo_list';

// // Add id
// li.id = "new-item"

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create the text node and append
// li.appendChild(document.createTextNode('<li class="demo_list"><a href="#"></a></li>'))

// // Create new link element
// const link = document.createElement('a');

// link.setAttribute('href', '#')

// link.appendChild(document.createTextNode('New task'))

// // Append link to li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.creating_list').appendChild(li);

// console.log(li);

// REPLACE ELEMENT

// Create an Element
const addedListItem = document.createElement('h5');
// Add id
// addedListItem.id = 'added-item';
// New text node
addedListItem.appendChild(document.createTextNode('<h5 id="added-item">I am a heading</h5>'));

//Select the existing element
const existingListItem = document.querySelector('ul.replacing_list li:nth-child(4)');

//Parent
const ulElement = document.querySelector("ul.replacing_list");

//Replace

ulElement.replaceChild(addedListItem, existingListItem);

// // REMOVE ELEMENT
// const liElement = document.querySelectorAll('li');
// const ulElem = document.querySelector('ul');

// // Remove list item

// liElement[6].remove();

// // Or

// ulElem.removeChild(liElement[6]);

// MOUSE EVENTS

const article = document.querySelector('.interactive_article');
const liveText = document.querySelector('.interactive_text');
const section = document.querySelector('.interactive_background');

article.addEventListener('mousemove', runEvent);

// Event Handler

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    liveText.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    
    console.log(e);

    section.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 200)`;
}
