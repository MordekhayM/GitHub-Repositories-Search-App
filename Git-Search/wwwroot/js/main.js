

// This function will get the search input from the user, send query to the GitHub API, receive the JSON data
// and render the results as an output.

function RepositorySearch() {
    var search = document.getElementById("search").value;
    document.getElementById('results').innerHTML = "";
	$.ajax({
		url: "https://api.github.com/search/repositories?q=" + search,
		dataType: "json",
		success: function (data) {
            for (let i = 0; i < data.items.length; i++) {
                var myjson = JSON.stringify(data.items[i]);
                myjson = myjson.replace(/"/g, "¶");
                results.innerHTML += "<h2>" + data.items[i].name + "<h2>";
                results.innerHTML += "<h3>" + data.items[i].description + "<h3>";
                results.innerHTML += ("<img src='" + data.items[i].owner.avatar_url + "' />");
                results.innerHTML += "<h2> <input class='Bookmark-btn' type='button' value='Bookmark' onClick='SaveToSession(\"" + myjson + "\")'/>​<h2>";
				results.innerHTML += "<hr>";
			}
		},
		type: 'GET'
	});
}

// This function gets the JSON as a string, convert it back to its standard form, and saves it on 
// The Session-Storage.

function SaveToSession(json) {
    var Repository = "Repository";
    json = json.replace(/¶/g, "\"");
    if (sessionStorage.length == 0) {
        sessionStorage.setItem(Repository,json);
        swal("Repository Added To Session Storage");
    } else {
        sessionStorage.setItem(Repository + (sessionStorage.length).toString(),json);
        swal("Repository Added To Session Storage");
    }	
}
document.getElementById('button').addEventListener('click', RepositorySearch, false);
