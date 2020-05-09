// Data Coming From API
const loadShows = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/showdates?api_key=fef8ca49-1d87-458a-81a6-c89f287cabcd"
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
    const showsConcert = document.createElement("li");
    showsConcert.classList.add("concert-list__item");

    const showsDateWrapper = document.createElement("div");
    showsDateWrapper.classList.add("concert-list__date-wrapper");

    const showsConcertDate = document.createElement("h4");
    showsConcertDate.innerHTML = show.date;
    showsConcertDate.classList.add("concert-list__date");

    const showsPlaceWrapper = document.createElement("div");
    showsPlaceWrapper.classList.add("concert-list__venue-wrapper");

    const showsConcertPlace = document.createElement("h4");
    showsConcertPlace.innerHTML = show.place;
    showsConcertPlace.classList.add("concert-list__venue");

    const showsLocationWrapper = document.createElement("div");
    showsLocationWrapper.classList.add("concert-list__location-wrapper");

    const showsConcertLocation = document.createElement("h4");
    showsConcertLocation.innerHTML = show.location;
    showsConcertLocation.classList.add("concert-list__location");

    const showsBtnWrapper = document.createElement("div");
    showsBtnWrapper.classList.add("concert-list__btn-wrapper");

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
