
var pastCities = [];
var locationEl = document.querySelector(".location");
var forecastEl = document.querySelector(".forecast-items");
var key = "59698fd4ce1ba5e4033035d843a189b7"; 


var dayToday = moment().format("MMMM Do YYYY");;

$(document).ready(function () {      //shows Houston data on page load before requesting a city 
    // need to use geotag or whatever it's called
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=" +key+ "&units=imperial";
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {


        var cityName = $("<div>").text(response.name + "(" + dayToday + ")");
        $(locationEl).append(cityName);


        var temperatureNumber = parseInt((response.main.temp));
        var displayTemp = $("<li>").text("Tempeture: " + temperatureNumber + " °F");
        $(".dash").append(displayTemp);

        var displayFeelsLike = $("<li>").text("Feels Like: " + response.main.feels_like + " °F");
        $(".dash").append(displayFeelsLike);

        var displayHum = $("<li>").text("Humidity: " + response.main.humidity + " %");
        $(".dash").append(displayHum);
    })
    apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=" +key+ "&units=imperial&cnt=5";
    $.ajax({
        url: apiURL,
        method: "GET"
        
    }).then(function (response) {
    for (const list in response.list) {
        localStorage.setItem("list", list); 
        console.log(list); 
    }
        for (const main in list.main) {
        for (i = 0; i < main.length; i++) {
            var forecastItems = $("<div>").text(main[i]);
            $(forecastEl).append(forecastItems);
        }
    }
    })

});

$(".srchbtn").click(function () {
    console.log("click");

    var currentCity = $("#textarea").val();
    console.log(currentCity);
    if (currentCity === "") {
        console.log("modal start")
        var modal = document.getElementById("cityModal");
        var span = document.getElementsByClassName("close")[0];
        
   
            modal.style.display = "block";
       

        $(span).click(function() {
            modal.style.display= "none";
        })

       $(window).click(function(event) {
            if (event.target == modal) {
                modal.style.display = "none"; 
            }
        })
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


    getCityHistory();
    getTodayWeather();



    // reloads weather information when past city button clicked
    // gonna have to be a for loop
    function getCityHistory() {
        $(".citybtn").click(function (event) {
            currentCity = $(this).text();

        }
        )

    };






    function getTodayWeather() {
    
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" +key+ "&units=imperial";


        $(".location").empty();
        $(".dash").empty();
        $(forecastEl).empty();



        // fetch(weatherURL).then(function (response) {
        // if (response.ok) {
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (response) {


            var cityName = $("<div>").text(response.name + "(" + dayToday + ")");
            $(locationEl).append(cityName);


            var temperatureNumber = parseInt((response.main.temp));
            var displayTemp = $("<li>").text("Tempeture: " + temperatureNumber + " °F");
            $(".dash").append(displayTemp);

            var displayFeelsLike = $("<li>").text("Feels Like: " + response.main.feels_like + " °F");
            $(".dash").append(displayFeelsLike);

            var displayHum = $("<li>").text("Humidity: " + response.main.humidity + " %");
            $(".dash").append(displayHum);
        

        })

        fiveDay();
    };

   

    function fiveDay() {
        apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&appid=" +key+ "&units=imperial&cnt=5";
        // var fiveDayStats = document.createElement("div");
        // $(".forecast-items").append(fiveDayStats); 

        $.ajax({
            url: apiURL,
            method: "GET"
        }).then(function (response) {
            for (i = 0; i < response.list.length; i++) {
                var forecastItems = $("<div>").text(response.list[i]);
                $(forecastEl).append(forecastItems);
            }


        })
    };

});







