var userText = $(".searchbox").children("textarea").val();




$(document).ready(function () {

    $(".srchbtn").click(function () {
        console.log("clicked");
        localStorage.setItem("cities", userText)
        return selectedWeatherOutput(); // this will retrieve weather data from API
        console.log(userText); 
    }
    );


    var ul = document.createElement("ul");
    document.getElementById("pastsearch").appendChild(ul);


    var citiesList = [ $(".searchbox").children("textarea").val(localStorage.getItem(userText))];

    citiesList.every(renderCitiesList);

    function renderCitiesList(element, index, arr) {
        var li = document.createElement("li");

        ul.appendChild(li);

        li.innerHTML = li.innerHTML + element;
    }


   
    function selectedWeatherOutput() {

    }
}); 
