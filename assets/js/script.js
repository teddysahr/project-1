// Data-Imdb API

fetch("https://data-imdb1.p.rapidapi.com/movie/order/upcoming/?page_size=50", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
    "x-rapidapi-key": "d364edfff6msh01f109871a1d8c0p1303aejsnc909ac339a37",
  },
})
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })

  .catch((err) => {
    console.error(err);
  });
