//sort method to sort the array in alphabetical order or lesser to greater numbers
//sort.reverse method chaining

//split method to takes in a string and converts it to an array of strings wherever you split the string (",")
//join method to join an array together to create a string
//concat method to concatenate multiple arrays together




(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var brPlanets = planetsArray.join("<br>");
    console.log(brPlanets);
    console.log(planetsArray);


    //bonus

    var planetsList = "<ul>";

    planetsArray.forEach(function (planet) {
      planetsList += "<li>" + planet + "</li>";
    })
    planetsList += "</ul>";
    console.log(planetsList);


    //faster way
    // var planetsAsUL = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";


})();