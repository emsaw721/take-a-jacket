
var pastCities = [];
var locationEl = document.querySelector(".location");
var forecastEl = document.querySelector(".forecast-items");
var key = "59698fd4ce1ba5e4033035d843a189b7";


var dayToday = moment().format("MMMM Do YYYY");;

$(document).ready(function () {      //shows Houston data on page load before requesting a city 
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=" + key + "&units=imperial";
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {

        var cityName = $("<div>").text(response.name + "(" + dayToday + ")");
        $(locationEl).append(cityName);


        var temperatureNumber = parseInt((response.main.temp));
        var displayTemp = $("<li>").text("Tempeture: " + temperatureNumber + " °F");
        $(".dash").append(displayTemp);

        var displayWindSpeed = $("<li>").text("Wind Speed: " + response.wind.speed + "mph");
        $(".dash").append(displayWindSpeed);

        var displayHum = $("<li>").text("Humidity: " + response.main.humidity + " %");
        $(".dash").append(displayHum);

        var displayPres = $("<li>").text("Pressure: " + response.main.pressure + " hPa");
        $(".dash").append(displayPres);



    })


    // var iconCodeStr = "";
    // var imgURL = "http://openweathermap.org/img/w/" + getIconCode() + ".png";
    // function getIconCode() {
    //     if (iconCodeStr === "") {
    //         var iconCode = iconCodeStr.length;
    //     }
    //     else {
    //         iconCode = iconCodeStr[iconCodeStr.length - 1];
    //     }
    // }

    // $.ajax({
    //     url: imgURL,
    //     method: "GET"
    // }).then(function (response) {
    //     var resIconCode = response.weather[0].icon;
    //     iconCodeStr.concat(resIconCode);
    //     $("#icon").attr("src", imgURL);

    // });



    apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=" + key + "&units=imperial&cnt=5";
    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var list = response.list
        console.log(list)

        for (var i = 0; i < list.length; i++) {
            var forecastItems = $("<div>").text("Temperature:" + list[i].main.temp)
            var windSpeed = $("<div>").text("Wind Speed:" + list[i].wind.speed)
            var humidityElement = $("<div>").text("Humidity:" + list[i].main.humidity)
            //$(forecastEl).append(forecastItems, windSpeed, humidityElement)
            // card, var for each item, put item on card 

            var forecastDisplays = [forecastItems.text(), windSpeed.text(), humidityElement.text()]
            console.log(forecastDisplays)

            $(forecastEl).append(forecastDisplays) 
        }

    })




    $(".srchbtn").click(function () {
        console.log("click");

        var currentCity = $("#textarea").val();
        console.log(currentCity);
        if (currentCity === "") {
            console.log("modal start")
            var modal = document.getElementById("cityModal");
            var span = document.getElementsByClassName("close")[0];


            modal.style.display = "block";


            $(span).click(function () {
                modal.style.display = "none";
            })

            $(window).click(function (event) {
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
        btn.addEventListener("click", function (event) {
            currentCity = $(this).text();
            getTodayWeather();
            fiveDay();
        })
        // had to set up event listener like this- before I was creating compounded event listeners to each new city added. 

        $("#textarea").val("");

        getTodayWeather();
        fiveDay();


        function getTodayWeather() {

            var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + key + "&units=imperial";


            $(".location").empty();
            $(".dash").empty();
            $(forecastEl).empty();


            $.ajax({
                url: weatherURL,
                method: "GET"
            }).then(function (response) {


                var cityName = $("<div>").text(response.name + "(" + dayToday + ")");
                $(locationEl).append(cityName);


                var temperatureNumber = parseInt((response.main.temp));
                var displayTemp = $("<li>").text("Tempeture: " + temperatureNumber + " °F"); console.log($(".dash"))
                $(".dash").append(displayTemp);

                var displayWindSpeed = $("<li>").text("Wind Speed: " + response.wind.speed + "mph");
                $(".dash").append(displayWindSpeed);

                var displayHum = $("<li>").text("Humidity: " + response.main.humidity + " %");
                $(".dash").append(displayHum);

                var displayPres = $("<li>").text("Pressure: " + response.main.pressure + " hPa");
                $(".dash").append(displayPres);

            })


        };



        function fiveDay() {
            apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&appid=" + key + "&units=imperial&cnt=5";


            $.ajax({
                url: apiURL,
                method: "GET"
            }).then(function (response) {
                console.log(response)
                var list = response.list
                console.log(list)
        
                for (var i = 0; i < list.length; i++) {
                    var forecastItems = $("<div>").text("Temperature:" + list[i].main.temp)
                    var windSpeed = $("<div>").text("Wind Speed:" + list[i].wind.speed)
                    var humidityElement = $("<div>").text("Humidity:" + list[i].main.humidity)
                    
                    // card, var for each item, put item on card 
                 $(forecastEl).append(forecastItems, windSpeed, humidityElement)
                }
            })
        };

    });







})