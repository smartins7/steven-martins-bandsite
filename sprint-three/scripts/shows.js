// Data Coming From API
const loadShows = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/showdates?api_key=cd57cf5f-84df-4483-a769-8dd1c9639a6e"
    )
    .then((response) => {
      const showsArray = response.data;
      console.table(showsArray);
      constructShows(showsArray);
    })
    .catch((err) => console.log(err));
};
loadShows();

//

const container = document.querySelector(".shows_container");

function constructShows(shows) {
  for (show of shows) {
    //creating li to append and adding class
    const showsConcert = document.createElement("li");
    showsConcert.classList.add("concert-list__item");

    //creating div to append and adding class
    const showsDateWrapper = document.createElement("div");
    showsDateWrapper.classList.add("concert-list__date-wrapper");

    //creating h4 to append and adding class
    const showsConcertDate = document.createElement("h4");
    showsConcertDate.innerHTML = show.date;
    showsConcertDate.classList.add("concert-list__date");

    //creating div to append and adding class
    const showsPlaceWrapper = document.createElement("div");
    showsPlaceWrapper.classList.add("concert-list__venue-wrapper");

    //creating h4 to append and adding class
    const showsConcertPlace = document.createElement("h4");
    showsConcertPlace.innerHTML = show.place;
    showsConcertPlace.classList.add("concert-list__venue");

    //creating div to append and adding class
    const showsLocationWrapper = document.createElement("div");
    showsLocationWrapper.classList.add("concert-list__location-wrapper");

    //creating h4 to append and adding class
    const showsConcertLocation = document.createElement("h4");
    showsConcertLocation.innerHTML = show.location;
    showsConcertLocation.classList.add("concert-list__location");

    //creating div to append and adding class
    const showsBtnWrapper = document.createElement("div");
    showsBtnWrapper.classList.add("concert-list__btn-wrapper");

    //creating button to append and adding class
    const showsConcertBtn = document.createElement("button");
    showsConcertBtn.innerHTML = "Buy Tickets";
    showsConcertBtn.classList.add("concert-list__btn");

    //Adding the h4 to the wrapper div
    showsDateWrapper.appendChild(showsConcertDate);
    showsConcert.appendChild(showsDateWrapper);

    //Adding the h4 to the wrapper div
    showsPlaceWrapper.appendChild(showsConcertPlace);
    showsConcert.appendChild(showsPlaceWrapper);

    //Adding the h4 to the wrapper div
    showsLocationWrapper.appendChild(showsConcertLocation);
    showsConcert.appendChild(showsLocationWrapper);

    //Adding the button to the wrapper div
    showsBtnWrapper.appendChild(showsConcertBtn);
    showsConcert.appendChild(showsBtnWrapper);

    container.appendChild(showsConcert);
  }
}
