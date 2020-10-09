function printResults() {
    let query = document.getElementsByClassName("searchbar")[0].value;
    fetch("http://www.omdbapi.com/?apikey=3d1c8ffb&s=" + query, {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("results").innerHTML = "";
            data.Search.map((entry) => {
                document.getElementById("results").innerHTML += `
                <div class="entry">
                <h2>
                    ${entry.Title}
                </h2>
                ${entry.Year}
                <br>
                </div>
                `;
            });
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
}