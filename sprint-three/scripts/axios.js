// // Comments
// // Get
// // https://project-1-api.herokuapp.com/comments?api_key=steven

// const commentsPromiseGet = axios.get(
//   "https://project-1-api.herokuapp.com/comments?api_key=steven"
// );
// const commentsUL = document.querySelector(".comments");
// promise
//   .then((response) => {
//     let output = "";

//     // Do I need to put more parameters on this function? Don't think so but double check!
//     response.data.forEach((comments, index) => {
//       output =
//         output +
//         `<li class="show__list-item">${comments.name} ${comments.comment} ${
//           index + 1
//         } </li>`;
//     });
//     commentsUL.innerHTML = output;
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(commentsPromiseGet);

// // Comments
// // Post
// // https://project-1-api.herokuapp.com/comments?api_key=steven

// const commentsPromisePost = axios.post(
//   "https://project-1-api.herokuapp.com/comments?api_key=steven"
// );
// const commentsUL = document.querySelector(".comments");
// promise
//   .then((response) => {
//     let output = "";

//     // Do I need to put more parameters on this function? Don't think so but double check!
//     response.data.forEach((comments, index) => {
//       output =
//         output +
//         `<li class="show__list-item">${comments.name} ${comments.comment} ${
//           index + 1
//         } </li>`;
//     });
//     commentsUL.innerHTML = output;
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(commentsPromisePost);

// // Comments
// // Put
// // https://project-1-api.herokuapp.com/comments?api_key=steven

// const commentsPromisePut = axios.put(
//   "https://project-1-api.herokuapp.com/comments?api_key=steven"
// );
// const commentsUL = document.querySelector(".comments");
// promise
//   .then((response) => {
//     let output = "";

//     // Do I need to put more parameters on this function? Don't think so but double check!
//     response.data.forEach((comments, index) => {
//       output =
//         output +
//         `<li class="show__list-item">${comments.name} ${comments.comment} ${
//           index + 1
//         } ${comments.likes} ${comments.timestamp}</li>`;
//     });
//     commentsUL.innerHTML = output;
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(commentsPromisePut);

// // Comments
// // Delete
// // https://project-1-api.herokuapp.com/comments?api_key=steven

// const commentsPromiseDelete = axios.delete(
//   "https://project-1-api.herokuapp.com/comments?api_key=steven"
// );
// const commentsUL = document.querySelector(".comments");
// promise
//   .then((response) => {
//     let output = "";

//     // Do I need to put more parameters on this function? Don't think so but double check!
//     response.data.forEach((comments, index) => {
//       output =
//         output +
//         `<li class="show__list-item">${comments.name} ${comments.comment} ${
//           index + 1
//         } ${comments.likes} ${comments.timestamp}</li>`;
//     });
//     commentsUL.innerHTML = output;
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(commentsPromiseDelete);

// // Shows
// // Get
// // https://project-1-api.herokuapp.com/showdates?api_key=steven

// const showPromise = axios.get(
//   "https://project-1-api.herokuapp.com/showdates?api_key=steven"
// );
// console.log(showPromise);
// const showsUL = document.querySelector(".shows");
// promise
//   .then((response) => {
//     let output = "";

//     // Do I need to put more parameters on this function? Don't think so but double check!
//     response.data.forEach((show, index) => {
//       output =
//         output +
//         `<li class="show__list-item">${index + 1} ${show.date} ${show.place} ${
//           show.location
//         }</li>`;
//     });
//     showsUL.innerHTML = output;
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// console.log(showPromise);

// // Comments
// // Get
// // https://project-1-api.herokuapp.com/comments?api_key=steven

// const createComments = (input) => {
//   const commentsText = document.createElement("li");
//   commentsText.textContent = input;
//   commentsText.className = "comments-list__item";
//   return commentsText;
// };

// const commentsList = document.querySelector(".comments__container");
// const generateComments = (input) => {
//   container.appendChild(createComments(input));

//   const loadComments = () => {
//     axios
//       .get("https:project-1-api.herokuapp.com/comments?api_key=steven", {
//         headers: {
//           Accept: "text/plain",
//         },
//       })
//       .then((response) => {
//         const commentsArray = response.data;
//         generateShow(`"${commentsArray}"`);
//         // `"${index + 1} ${comments.name} ${comments.comment}"`);
//       })
//       .catch((err) => console.log(err));
//   };

//   loadComments();

//   //do the same for PUT?

// // // Shows
// // // Get
// // // https://project-1-api.herokuapp.com/showdates?api_key=steven

// const createShow = (input) => {
//   const showText = document.createElement("li");
//   showText.textContent = input;
//   showText.className = "concert-list__item";
//   return showText;
// };

// const container = document.querySelector(".shows_container");
// const generateShow = (input) => {
//   container.appendChild(createShow(input));

// const loadShows = () => {
//   axios
//     .get("https://project-1-api.herokuapp.com/showdates?api_key=steven", {
//       headers: {
//         Accept: "text/plain",
//       },
//     })
//     .then((response) => {
//       const showsArray = response.data;
//       generateShow(`"${showsArray}"`);
//       // input = response.data.all;
//         // `"${index + 1} ${show.date} ${show.place} ${show.location}"`);
//     })
//     .catch((err) => console.log(err));
// };

//   loadShows();

//Ignore above for now

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
      generateMessage(`"${newMessage}"`);
    })
    .catch((err) => console.log(err));
};
loadComments();

// // Shows
// // Get
// // https://project-1-api.herokuapp.com/showdates?api_key=steven
const createShow = (input) => {
  const showText = document.createElement("li");
  showText.textContent = input;
  showText.className = "concert-list__item";
  return showText;
};
const container = document.querySelector(".shows_container");
const generateShow = (input) => {
  container.appendChild(createShow(input));
  for (let i = 0; i < input.length; i++) {
    document.append(input[i]);
    //  return input[i]; ???
  }
};
const loadShows = () => {
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=steven")
    .then((response) => {
      const showsArray = response.data;
      generateShow(`${showsArray}`);
      // input = response.data.all;
      // `"${index + 1} ${show.date} ${show.place} ${show.location}"`);
    })
    .catch((err) => console.log(err));
};
loadShows();
