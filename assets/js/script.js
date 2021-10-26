
// DEPENDENCIES ============================
var movieSearch = $("#movie-search");
var generateButton = $("#generate-button");
console.log(movieSearch);
console.log(generateButton);

// Watchmode API
fetch("https://watchmode.p.rapidapi.com/sources/?types=sub%2Cfree&regions=US%2CCA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "watchmode.p.rapidapi.com",
		"x-rapidapi-key": "e6b61b06acmsh9f6def52697ec71p1fb2acjsn1e7a6eefdc13"
	}
})
.then(response => {
	console.log(response.status);
})
.catch(err => {
	console.error(err);
});

