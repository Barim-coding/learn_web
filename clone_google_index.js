$(document).ready(function() {
    var search = function() {
        var url = 'https://www.google.com/search?q=' + document.getElementById('search_text').value;
        window.open(url, 'google');
    };

    var doodle = function() {
        url = 'https://www.google.com/doodles'
        window.open(url, 'google')

    };

    $(".gsearch").click(search);
    $(".doodle").click(doodle);

    $("#text").keypress(function(e) {
        if (e.which == 13) {
            search();
        }
    });

});