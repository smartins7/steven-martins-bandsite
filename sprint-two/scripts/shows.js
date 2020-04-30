const shows = [
  {
    id: 1,
    Date: "Mon Dec 17 2018",
    Venue: "Ronald Lane",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
  },
  {
    id: 2,
    Date: "Tue Jul 18 2019",
    Venue: "Pier 3 East",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
  },
  {
    id: 3,
    Date: "Fri Jul 22 2019",
    Venue: "View Lounge",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
  },
  {
    id: 4,
    Date: "Sat Aug 12 2019",
    Venue: "Hyatt Agency",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
  },
  {
    id: 5,
    Date: "Fri Sep 05 2019",
    Venue: "Moscow Center",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
  },
  {
    id: 6,
    Date: "Wed Aug 11 2019",
    Venue: "Pres Club",
    Location: "San Fancisco, CA",
    Button: "Buy Tickets",
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

    //Even tried adding the extention names above and didn't work

    container.appendChild(showsConcert);

    // return container;
  }
}

constructShows(shows);
