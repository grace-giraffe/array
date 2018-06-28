const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
//Display an array from the cities in gotCitiesCSV
k1 = gotCitiesCSV.split(',');
console.log(k1);
//Display an array of words from the sentence in bestThing
var k2 = bestThing.split(" ");
console.log(k2);

//Display a string separated by semi-colons instead of commas from gotCitiesCSV
var k3 = k1.join(";");
console.log(k3);
//Display a CSV (comma-separated) string from the lotrCitiesArray
var k4 = lotrCitiesArray.join(",");
console.log(k4);
//Display the last 5 cities in lotrCitiesArray
var k5 = [];
for (var i = 3; i < 8; i++) {
    var arrayItem = lotrCitiesArray[i];
    k5.push(arrayItem);
}
console.log(k5);
//Using splice, remove "Rohan" from lotrCitiesArra
var k6 = lotrCitiesArray;
k6.splice(2, 1);
console.log(k6);
//Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"
var k7= bestThing.slice(23, 38);
console.log(k7);
//Find and display the index of "only" in bestThing
var k8 = bestThing.indexOf("only");
console.log(k8);
//Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
var kata9array = gotCitiesCSV.split(',');
       var kata9 = [];
       for (var i = 0; i < 7; i++) {
           var kata9temp = kata9array[i];
           console.log(kata9temp);
           if (kata9temp.includes("aa") || kata9temp.includes("ee") || kata9temp.includes("ii") || kata9temp.includes(
                   "oo") || kata9temp.includes("uu")) {
               kata9.push(kata9temp);
               console.log(kata9);
           }
       }
       
//Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
var k10 = lotrCitiesArray;
       k10.sort(function(a,b){
           return a.length-b.length;
           console.log(k10);
       }
    );