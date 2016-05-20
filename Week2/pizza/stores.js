//I:  COMPANYWIDE DATA ARRAYS
//lay out 18 'tr' elements per pizzaShop, one for each operating hr. of the day
var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

var branches = ['Hillsboro', 'Beaverton', 'Buckman', 'DowntownPDX', 'PDXairport', 'Clackamas'];

II.  PROTOTYPE SHOP OBJECT
var Hillsboro = {
  name: Hillsboro,

  //SUMMATIVE STATS.
  todaysPies: daysPies[0],//get total pies for one day
  thisWksPies: piesServed[0],//get total pies for one wk.

  //ARRAYED STATS.
  pizzas: pizzasMade[0],//populate array of pies ea. hr. from app.js
  deliveries: dailyDelivs[0],//populate array of deliveries ea. hr.
  driversNeeded: driverHours[0],//populate array of driver need ea. hr.

  //TABLE BUILDER
  shopTable: function () {//method to populate table from arrays in I.
    //whip up 'th' and 'tfoot' elements for ea. member of 'branches'
    //append to each branch's 'div' in sales-data.html
  }
  //whip up one 'tr' element for ea. index of op_hours
  //whip up three 'td' elements for ea. 'tr'
  //append ea. 'td' to its 'tr'

  //append ea. 'tr' element and its dependents to the prev. sib. in sales-data 'div.diptych' starting w/ second 'th' element

  //append 'tfoot' to the last 'tr'

  //if ea. element simultaneously pop'd with its appt. data, go have a beer

  //otherwise, write function to populate ea. 'td' element from arrays in I.
};
//
// function Shop (br, pizzaBounds, dlvyBounds, todaysPies, pizzas, deliveries, driversNeeded) {
//   this.br = br;
//   this.pizzaBounds = pizzaBounds;
//   this.dlvyBounds = dlvyBounds;
//
//   //SUMMATIVE STATS.
//   this.todaysPies = dailyPizzas(hrlyPies(pizzaBounds));//get total pies for one day
//   //ARRAYED STATS.
//   this.pizzas = hrlyPies(pizzaBounds);//populate array of pies ea. hr. from app.js
//   this.deliveries = hrlyDelivs(dlvyBounds);//populate array of deliveries ea. hr.
//   this.driversNeeded = hrlyDrivers(hrlyDelivs(dlvyBounds));//populate array of driver need ea. hr.
//
// //METHODS
// //WEEKLY TOTALER
//   this.pizzaWeek = function pizzaWeek() {
//     var dailyPies = [];//build 2-D array of six sets of data from hrlyPies
//     for (var i=0; i<6; i++) {
//       var daily = hrlyPies(pizzaBounds);
//       console.log(daily);
//       var dailyTotal = daily.reduce(function(a,b) {return a + b;});
//       console.log(dailyTotal);
//       dailyPies.push(dailyTotal);
//     }
//     console.log(dailyPies);
//     var weeklyTotal = dailyPies.reduce(function(a,b) {return a + b;});
//     console.log(weeklyTotal);
//     return weeklyTotal;
//   };
//   var weeksPizzas = this.pizzaWeek(this.pizzas);
//   this.weeksPizzas = weeksPizzas;//get total pies for one wk.
//   console.log(weeksPizzas);
//
//   //TABLE BUILDER
//   this.shopTable = function () {//method to populate table from arrays in I.
//     var storeStats = document.getElementById('storestats');
//     var elShopname = document.createElement('h3');
//     console.log('Created h3');
//
//     var shopName = document.createTextNode(this.br);
//     elShopname.appendChild(shopName);
//     storeStats.appendChild(elShopname);
//   };
// };
//
//
// var hillsboroShop = new Shop (branches[0], pizzaBounds[0], dlvyBounds[0], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
// console.log(hillsboroShop);
//
var beavertonShop = new Shop (branches[1], pizzaBounds[1], dlvyBounds[1], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(beavertonShop);

var buckmanShop = new Shop (branches[2], pizzaBounds[2], dlvyBounds[2], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(buckmanShop);

var dntnShop = new Shop (branches[3], pizzaBounds[3], dlvyBounds[3], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(dntnShop);

var airptShop = new Shop (branches[4], pizzaBounds[4], dlvyBounds[4], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(airptShop);

var clackamasShop = new Shop (branches[5], pizzaBounds[5], dlvyBounds[5], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(clackamasShop);
