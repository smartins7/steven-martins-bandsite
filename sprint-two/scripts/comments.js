// Store DOM elements in variables in order to add eventListeners

const commentsList = document.getElementById("comments-list");
const commentsForm = document.getElementById("comments-form");

// Event listeners

commentsForm.addEventListener("submit", displayComment);

const comments = [
  {
    name: "Micheal Lyons",
    date: "12 / 18 / 2018",
    content:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12 / 12 / 2018",
    content:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    content:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

// List comments by looping through comments array and creating dom elements

function listComments(commentArray) {
  commentsList.innerHTML = "";

  for (let i = 0; i < commentArray.length; i++) {
    const commentsItem = document.createElement("li");
    commentsItem.classList.add("comments-list__item");

    const commentsNameWrapper = document.createElement("div");
    commentsNameWrapper.classList.add("comments-list__name-wrapper");

    const commentsNameVal = comments[i].name;
    const commentsNameElem = document.createElement("h2");
    commentsNameElem.innerText = commentsNameVal;
    commentsItem.classList.add("comments-list__name");

    const commentsDateWrapper = document.createElement("div");
    commentsDateWrapper.classList.add("comments-list__date-wrapper");

    const commentsDateVal = comments[i].date;
    const commentsDateElem = document.createElement("h4");
    commentsDateElem.innerText = commentsDateVal;
    commentsItem.classList.add("comments-list__date");

    const commentsImageWrapper = document.createElement("div");
    commentsImageWrapper.classList.add("comments-list__image-wrapper");

    const commentsImageVal = comments[i].image;
    const commentsImageElem = document.createElement("img");
    commentsImageElem.innerText = commentsImageVal;
    commentsImageElem.src = "././assets/icons/PNG/grey.png";
    commentsImageElem.setAttribute("width", "45px");
    commentsImageElem.setAttribute("height", "45px");
    commentsImageElem.setAttribute("alt", "User Display Picture");
    commentsItem.classList.add("comments-list__image");

    const commentsContentWrapper = document.createElement("div");
    commentsContentWrapper.classList.add("comments-list__content-wrapper");

    const commentsContentVal = comments[i].content;
    const commentsContentElem = document.createElement("h4");
    commentsContentElem.innerText = commentsContentVal;
    commentsItem.classList.add("comments-list__content");

    //Adding the h2 to the wrapper div
    commentsNameWrapper.appendChild(commentsNameElem);
    commentsItem.appendChild(commentsNameWrapper);

    //Adding the h4 to the wrapper div
    commentsDateWrapper.appendChild(commentsDateElem);
    commentsItem.appendChild(commentsDateWrapper);

    //Adding the img to the wrapper div
    commentsImageWrapper.appendChild(commentsImageElem);
    commentsItem.appendChild(commentsImageWrapper);

    //Adding the h4 to the wrapper div
    commentsContentWrapper.appendChild(commentsContentElem);
    commentsItem.appendChild(commentsContentWrapper);

    commentsList.appendChild(commentsItem);
  }
}

// Create new comment

function displayComment(event) {
  event.preventDefault();
  const commentsNameVal = event.target.commentsName.value;
  const commentsContentVal = event.target.commentsContent.value;
  const commentsDateVal = "Just Now";
  if (commentsNameVal !== "" && commentsContentVal !== "") {
    comments.unshift({
      name: commentsNameVal,
      date: commentsDateVal,
      content: commentsContentVal,
    });
    commentsForm.reset();
    listComments(comments);
  } else {
    alert("please add your name and message");
  }
}

listComments(comments);
