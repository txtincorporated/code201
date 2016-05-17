//VARIABLES
//Hold branch names in an array
var branches = ['Hillsboro', 'Pearl', 'DowntownPDX', 'Buckman', 'PDXairport', 'Clackamas'];
var dailyPies = [];

//Set min/max pizzas planned daily in three-hour blocks
var pizzaBounds = [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]];

//Set min/max deliveries planned daily in three-hour blocks
var dlvyBounds = [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]];

//Store hourly drivers needed
var driversPerHour = [];

//Store output from hrlyDelivs in an array
var dailyMade = [];

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

for (var i = 0; i < 6; i++) {
  console.log(pizzasMade);
};

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

//Determine no. dlvy. drivers needed for each hour
var hrlyDrivers = Math.round(hrlyDelivs/3);


//Add up total number of pizzas made for a day
var pizzaTotal = function(arr) {
  var pieCount = 0;
  for (var i=0; i<arr.length; i++) {
    pieCount += arr[i];
  }
  //console.log(pieCount);
  return pieCount;
};
//console.log(pizzaTotal(pizzasMade));

//Add up total number of pizzas made for the week
var wklyTotal = function(arr) {
  console.log(arr);
  var dailyTotal = 0;
  for (var i=0; i<6; i++) {
    dailyTotal = pizzaTotal(arr);
    dailyPies.push(dailyTotal);
    console.log(i);
  }
  console.log(dailyPies);
  var wklyCount = 0;
  for (j=0; j<6; j++) {
    wklyCount += dailyPies[j];
  }
  console.log(wklyCount);
  return wklyCount;
};
wklyTotal(pizzasMade);
