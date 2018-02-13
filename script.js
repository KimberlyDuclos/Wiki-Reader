var searchQuery;

/*function search(){
    
};*/

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
                document.getElementById("title").innerHTML= JSON.stringify(data);
                document.getElementById("snippet").innerHTML=search[0].title;
            });
        }
    });
});    

function toggleHide() {
    document.getElementById("icon").hidden=true;
    document.getElementById("textInput").hidden=false;
    document.getElementById("searchTxt").hidden=true;
}