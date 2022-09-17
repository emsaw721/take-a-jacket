
var currentCity = "Houston, TX"
var pastCities = [];
var locationEl = document.querySelector(".location");

function dayToday() {
    var date = Date();
    console.log(date);
};

dayToday();

$(".srchbtn").click(function () {
    console.log("click");

    currentCity = $(this).parent().find("textarea").val();

    if (currentCity === "") {
        return;
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


function getCurrentCity() {
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=29.6918&lon=-95.6526&appid=59698fd4ce1ba5e4033035d843a189b7";


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
            response.json().then(function (forecast) {
                $(".location").append(forecast.icon);
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
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=29.6918&lon=-95.6526&appid=59698fd4ce1ba5e4033035d843a189b7";


   
    var dailyStats = document.createElement("ul");
    $(".dash").append(dailyStats);

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (forecast) {
                console.log(forecast);
                var tempLi = document.createElement("li");
                tempLi.innerHTML = $(dailyStats).append("Temp:" + forecast.wind); 
                $(dailyStats).append(tempLi);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }

    })





    // fetch(weatherURL).then(function (response) {
    //     if (response.ok) {
    //         response.json().then(function (forecast) {
    //             var windLi = document.createElement("li");
    //             windLi.innerHTML = $(".location").append("Wind:" + forecast.wind);
    //             $(dailyStats).append(windLi);
    //         }
    //         )
    //     }
    //     else {
    //         alert("Error:" + response.statusText);
    //     }
    // })




    // fetch(weatherURL).then(function (response) {
    //     if (response.ok) {
    //         response.json().then(function (forecast) {
    //             var humLi = document.createElement("li");
    //             humLi.innerHTML = $(".location").append("Humidity:" + forecast.humidity);
    //             $(dailyStats).append(humLi);
    //         }
    //         )
    //     }
    //     else {
    //         alert("Error:" + response.statusText);
    //     }
    // })

};




// function getSelectedWeather() {
//     var weatherURL= "https://api.openweathermap.org/data/2.5/forecast?q=" +city name + "," +state code + "," + country code + ","&appid=59698fd4ce1ba5e4033035d843a189b7"; 
// }








