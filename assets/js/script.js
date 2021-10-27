// DEPENDENCIES ============================
var movieSearch = $("#movie-search");
var generateButton = $("#generate-button");
var submitBtn = $("#search-button")

console.log(movieSearch);
console.log(generateButton);


submitBtn.on('click', function(){
    var input = document.getElementById("movie-search").value;
    console.log(input)
  // Watchmode API - For input --> id
    fetch(`https://watchmode.p.rapidapi.com/search/?search_field=name&search_value=${input}&types=tv`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13"
	}
})
.then(response => {
	console.log(response);
    return response.json();
})
.then(function (data) {
    var movieId = data.title_results[0].id
    console.log(movieId)
	getMovieInfo()
})


.catch(err => {
	console.error(err);
});

})
function getMovieInfo(){
	fetch("https://watchmode.p.rapidapi.com/title/3173903/sources/", {
	"method": "GET",
	"headers": {
		"regions": "US",
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13"
	}
})
.then(response => {
	console.log(response);
	return response.json();
})
.then(function(data){
	
})
.catch(err => {
	console.error(err);
});
}


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

