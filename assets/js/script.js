var userText = document.getElementsByClassName("searchbar").text; 
var citiesList = [localStorage.getItem(userText)];





$(document).ready(function () {

    $(".srchbtn").click(function () {
        console.log("clicked");
        localStorage.setItem("cities", userText);
        var userText = document.getElementsByClassName("searchbar"); 
        // return selectedWeatherOutput(); // this will retrieve weather data from API
        console.log(userText);
    }
    );
    return pastSearchItems(); //this will display already searched citiies 
}); 

function pastSearchItems() {
    var ul = document.createElement("ul");
    document.getElementById("pastsearch").appendChild(ul);


    for (i = 0; i < citiesList.length; i++) {

        var li = document.createElement("li");
        li.innerText = citiesList[i]; 
        ul.appendChild(li);


    };
}; 


    // function selectedWeatherOutput() {

    // }

