
var pastCities = [];
var locationEl = document.querySelector(".location");
var forecastEl = document.querySelector(".forecast-items"); 
var weather;
//var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";

    var dayToday = moment().format("MMMM Do YYYY");; 


$(".srchbtn").click(function () {
    console.log("click");

    var currentCity = $("#textarea").val();
    console.log(currentCity);
    if (currentCity === "") {
        alert("Please enter city name.")
        return; 
    };

    pastCities.push(currentCity);

    localStorage.setItem("pastcities", pastCities);



    var btnContainer = document.getElementById("pastsearch");


    var btn = document.createElement("button");
    btn.innerHTML = currentCity;
    btn.setAttribute("class", "citybtn");
    btn.setAttribute("type", "button");
    btnContainer.append(btn);

    // $(document).on("load", function(event) {
    //    var buttonsStay = localStorage.getItem("pastcities");
    //     btn.innerHTML =  JSON.parse(buttonsStay); 
    //     btn.setAttribute("class", "citybtn");
    //     btn.setAttribute("type", "button");
    //     btnContainer.append(btn);
    // }); 


    $("#textarea").val("");


    // getCityHistory();
    getTodayWeather();



// reloads weather information when past city button clicked
function getCityHistory() {
    $(".citybtn").click(function (event) {
        currentCity = $(this).text();

    }
    )

};






function getTodayWeather() {
    // var currentCity = $("#textarea").val();
    // console.log(currentCity);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+currentCity+"&appid=59698fd4ce1ba5e4033035d843a189b7&units=imperial";


    // fetch(weatherURL).then(function (response) {
        // if (response.ok) {
            $.ajax({
                url: weatherURL,
                method: "GET"
              }).then(function(response) {
                  var cityName = $("<div>").text(response.name + "(" +dayToday+ ")"); 
                  $(locationEl).append(cityName); 
            
                
                var temperatureNumber = parseInt((response.main.temp));
                var displayTemp = $("<li>").text("Tempeture: "+ temperatureNumber + " °F");
                $(".dash").append(displayTemp);
              
                var displayFeelsLike = $("<li>").text("Feels Like: "+ response.main.feels_like + " °F");
                $(".dash").append(displayFeelsLike);
                
                var displayHum = $("<li>").text("Humidity: "+ response.main.humidity + " %");
                $(".dash").append(displayHum);
            // response.clone().json().then(function (data) {
            //     console.log(data)
            //    for (const main in data.main) {
            //         var tempLi = document.createElement("li");
            //         var textStart= parseInt(data); 
            //         console.log(textStart); 
            //         var text =  textStart.text; 
            //         tempLi.textContent = "Temp : " + text; 
            //         $(".dash").append(tempLi);
            //         console.log(tempLi)
            //    } 
            
            //         var humLi = document.createElement("li");
            //         var textStart= localStorage.getItem("data"); 
            //         var text =  textStart.substring(245,247) + "%"; 
            //         humLi.textContent = "Humidity : " + text; 
            //         $(".dash").append(humLi);
            //         console.log(humLi)
                    
               
            // }
            // )
        // }
        // else {
        //     alert("Error:" + response.statusText);
        // }
    })

    fiveDay();
};

// getCurrentCity();

function fiveDay() {
    apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="+currentCity+"&appid=59698fd4ce1ba5e4033035d843a189b7&units=imperial";
    // var fiveDayStats = document.createElement("div");
    // $(".forecast-items").append(fiveDayStats); 

    $.ajax({
        url: apiURL,
        method: "GET"
      }).then(function(response) {
        for (i=3; i<response.list.length; i++) {
            var forecastItems = $("<div>").text(response.list[i]); 
                  $(forecastEl).append(forecastItems); 
        }
      
        // var displayFeelsLike = $("<p>").text("Feels Like: "+ response.list.main.feels_like + " °F");
        // $(forecastEl).append(displayFeelsLike);
        
        // var displayHum = $("<p>").text("Humidity: "+ response.list.main.humidity + " %");
        // $(forecastEl).append(displayHum);

//     fetch(apiURL).then(function (response) {
//         if (response.ok) {
//             response.clone().json().then(function (data) {
         
//                     fiveDayStats.textContent = "Humidity : "
//                     $(".forecast-items").append(fiveDayStats);
//                     console.log(fiveDayStats);

                
//             })
//         }
//     });

})
} ; 

});







