
// DEPENDENCIES ============================
var movieSearch = $("#movie-search");
var generateButton = $("#generate-button");
var submitBtn = $("#search-button")

console.log(movieSearch);
console.log(generateButton);
submitBtn.on('click', function(){
    var input = document.getElementById("movie-search").value;
    console.log(input)
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
    console.log(data.title_results[0].id)
})

.catch(err => {
	console.error(err);
});

})