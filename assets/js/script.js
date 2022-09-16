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
        var ul = document.createElement("ul");
        ul.setAttribute("class", "w-100");

        document.getElementById("pastsearch").appendChild(ul);


        var li = document.createElement("li");
        ul.appendChild(li);
        li.textContent= localStorage.getItem(textInput);


       
    // };

    
    $("#textarea").val(""); 

}); 



   // function selectedWeatherOutput() {

    // }