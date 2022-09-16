var userText = $(".searchbar").siblings("textarea").val(); 




$(document).ready(function() {
    console.log(userText); 

$(".srchbtn").click(function() {
    console.log("clicked"); 
    localStorage.setItem("cities", userText)
    return selectedWeatherOutput(); // this will retrieve weather data from API
}
); 

}); 


function selectedWeatherOutput() {

}

