// GLOBAL VARIABLES and SETTINGS
var baseUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
var endUrl = "&format=json&callback=?&origin=*";

$("#input").keyup(function(e) {
    if (e.keyCode === 13) {
        $("#click").click();
    }
});


$("#click").on('click', function () {
    var searchTerm = $("#input").val();
    var url = baseUrl + searchTerm + endUrl;
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "json",
        success: function(data) {
            $('#output').html('');
          for (var i = 0; i <data[1].length; i++) {
            $("#output").prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
              $('#input').val('');
            
          }
        }
    })
});

$('#home').on('click', function () {
    $('#output').html('');
    $('#input').val('');
});















// Button click function to store variable 
/* function clickMe() {
    var value = document.getElementById('text-value').value;
    var str = value;
    var replaced = str.split(" ").join("_");
    value = replaced;
}

function getResults() {
    var textValue = document.getElementById('text-value').value;
    var searchTerm = new XMLHttpRequest();
    var url = baseUrl + textValue + endUrl;
    searchTerm.responseType = 'json';
    searchTerm.onreadystatechange = function() {
        if (searchTerm.readyState == 4 && searchTerm.status == 200) {
            
        }
    };
    searchTerm.open('GET', url, true);
    searchTerm.send();
}

// "Enter" key acts like a click on the button to store variable
document.getElementById("text-value")
     .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("clicker").click();
        }
    });
*/








//https://en.wikipedia.org/w/api.php?action=opensearch&search=""&format=json&callback=?