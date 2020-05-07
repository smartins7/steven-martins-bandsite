const shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

console.table(shows);

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

    const showsVenueWrapper = document.createElement("div");
    showsVenueWrapper.classList.add("concert-list__venue-wrapper");

    const showsConcertVenue = document.createElement("h4");
    showsConcertVenue.innerHTML = show.venue;
    showsConcertVenue.classList.add("concert-list__venue");

    const showsLocationWrapper = document.createElement("div");
    showsLocationWrapper.classList.add("concert-list__location-wrapper");

    const showsConcertLocation = document.createElement("h4");
    showsConcertLocation.innerHTML = show.location;
    showsConcertLocation.classList.add("concert-list__location");

    const showsBtnWrapper = document.createElement("div");
    showsBtnWrapper.classList.add("concert-list__btn-wrapper");

    const showsConcertBtn = document.createElement("button");
    showsConcertBtn.innerHTML = show.button;
    showsConcertBtn.classList.add("concert-list__btn");

    //Adding the h4 to the wrapper div
    showsDateWrapper.appendChild(showsConcertDate);
    showsConcert.appendChild(showsDateWrapper);

    //Adding the h4 to the wrapper div
    showsVenueWrapper.appendChild(showsConcertVenue);
    showsConcert.appendChild(showsVenueWrapper);

    //Adding the h4 to the wrapper div
    showsLocationWrapper.appendChild(showsConcertLocation);
    showsConcert.appendChild(showsLocationWrapper);

    //Adding the button to the wrapper div
    showsBtnWrapper.appendChild(showsConcertBtn);
    showsConcert.appendChild(showsBtnWrapper);

    container.appendChild(showsConcert);
  }
}

constructShows(shows);
