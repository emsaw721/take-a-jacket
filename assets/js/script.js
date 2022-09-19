
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

    // $(document).on("load", function(event) {
    //    var buttonsStay = localStorage.getItem("pastcities");
    //     btn.innerHTML =  JSON.parse(buttonsStay); 
    //     btn.setAttribute("class", "citybtn");
    //     btn.setAttribute("type", "button");
    //     btnContainer.append(btn);
    // }); 


    $("#textarea").val("");


    // getCityHistory();
    getCurrentCity();
});


// reloads weather information when past city button clicked
function getCityHistory() {
    $(".citybtn").click(function (event) {
        currentCity = $(this).text();

    }
    )

};


function getCurrentCity() {
    var currentCity = $("#textarea").val();
    console.log(currentCity);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=59698fd4ce1ba5e4033035d843a189b7";

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                for (const name in data.name) {
                    $(locationEl).text(data.name);
                    console.log(data.name);
                }
            })
        }
        else {
            alert("Error:" + response.statusText);
        }
    })

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (const weather in data.weather) {
                    $(locationEl).append(weather.icon);
                }
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


    fetch(weatherURL).then(function (response) {

        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
            localStorage.setItem("data",JSON.stringify(data)); 
                for (const main in data.main) {
                    console.log(main);

                    var tempLi = document.createElement("li");
                    var text = localStorage.getItem("data"); 
                    tempLi.textContent = text; 

                    $(".dash").append(tempLi);
                    console.log(tempLi)
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
    var fiveDayStats = document.createElement("div");
    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (const list in data.list) {
                    fiveDayStats.textContent = localStorage.getItem(list.temp);
                    $(".forecast-items").append(fiveDayStats);
                    console.log(fiveDayStats);
                    break;

                }
            })
        }
    });

}

fiveDay();






