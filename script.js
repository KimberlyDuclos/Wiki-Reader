var searchQuery, title, snippet;

function search(){
    $(".searchBtn").on('keyup', function (e) {
        searchQuery = document.getElementById('textInput').value;
            $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery, function(json) {
                document.getElementById("title").innerHTML = search[0].title;
                document.getElementById("snippet").innerHTML = search[0].snippet;    
            });
        }
    });
}