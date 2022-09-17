// var textInput = $(".searchbar").each(function() {
//     console.log($(this).text());
// });




$(".srchbtn").click(function () {
    console.log("clicked");

    var textInput = $(this).parent().find("textarea").val();
    console.log(textInput);
    localStorage.setItem("cities", textInput);
    // return selectedWeatherOutput(); // this will retrieve weather data from API

    $("#pastsearch").append("<button class='citybtn w-100' type='submit'>" + textInput + "</button"); 
  

    $("#textarea").val("");

});



   // function selectedWeatherOutput() {

    // }