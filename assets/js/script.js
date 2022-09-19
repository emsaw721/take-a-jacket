
var pastCities = [];
var locationEl = document.querySelector(".location");
var weather;
//var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.value() + "&appid=59698fd4ce1ba5e4033035d843a189b7";


// function dayToday() {
//     var date = Date();
//     console.log(date);
//     $(locationEl).append(date); 

// };

// dayToday();



$(".srchbtn").click(function () {
    console.log("click");

    var currentCity = $("#textarea").val();
    console.log(currentCity);
    if (currentCity === "") {
        alert("Please enter city name.")
    };

    pastCities.push(currentCity);

    localStorage.setItem("pastcities", pastCities);



    var btnContainer = document.getElementById("pastsearch");


    var btn = document.createElement("button");
    btn.innerHTML = currentCity;
    btn.setAttribute("class", "citybtn");
    btn.setAttribute("type", "button");
    btnContainer.append(btn);




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


// function getData() {
//     weather = data;
// };



function getCurrentCity() {
    var currentCity = $("#textarea").val();
    console.log(currentCity);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=59698fd4ce1ba5e4033035d843a189b7";

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (location) {
                $(locationEl).text(location.name);
            })
        }
        else {
            alert("Error:" + response.statusText);
        }
    })

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (weather) {
                $(locationEl).append(weather.icon);
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }
    })
    getTodayWeather();
}


function getTodayWeather() {
    // var currentCity = $("#textarea").val();
    // console.log(currentCity);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=59698fd4ce1ba5e4033035d843a189b7&units=imperial";


    var dailyStats = document.createElement("ul");
    $(".dash").append(dailyStats);

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (location) {
                console.log(location);

                var tempLi = document.createElement("li")
                tempLi.textContent(location.temp);
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
            response.json().then(function (data) {
                for (const main of data.main) {
                    var humLi = document.createElement("li");
                    $(dailyStats).append(humLi).textContent = main.humidity;
                }
            }
            )
        }
        else {
            alert("Error:" + response.statusText);
        }
    })

};

getCurrentCity();

function fiveDay() {
    apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=59698fd4ce1ba5e4033035d843a189b7&units=imperial";

    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var fiveDayStats = document.createElement("div");
                fiveDayStats.appendChild().textContent = main.temp;
            })
        }
    });

}

fiveDay();







