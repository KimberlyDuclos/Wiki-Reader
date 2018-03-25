var searchQuery;

// start when page loaded
$(document).ready(function() {
    // set text box to hidden until search icon is clicked
    document.getElementById("textInput").hidden=true;
    // enable search with enter key press
    $('#search').submit(function(e) {
        e.preventDefault()
    
        searchQuery = document.getElementById('textInput').value;
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          "action":"query",
          "format":"json",
          "srsearch":searchQuery,
          "list":"search"
        }).done(function(data) {
          console.log(JSON.stringify(data))
            document.getElementById("title").value= JSON.stringify(data);
            document.getElementById("snippet").value=search[0].snippet;
            document.getElementById("snippet").value=data[3][1];
        })
});
    });
// initially set search icon and search box to hidden, with
function toggleHide() {
    document.getElementById("icon").hidden=true;
    document.getElementById("textInput").hidden=false;
    document.getElementById("searchTxt").hidden=true;
}