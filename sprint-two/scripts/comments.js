// "use strict";   <--what is this?

// store DOM elements in variables in order to add eventListeners
const commentsList = document.getElementById("comments-list");
const commentsForm = document.getElementById("comments-form");
const commentsCount = document.querySelector(".comments-section__count");
const commentsSortNameInput = document.getElementById("comments-sort-name");
const commentsSortContentInput = document.getElementById(
  "comments-sort-content"
);

// event listeners
commentsSortNameInput.addEventListener("change", handleProductSortName);
commentsSortContentInput.addEventListener("change", handleProductSortContent);
commentsForm.addEventListener("submit", displayComment);

const products = [
  {
    name: "Micheal Lyons",
    // date: "12 / 18 / 2018"
    content:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    //   date: "12 / 12 / 2018"
    content:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    //   date: "11/15/2018"
    content:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

// list products by looping through products array and creating dom elements
function listProducts(productArray) {
  commentsList.innerHTML = "";

  for (let i = 0; i < productArray.length; i++) {
    const productItem = document.createElement("li");

    const commentsNameVal = products[i].name;
    const commentsNameElem = document.createElement("h2");
    commentsNameElem.innerText = commentsNameVal;

    //   const commentsDateVal = products[i].date;
    //   const commentsDateElem = document.createElement("h4");
    //   commentsDateElem.innerText = commentsDateVal;

    const commentsContentVal = products[i].content;
    const commentsContentElem = document.createElement("h4");
    commentsContentElem.innerText = commentsContentVal;

    productItem.appendChild(commentsNameElem);
    //   productItem.appendChild(commentsDateElem);
    productItem.appendChild(commentsContentElem);

    commentsList.appendChild(productItem);

    commentsCount.innerText = productArray.length;
  }
}

/**
 * sort by name, checkbox on change
 */
function handleProductSortName(event) {
  if (event.target.checked) {
    products.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    });
  } else {
    products.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (b.name > a.name) return 1;
      return 0;
    });
  }

  listProducts(products);
}

/**
 * sort by content,  checkbox on change
 */
function handleProductSortContent(event) {
  if (event.target.checked) {
    products.sort(function (a, b) {
      return a.content - b.content;
    });
  } else {
    products.sort(function (a, b) {
      return b.content - a.content;
    });
  }

  listProducts(products);
}

/**
 * create new comment
 */
function displayComment(event) {
  event.preventDefault();
  const commentsNameVal = event.target.commentsName.value;
  const commentsContentVal = event.target.commentsContent.value;
  if (commentsNameVal !== "" && commentsContentVal !== "") {
    products.unshift({
      name: commentsNameVal,
      content: commentsContentVal,
    });
    listProducts(products);
  } else {
    alert("please add your name and comment");
  }
}

/**
 * Initialize application            //<-- what's this?
 */
(function init() {
  listProducts(products);
})(); // IIFE
