$(document).ready(function() {


// User is presented with dropdown menu
 function addCity(city){
     $("#city-type").append("<option val='" + city + "'>" + city + "</option>");
 }

// User is given five city options
 var cities = ["NYC",
               "SF",
               "LA",
               "ATX",
               "SYD"];
 cities.forEach(addCity);


// Background switches according to match choice
 function switchBackground(choice){

   var choice = $('#city-type').val();

  if (choice == "NYC") {
   $("body").attr('class', '');
   $("body").addClass("nyc");
 }

  else if (choice == "SF") {
    $("body").attr('class', '');
    $("body").addClass("sf");
  }

  else if (choice == "LA") {
    $("body").attr('class', '');
    $("body").addClass("la");
  }

  else if (choice == "ATX") {
    $("body").attr('class', '');
    $("body").addClass("atx");
  }

  else if (choice == "SYD") {
  $("body").attr('class', '');
  $("body").addClass("syd");
  }

 }

//User selects dropdown option

$('#city-type').change(switchBackground);

});
