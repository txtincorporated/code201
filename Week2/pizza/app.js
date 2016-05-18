//VARIABLES
//--FOR USE IN FUNCTIONS
//Hold branch names in an array
var branches = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];

//Set min/max pizzas planned daily in three-hour blocks
var pizzaBounds = [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]];

//Set min/max deliveries planned daily in three-hour blocks
var dlvyBounds = [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]];

//--FOR POPULATING OBJECTS
//Store output from hrlyPies in an array
var dailyMade;

//Store output from hrlyDelivs in an array
var dailyDelivs;

//Store hourly drivers needed in an array
var driversPerHour;

//--FOR POPULATING INDEX.HTML
var daysPies;
// var piesServed;
// var thisWk = document.getElementById('served');
// thisWk.textContent = piesServed;

//FUNCTIONS
//Generate random data for pizzas made each hour
var hrlyPies = function (pizzaBounds) {
  var piesPerHour = [];
  for (i=0; i<6; i++) {
    for (j=0; j<3; j++){
      var number = Math.floor(Math.random () * (pizzaBounds[i][1] - pizzaBounds[i][0])) + pizzaBounds[i][0];
      piesPerHour.push(number);
    }
  }
  return piesPerHour;
};
var pizzasMade = hrlyPies(pizzaBounds);
console.log(pizzasMade);

//Generate daily pizzas ea. hr. for six days
var pizzaWeek = function () {
  var dailyPies = [];
  for (var i=0; i<6; i++) {
    var wkly = hrlyPies(pizzaBounds);
    dailyPies.push(wkly);
    console.log(wkly);
  }
  console.log(dailyPies);
  return dailyPies;
};
var weeksPizzas = pizzaWeek();
console.log(weeksPizzas);
dailyMade = weeksPizzas;

//Build array of ea. day's totals
var dailyPizzas = function(arr) {
  var dailyTotal = 0;
  for (var i = 0; i<18; i++) {
    dailyTotal += arr[i];
    console.log(dailyTotal);
  }
  return dailyTotal;
};
var piesToday = dailyPizzas(pizzasMade);
daysPies = piesToday;
console.log(piesToday);

//Build array of ea. week's totals
var weeklyPizzas = function(arr) {
  var weeklyTotals = [];
  var dailyTotal = 0;
  for (var i = 0; i<arr.length; i++) {//for ea. of six days
    for (var j = 0; j<18; j++) {
      dailyTotal += arr[i][j];
      console.log(dailyTotal);
    }
  }
  weeklyTotals.push(dailyTotal);
  console.log(weeklyTotals);
  return weeklyTotals;//weeklyTotals.reduce(function(a,b) { return a +b})
};
var weeklyTotal = weeklyPizzas(weeksPizzas);
console.log(weeklyTotal);
piesServed = weeklyTotal;

//Generate random data for deliveries made each hour
var hrlyDelivs = function (dlvyBounds) {
  var delivsPerHour = [];
  for (i=0; i<6; i++) {
    for (j=0; j<3; j++){
      var number = Math.floor(Math.random () * (dlvyBounds[i][1] - dlvyBounds[i][0])) + dlvyBounds[i][0];
      delivsPerHour.push(number);
    }
  }
  return delivsPerHour;
};
var dlvyTrend = hrlyDelivs(dlvyBounds);
console.log(dlvyTrend);
dailyDelivs = dlvyTrend;

//Determine no. dlvy. drivers needed for each hour
var hrlyDrivers = function (dTrend) {
  var drvsNeeded = [];
  for (var i = 0; i < dTrend.length; i++) {
    var drvNeed = Math.round(dTrend[i]/3);
    drvsNeeded.push(drvNeed);
  }
  return drvsNeeded;
};
var driverTrend = hrlyDrivers(dlvyTrend);
console.log(driverTrend);
driversPerHour = driverTrend;

//Add up total number of pizzas made for a day
// var pizzaTotal = function(arr) {
//   var pieCount = 0;
//   for (var i=0; i<arr.length; i++) {
//     pieCount += arr[i];
//   }
//   console.log(pieCount);
//   return pieCount;
// };
// console.log(pizzaTotal(pizzasMade));
//
//Add up total number of pizzas made for the week
// var wklyTotal = function(brr) {
//   console.log(brr);
//   var dailyTotal = 0;
//   for (var i=0; i<6; i++) {
//     dailyTotal = pizzaTotal(arr);
//     dailyPies.push(dailyTotal);
//     console.log(i);
//   }
//   console.log(dailyPies);
//   var wklyCount = 0;
//   for (j=0; j<6; j++) {
//     wklyCount += dailyPies[j];
//   }
//   console.log(wklyCount);
//   return wklyCount;
// };
// wklyTotal(pizzasMade);
