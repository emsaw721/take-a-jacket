
var pastCities = [];
var locationEl = document.querySelector(".location");
var weather; 
//var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";


$(document).ready(function()  {
    $("#textarea").val("Houston"); 
}); 


function dayToday() {
    var date = Date();
    console.log(date);
    $(locationEl).append(date); 

};

dayToday();



$(".srchbtn").click(function () {
    console.log("click");

    var currentCity =  $("#textarea").val();  
    console.log(currentCity); 
    //var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";

    if (currentCity === "") {
        alert("Please enter city name.")
    };

    pastCities.push(currentCity);

    localStorage.setItem("pastcities", JSON.stringify(pastCities));
    console.log(localStorage.getItem("pastcities"));



    var btnContainer = document.getElementById("pastsearch");

    for (i = 0; i < pastCities.length; i++) {

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
    $(".citybtn").click(function (event) {
        currentCity = $(this).text();

    }
    )

};
 

function getData() {
    weather = data; 
}; 

function getCurrentCity() {
    var currentCity =  $("#textarea").val();  
    console.log(currentCity); 
    //var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";
    
    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (location) {
                $(".location").text(location.name);
            })
        }
        else {
            alert("Error:" + response.statusText);
        }
    })

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (weather) {
                $(".location").append(weather.icon);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }
    })
    getTodayWeather();
};

getCurrentCity();

function getTodayWeather() {
    var currentCity =  $("#textarea").val();  
    console.log(currentCity); 
    //var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";


    var dailyStats = document.createElement("ul");
    $(".dash").append(dailyStats);

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.text().then(function (main) {  
                console.log(main);
               
                var tempLi = document.createElement("li")
                tempLi.textContent=weather.main.temp; 
                console.log(tempLi.textContent); 
                $(dailyStats).append(tempLi);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }

    })





    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (main) {
                var pressLi = document.createElement("li");
                pressLi.textContent = weather.main.pressure; 
                $(dailyStats).append(pressLi);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }
    })




    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (main) {
                var humLi = document.createElement("li");
                humLi.textContent = $("dailyStats").append(main.humidity);
                $(dailyStats).append(humLi);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }
    })

};




// function getSelectedWeather() {
//     var weatherURL= "https://api.openweathermap.org/data/2.5/forecast?q=" +city name + "," +state code + "," + country code + ","&appid=59698fd4ce1ba5e4033035d843a189b7"; 
// }








