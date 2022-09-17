
var currentCity= "Houston, TX"
var pastCities= []; 

$(".srchbtn").click(function() {
    console.log("click"); 

    currentCity = $(this).parent().find("textarea").val(); 

    if (currentCity === "") {
        return; 
    }; 

    pastCities.push(currentCity); 

    localStorage.setItem("pastcities", JSON.stringify(pastCities)); 
    console.log(localStorage.getItem("pastcities")); 

//     for (i=0; i < pastCities.length; i++) {
//         $(pastCities[i]).each(function() {
//             //$("#pastsearch").append("<button class='citybtn w-100' type='button'>" + localStorage.getItem(JSON.parse(pastCities)) + "</button"); 
//     } ); 
// }


var btnContainer = document.getElementById("pastsearch"); 

 for (i=0; i < pastCities.length; i++) {
   
    var btn = document.createElement("button");
    btn.innerHTML = pastCities[i]; 
    btn.setAttribute("class", "citybtn"); 
    btn.setAttribute("type", "button"); 
    btnContainer.append(btn); 

 }; 
 
$("#textarea").val("");


getCityHistory(); 
 }); 


 // reloads weather information when past city button clicked
function getCityHistory() {
    $(".citybtn").click(function(event) {
        currentCity = $(this).text(); 
        // getTodayWeather(); 

    }
    )

}; 


// function getTodayWeather() {

//     var weatherURL= api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}; 
// }

// function getSelectedWeather() {
//     var weatherURL= api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}; 
// }






  

