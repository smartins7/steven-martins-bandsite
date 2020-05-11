// Store DOM elements in variables in order to add eventListeners

const commentsList = document.getElementById("comments-list");
const commentsForm = document.getElementById("comments-form");

// Data Coming From API to create previous comments

let commentArray = [];

const loadComments = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=d38f29e0-410e-410e-82cb-0dadaec9d27e"
    )
    .then((response) => {
      commentArray = response.data;
      console.table(commentArray);
      listComments(commentArray);
    })
    .catch((err) => console.log(err));
};
loadComments();

// List comments by looping through comments array and creating dom elements

function listComments(comments) {
  console.log(comments);
  commentsList.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    console.log(comments[i]);
    //creating li to append and adding class
    const commentsItem = document.createElement("li");
    commentsItem.classList.add("comments-list__item");

    //creating div to append and adding class
    const commentsNameWrapper = document.createElement("div");
    commentsNameWrapper.classList.add("comments-list__name-wrapper");

    //creating h2 to append and adding class
    const commentsNameVal = comments[i].name;
    const commentsNameElem = document.createElement("h2");
    commentsNameElem.innerText = commentsNameVal;
    commentsItem.classList.add("comments-list__name");

    //creating div to append and adding class
    const commentsTimestampWrapper = document.createElement("div");
    commentsTimestampWrapper.classList.add("comments-list__date-wrapper");

    //creating h4 to append and adding class
    const commentsTimestampVal = comments[i].timestamp;
    const commentsTimestampElem = document.createElement("h4");
    commentsTimestampElem.innerText = commentsTimestampVal;
    commentsTimestampElem.innerHTML = "05/10/2020";
    commentsItem.classList.add("comments-list__date");

    //creating div to append and adding class
    const commentsImageWrapper = document.createElement("div");
    commentsImageWrapper.classList.add("comments-list__image-wrapper");

    //creating img(profile picture) to append and adding class
    const commentsImageVal = comments[i].image;
    const commentsImageElem = document.createElement("img");
    commentsImageElem.innerText = commentsImageVal;
    commentsImageElem.src = "././assets/icons/PNG/grey.png";
    commentsImageElem.setAttribute("width", "45px");
    commentsImageElem.setAttribute("height", "45px");
    commentsImageElem.setAttribute("alt", "User Display Picture");
    commentsItem.classList.add("comments-list__image");

    //creating div to append and adding class
    const commentsCommentWrapper = document.createElement("div");
    commentsCommentWrapper.classList.add("comments-list__content-wrapper");

    //creating h4 to append and adding class
    const commentsCommentVal = comments[i].comment;
    const commentsCommentElem = document.createElement("h4");
    commentsCommentElem.innerText = commentsCommentVal;
    commentsItem.classList.add("comments-list__content");

    //Adding the h2 to the wrapper div
    commentsNameWrapper.appendChild(commentsNameElem);
    commentsItem.appendChild(commentsNameWrapper);

    //Adding the h4 to the wrapper div
    commentsTimestampWrapper.appendChild(commentsTimestampElem);
    commentsItem.appendChild(commentsTimestampWrapper);

    //Adding the img to the wrapper div
    commentsImageWrapper.appendChild(commentsImageElem);
    commentsItem.appendChild(commentsImageWrapper);

    //Adding the h4 to the wrapper div
    commentsCommentWrapper.appendChild(commentsCommentElem);
    commentsItem.appendChild(commentsCommentWrapper);

    commentsList.appendChild(commentsItem);
  }
}

// Event listener and generating new comment to be stored in backend

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentsNameVal = event.target.commentsName.value;
  const commentsCommentVal = event.target.commentsComment.value;
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=d38f29e0-410e-410e-82cb-0dadaec9d27e",
      {
        name: commentsNameVal,
        comment: commentsCommentVal,
      }
    )
    .then((response) => {
      const newMessage = response.data;
      commentArray.unshift(newMessage);
      const sortedComments = commentArray.sort((commentOne, commentTwo) => {
        return commentTwo.timestamp - commentOne.timestamp;
      });
      listComments(sortedComments);
    })
    .catch((err) => console.log(err));

  event.target.reset();
});
