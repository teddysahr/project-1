// DEPENDENCIES ============================
var movieSearch = $("#movie-search");
var generateButton = $("#generate-button");
var submitBtn = $("#search-button");
var resultList = $("#results-list");

console.log(movieSearch);
console.log(generateButton);

submitBtn.on("click", function () {
  clearLinks();
  // removeAllChildNodes()
  var input = document.getElementById("movie-search").value;
  console.log(input);
  // Watchmode API - For input --> id
  fetch(
    `https://watchmode.p.rapidapi.com/search/?search_field=name&search_value=${input}&types=movie`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "watchmode.p.rapidapi.com",
        "x-rapidapi-key": "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13",
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      var movieId = data.title_results[0].id;
      console.log(movieId);
      getMovieInfo(movieId);
      function getMovieInfo(movieId) {
        fetch(`https://watchmode.p.rapidapi.com/title/${movieId}/sources/`, {
          method: "GET",
          headers: {
            regions: "US",
            "x-rapidapi-host": "watchmode.p.rapidapi.com",
            "x-rapidapi-key":
              "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13",
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then(function (data) {
            var movieUrl = data.filter(function (data) {
              if (data.type === "sub" && data.region === "US") return true;
              else return false;
            });
            console.log(movieUrl.length)
            if (movieUrl.length === 0) {
              var noLink = document.createElement('li')
              noLink.textContent = "Sorry, we couldn't find a streaming service for this title"
              resultList.append(noLink)
            }
            for (let i = 0; i < movieUrl.length; i++) {
				    console.log(movieUrl[i])
              var listItem = document.createElement("li");
              var listLink = document.createElement("a");
              listItem.appendChild(listLink);
              listLink.setAttribute("href", movieUrl[i].web_url);
              listLink.textContent = movieUrl[i].web_url;
              resultList.append(listItem);
            }
          });
      }
    })

    .catch((err) => {
      console.error(err);
    });
});
// function removeAllChildNodes(resultList) {
//     while (resultList.listItem) {
//         resultList.removeChild(listItem);
//     }
// }
function clearLinks() {
  resultList.empty();
  console.log(resultList);
}
// function getMovieInfo(movieId){
// 	fetch(`https://watchmode.p.rapidapi.com/title/${movieId}/sources/`, {
// 	"method": "GET",
// 	"headers": {
// 		"regions": "US",
// 		"x-rapidapi-host": "watchmode.p.rapidapi.com",
// 		"x-rapidapi-key": "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13"
// 	}
// })
// .then(response => {
// 	console.log(response);
// 	return response.json();
// })
// .then(function(data){
// 	console.log(data.type)
// })
// .catch(err => {
// 	console.error(err);
// });
// }

// Data-Imdb API - For random movie
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
