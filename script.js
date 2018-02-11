var searchQuery, title, snippet;

$(document).ready(function(){
    $("button").click(function(){
        searchQuery = document.getElementsByName('input')[0].value
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery, function(json) {
            document.getElementById("title").innerHTML = search[0].title;
            document.getElementById("snippet").innerHTML = search[0].snippet;    
        }); 
    });
});