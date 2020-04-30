// "use strict";   <--what is this?

// store DOM elements in variables in order to add eventListeners
const commentsList = document.getElementById("comments-list");
const commentsForm = document.getElementById("comments-form");
const commentsCount = document.querySelector(".comments-section__count");

// event listeners

commentsForm.addEventListener("submit", displayComment);

const comments = [
  {
    name: "Micheal Lyons",
    date: new Date("12 / 18 / 2018"),
    content:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: new Date("12 / 12 / 2018"),
    content:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: new Date("11/15/2018"),
    content:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

// list comments by looping through comments array and creating dom elements
function listComments(commentArray) {
  commentsList.innerHTML = "";

  for (let i = 0; i < commentArray.length; i++) {
    const commentItem = document.createElement("li");

    const commentsNameVal = comments[i].name;
    const commentsNameElem = document.createElement("h2");
    commentsNameElem.innerText = commentsNameVal;

    const commentsDateVal = comments[i].date;
    const commentsDateElem = document.createElement("h4");
    commentsDateElem.innerText = commentsDateVal;

    const commentsContentVal = comments[i].content;
    const commentsContentElem = document.createElement("h4");
    commentsContentElem.innerText = commentsContentVal;

    commentItem.appendChild(commentsNameElem);
    commentItem.appendChild(commentsDateElem);
    commentItem.appendChild(commentsContentElem);

    commentsList.appendChild(commentItem);

    commentsCount.innerText = commentArray.length;
  }
}

/**
 * create new comment
 */
function displayComment(event) {
  event.preventDefault();
  const commentsNameVal = event.target.commentsName.value;
  const commentsContentVal = event.target.commentsContent.value;
  // const commentsContentVal = new Date();
  if (commentsNameVal !== "" && commentsContentVal !== "") {
    comments.unshift({
      name: commentsNameVal,
      //add timestamp here?
      content: commentsContentVal,
      // date: commentsDateVal,
    });
    listComments(comments);
  } else {
    alert("please add your name and comment");
  }
}

/**
 * Initialize application            //<-- what's this?
 */
(function init() {
  listComments(comments);
})(); // IIFE
