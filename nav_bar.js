var nav = {
    'home': 0,
    'hacks': 1,
    'contact': 2,
}

function fill_navigation() {
    document.getElementById("nav-bar").innerHTML =
        "<ul>\
            <li><a href=\"index.html\">Home</a></li> \
            <li><a href=\"select.html\">Dining Hacks</a></li> \
            <li><a href=\"submit.html\">Submit an Idea</a></li> \
        </ul>"
}


function make_active(s) {
    $(document).ready(function() {
        $("#nav-bar li a").eq(nav[s]).addClass("active");
    });
}