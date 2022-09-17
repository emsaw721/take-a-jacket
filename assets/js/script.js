
var currentCity= "Houston, TX"
var pastCities= []; 

function dayToday() {
    var date = Date();
    console.log(date); 
}; 

dayToday(); 

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
        getTodayWeather(); 

    }
    )

}; 


function getTodayWeather() {
    var weatherURL= "https://api.openweathermap.org/data/2.5/weather?lat=29.7604N&lon=95.3698W&appid=59698fd4ce1ba5e4033035d843a189b7"; 

    $.ajax({
        url: weatherURL, 
        method: "GET"
    }).then(function(response) {
        cityName = $("<h3").text(response.name + "" + dayToday());
        $(".location").append(cityName); 
    }
    )
}

// function getSelectedWeather() {
//     var weatherURL= "https://api.openweathermap.org/data/2.5/forecast?q=" +city name + "," +state code + "," + country code + ","&appid=59698fd4ce1ba5e4033035d843a189b7"; 
// }






  

