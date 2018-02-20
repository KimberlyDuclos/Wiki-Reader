var searchQuery;

$(document).ready(function() {
    document.getElementById("textInput").hidden=true;

    $('#search').keydown(function(e) {
        if (e.keyCode == 13) {
            $('#search').submit();
            searchQuery = document.getElementById('textInput').value;
            $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
            {
                "action":"query",
                "format":"json",
                "srsearch":searchQuery,
                "list":"search"
            }).done(function(data) {
                document.getElementById("title").value= JSON.stringify(data);
                document.getElementById("snippet").value=search[0].snippet;
                document.getElementById("snippet").value=data[3][1];
            });
        }
    });
});    

function toggleHide() {
    document.getElementById("icon").hidden=true;
    document.getElementById("textInput").hidden=false;
    document.getElementById("searchTxt").hidden=true;
}