function loadData(dataURL) {
  axios
    .get(dataURL)
    .then(function (response) {
      const data = response.data;
      console.log(data);
      //Data in this example is an array of objects. We can loop through this array in a similar way to what we did last week.
      //You can call other functions from inside of here and then pass the data array to those functions like line 13
      //constructShows(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

loadData("https://project-1-api.herokuapp.com/comments?api_key=steven");
