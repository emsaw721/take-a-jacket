// var textInput = $(".searchbar").each(function() {
//     console.log($(this).text());
// });




$(".srchbtn").click(function () {
    console.log("clicked");

    var textInput = $(this).parent().find("textarea").val();
    console.log(textInput);
    localStorage.setItem("cities", textInput);
    // return selectedWeatherOutput(); // this will retrieve weather data from API


    // return pastSearchItems(); //this will display already searched citiies 

   

    // function pastSearchItems() {
        var btn = document.createElement("button");
        btn.setAttribute("class", "w-100");
        btn.setAttribute("text", localStorage.getItem(textInput)); 

        document.getElementById("pastsearch").appendChild(btn);


       


       
    // };

    
    $("#textarea").val(""); 

}); 



   // function selectedWeatherOutput() {

    // }