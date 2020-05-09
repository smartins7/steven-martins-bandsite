// // Comments
// // Get
// // https://project-1-api.herokuapp.com/comments?api_key=steven

const createComments = (input) => {
  const commentsText = document.createElement("li");
  commentsText.textContent = input;
  commentsText.className = "comments-list__item";
  return commentsText;
};
const commentsList = document.querySelector(".comments__container");
const generateComments = (input) => {
  container.appendChild(createComments(input));
};
const loadComments = () => {
  axios
    .get("https:project-1-api.herokuapp.com/comments?api_key=steven")
    .then((response) => {
      const commentsArray = response.data;
      generateShow(`"${commentsArray}"`);
    })
    .catch((err) => console.log(err));
};
loadComments();

//do the same for PUT?
// // Put
// // https://project-1-api.herokuapp.com/comments?api_key=steven

const loadMessage = () => {
  axios
    .post("https:project-1-api.herokuapp.com/comments?api_key=steven")
    .then((response) => {
      const newMessage = response.data;
      generateMessage(newMessage);
    })
    .catch((err) => console.log(err));
};
loadComments();

// // Shows
// // Get
// // https://project-1-api.herokuapp.com/showdates?api_key=steven
const createShow = (input) => {
  const showText = document.createElement("li");
  showText.textContent = input.place;
  showText.className = "concert-list__item";
  return showText;
};
const container = document.querySelector(".shows_container");

const generateShow = (input) => {
  console.log("generateShow", input);

  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    // document.append(input[i]);
    container.appendChild(createShow(input[i]));
  }
};
const loadShows = () => {
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=steven")
    .then((response) => {
      const showsArray = response.data;
      generateShow(showsArray);
      // input = response.data.all;
      // `"${index + 1} ${show.date} ${show.place} ${show.location}"`);
    })
    .catch((err) => console.log(err));
};
loadShows();
