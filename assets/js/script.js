var currentCity 
var pastCities= []; 

$(".srchbtn").click(function() {
    console.log("click"); 

    currentCity = $(this).parent().find("textarea").val(); 

    if (currentCity === "") {
        return; 
    }; 

    pastCities.push(currentCity); 

    localStorage.setItem("pastcities", JSON.stringify(pastCities)); 

    for (i=0; i < pastCities.length; i++) {
        $(pastCities[i]).each(function() {
            $("#pastsearch").append("<button class='citybtn w-100' type='submit'>" + localStorage.getItem(JSON.parse(pastCities)) + "</button"); 
    } ); 
}

    
    $("#textarea").val("");
}
); 

getCityHistory(); 


function getCityHistory() {

}




// $(".srchbtn").click(function () {
//     console.log("clicked");

//     var textInput = $(this).parent().find("textarea").val();
//     console.log(textInput);
//     localStorage.setItem("cities", textInput);
//     // return selectedWeatherOutput(); // this will retrieve weather data from API

//     $("#pastsearch").append("<button class='citybtn w-100' type='submit'>" + textInput + "</button"); 
  

//     $("#textarea").val("");

// });



   // function selectedWeatherOutput() {

    // }