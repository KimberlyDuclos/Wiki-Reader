/* var searchQuery, title, snippet;

function search(){
    $(".searchBtn").on('keyup', function (e) {
        searchQuery = document.getElementById('textInput').value;
            $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery, function(json) {
                document.getElementById("title").innerHTML = search[0].title;
                document.getElementById("snippet").innerHTML = search[0].snippet;    
            });
        });
    }; */

$(document).ready(function() {
    document.getElementById("textInput").hidden=true;

    $('#search').keydown(function(e) {
        if (e.keyCode == 13) {
            $('#search').submit();
            alert("working");
        }
    });
});    

function toggleHide() {
    document.getElementById("icon").hidden=true;
    document.getElementById("textInput").hidden=false;
    document.getElementById("searchTxt").hidden=true;
}