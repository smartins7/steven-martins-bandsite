const shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
    button: "BUY TICKETS",
  },
];

console.table(shows);

const container = document.querySelector(".container");

function constructShows(shows) {
  for (show of shows) {
    const showsConcert = document.createElement("div");
    showsConcert.classList.add("showsConcert");

    const showsConcertDate = document.createElement("h4");
    showsConcertDate.innerHTML = show.showsConcertDate;

    const showsConcertVenue = document.createElement("h4");
    showsConcertVenue.innerHTML = show.showsConcertVenue;

    const showsConcertLocation = document.createElement("h4");
    showsConcertLocation.innerHTML = show.showsConcertLocation;

    const showsConcertBtn = document.createElement("button");
    showsConcertBtn.innerHTML = show.showsConcertBtn;

    showsConcert.appendChild(date);
    showsConcert.appendChild(venue);
    showsConcert.appendChild(location);
    showsConcert.appendChild(button);

    container.appendChild(showsConcert);

    // return container;
  }
}

constructShows(shows);
