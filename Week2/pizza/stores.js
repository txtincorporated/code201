//I:  COMPANYWIDE DATA ARRAYS
//lay out 18 'tr' elements per pizzaShop, one for each operating hr. of the day
var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

var branches = ['Hillsboro', 'Beaverton', 'Buckman', 'DowntownPDX', 'PDXairport', 'Clackamas'];

//II.  PROTOTYPE SHOP OBJECT
// var Hillsboro = {
//   name: Hillsboro,
//
//   //SUMMATIVE STATS.
//   todaysPies: daysPies[0],//get total pies for one day
//   thisWksPies: piesServed[0],//get total pies for one wk.
//
//   //ARRAYED STATS.
//   pizzas: pizzasMade[0],//populate array of pies ea. hr. from app.js
//   deliveries: dailyDelivs[0],//populate array of deliveries ea. hr.
//   driversNeeded: driverHours[0],//populate array of driver need ea. hr.

  //TABLE BUILDER
//   shopTable: function () {//method to populate table from arrays in I.
//     //whip up 'th' and 'tfoot' elements for ea. member of 'branches'
//     //append to each branch's 'div' in sales-data.html
//   }
//   //whip up one 'tr' element for ea. index of op_hours
//   //whip up three 'td' elements for ea. 'tr'
//   //append ea. 'td' to its 'tr'
//
//   //append ea. 'tr' element and its dependents to the prev. sib. in sales-data 'div.diptych' starting w/ second 'th' element
//
//   //append 'tfoot' to the last 'tr'
//
//   //go have a beer
//
// };

function Shop (br, pizzaBounds, dlvyBounds, todaysPies, pizzas, deliveries, driversNeeded) {
  this.br = br;
  this.pizzaBounds = pizzaBounds;
  this.dlvyBounds = dlvyBounds;

  //SUMMATIVE STATS.
  this.todaysPies = dailyPizzas(hrlyPies(pizzaBounds));//get total pies for one day
  //ARRAYED STATS.
  this.pizzas = hrlyPies(pizzaBounds);//populate array of pies ea. hr. from app.js
  this.deliveries = hrlyDelivs(dlvyBounds);//populate array of deliveries ea. hr.
  this.driversNeeded = hrlyDrivers(hrlyDelivs(dlvyBounds));//populate array of driver need ea. hr.

//METHODS
//WEEKLY TOTALER
  this.pizzaWeek = function pizzaWeek() {
    var dailyPies = [];//build 2-D array of six sets of data from hrlyPies
    for (var i=0; i<6; i++) {
      var daily = hrlyPies(pizzaBounds);
      console.log(daily);
      var dailyTotal = daily.reduce(function(a,b) {return a + b;});
      console.log(dailyTotal);
      dailyPies.push(dailyTotal);
    }
    console.log(dailyPies);
    var weeklyTotal = dailyPies.reduce(function(a,b) {return a + b;});
    console.log(weeklyTotal);
    return weeklyTotal;
  };
  var weeksPizzas = this.pizzaWeek(this.pizzas);
  this.weeksPizzas = weeksPizzas;//get total pies for one wk.
  console.log(weeksPizzas);

  //TABLE BUILDER
  this.shopTable = function () {//method to populate table from arrays in I.
    var storeStats = document.getElementById('locations');
    var elShopname = document.createElement('h3');
    console.log('Created h3');
    //Shop name h3 above table
    elShopname.textContent = this.br;
    storeStats.appendChild(elShopname);
    //Start of table
    var pizzaTable = document.createElement('table');
    storeStats.appendChild(pizzaTable);
    //top two header rows
    var trA = document.createElement('tr');
    pizzaTable.appendChild(trA);
    var th1 = document.createElement('th');
    th1.setAttribute('colspan', '4');
    th1.textContent = 'Pizzas today: ' + this.todaysPies;
    trA.appendChild(th1);

    var trB = document.createElement('tr');
    pizzaTable.appendChild(trB);
    var th2 = document.createElement('th');
    th2.setAttribute('colspan', '4');
    th2.setAttribute('id','second');
    th2.textContent = 'Pizzas this week: ' + this.weeksPizzas;
    trB.appendChild(th2);

    //column headings
    var trC = document.createElement('tr');
    pizzaTable.appendChild(trC);
    var thX = document.createElement('th');
    thX.setAttribute('scope','col');
    trC.appendChild(thX);
    var thA = document.createElement('th');
    thA.setAttribute('scope','col');
    thA.textContent = 'Pizzas made hourly';
    trC.appendChild(thA);
    var thB = document.createElement('th');
    thB.setAttribute('scope','col');
    thB.textContent = 'Pizzas delivered hourly';
    trC.appendChild(thB);
    var thC = document.createElement('th');
    thC.setAttribute('scope','col');
    thC.textContent = 'Drivers needed hourly';
    trC.appendChild(thC);

    //8am data
    var tr1 = document.createElement('tr');
    var th3 = document.createElement('th');
    th3.setAttribute('scope', 'row');
    th3.textContent = op_hours[0];
    tr1.appendChild(th3);

    var td1 = document.createElement('td');
    td1.textContent = this.pizzas;
    tr1.appendChild(td1);
    var td2 = document.createElement('td');
    td2.textContent = this.deliveries;
    tr1.appendChild(td2);
    var td3 = document.createElement('td');
    td3.textContent = this.driversNeeded;
    tr1.appendChild(td3);
    pizzaTable.appendChild(tr1);

    // // //9am data
    // var tr2 = document.createElement('tr');
    // var th4 = document.createElement('th');
    // th4.setAttribute('scope', 'row');
    // th4.textContent = op_hours[1];
    // tr2.appendChild(th4);
    //
    // var td4 = document.createElement('td');
    // td4.textContent = this.pizzas;
    // tr2.appendChild(td4);
    // var td5 = document.createElement('td');
    // td5.textContent = this.deliveries;
    // tr2.appendChild(td5);
    // var td6 = document.createElement('td');
    // td6.textContent = this.driversNeeded;
    // tr2.appendChild(td6);
    // pizzaTable.appendChild(tr2);
    // //
    // // //10am data
    // var tr3 = document.createElement('tr');
    // var th5 = document.createElement('th');
    // th5.setAttribute('scope', 'row');
    // th5.textContent = op_hours[2];
    // tr3.appendChild(th5);
    //
    // var td6 = document.createElement('td');
    // td6.textContent = this.pizzas;
    // tr3.appendChild(td6);
    // var td7 = document.createElement('td');
    // td7.textContent = this.deliveries;
    // tr3.appendChild(td7);
    // var td8 = document.createElement('td');
    // td8.textContent = this.driversNeeded;
    // tr3.appendChild(td8);
    // pizzaTable.appendChild(tr3);

    // //11am data
    // var th6 = document.createElement('th');
    // th6.setAttribute('scope', 'row');
    // th6.textContent = op_hours[3];
    // pizzaTable.appendChild(th6);
    //
    // var td9 = document.createElement('td');
    // td9.textContent = this.pizzas;
    // pizzaTable.appendChild(td9);
    // var td10 = document.createElement('td');
    // td10.textContent = this.deliveries;
    // pizzaTable.appendChild(td10);
    // var td11 = document.createElement('td');
    // td11.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td11);
    //
    // //12pm data
    // var th7 = document.createElement('th');
    // th7.setAttribute('scope', 'row');
    // th7.textContent = op_hours[4];
    // pizzaTable.appendChild(th7);
    //
    // var td12 = document.createElement('td');
    // td12.textContent = this.pizzas;
    // pizzaTable.appendChild(td12);
    // var td13 = document.createElement('td');
    // td13.textContent = this.deliveries;
    // pizzaTable.appendChild(td13);
    // var td14 = document.createElement('td');
    // td4.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td14);
    //
    // //1pm data
    // var th8 = document.createElement('th');
    // th8.setAttribute('scope', 'row');
    // th8.textContent = op_hours[5];
    // pizzaTable.appendChild(th3);
    //
    // var td15 = document.createElement('td');
    // td15.textContent = this.pizzas;
    // pizzaTable.appendChild(td15);
    // var td16 = document.createElement('td');
    // td16.textContent = this.deliveries;
    // pizzaTable.appendChild(td16);
    // var td17 = document.createElement('td');
    // td17.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td17);
    //
    // //2pm data
    // var th9 = document.createElement('th');
    // th9.setAttribute('scope', 'row');
    // th9.textContent = op_hours[6];
    // pizzaTable.appendChild(th3);
    //
    // var td18 = document.createElement('td');
    // td18.textContent = this.pizzas;
    // pizzaTable.appendChild(td18);
    // var td19 = document.createElement('td');
    // td19.textContent = this.deliveries;
    // pizzaTable.appendChild(td19);
    // var td20 = document.createElement('td');
    // td20.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td20);
    //
    // //3pm data
    // var th10 = document.createElement('th');
    // th10.setAttribute('scope', 'row');
    // th10.textContent = op_hours[7];
    // pizzaTable.appendChild(th3);
    //
    // var td21 = document.createElement('td');
    // td21.textContent = this.pizzas;
    // pizzaTable.appendChild(td21);
    // var td22 = document.createElement('td');
    // td22.textContent = this.deliveries;
    // pizzaTable.appendChild(td22);
    // var td23 = document.createElement('td');
    // td23.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td23);
    //
    // //4pm data
    // var th11 = document.createElement('th');
    // th11.setAttribute('scope', 'row');
    // th11.textContent = op_hours[8];
    // pizzaTable.appendChild(th3);
    //
    // var td24 = document.createElement('td');
    // td24.textContent = this.pizzas;
    // pizzaTable.appendChild(td24);
    // var td25 = document.createElement('td');
    // td25.textContent = this.deliveries;
    // pizzaTable.appendChild(td25);
    // var td26 = document.createElement('td');
    // td26.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td26);
    //
    // //5pm data
    // var th12 = document.createElement('th');
    // th12.setAttribute('scope', 'row');
    // th12.textContent = op_hours[9];
    // pizzaTable.appendChild(th12);
    //
    // var td27 = document.createElement('td');
    // td27.textContent = this.pizzas;
    // pizzaTable.appendChild(td27);
    // var td28 = document.createElement('td');
    // td28.textContent = this.deliveries;
    // pizzaTable.appendChild(td28);
    // var td29 = document.createElement('td');
    // td29.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td29);30
    // //6pm data
    // var th13 = document.createElement('th');
    // th13.setAttribute('scope', 'row');
    // th13.textContent = op_hours[10];
    // pizzaTable.appendChild(th3);
    //
    // var td30 = document.createElement('td');
    // td30.textContent = this.pizzas;
    // pizzaTable.appendChild(td30);
    // var td31 = document.createElement('td');
    // td31.textContent = this.deliveries;
    // pizzaTable.appendChild(td31);
    // var td32 = document.createElement('td');
    // td3.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td32);
    //
    // //7pm data
    // var th14 = document.createElement('th');
    // th14.setAttribute('scope', 'row');
    // th14.textContent = op_hours[11];
    // pizzaTable.appendChild(th14);
    //
    // var td33 = document.createElement('td');
    // td33.textContent = this.pizzas;
    // pizzaTable.appendChild(td33);
    // var td34 = document.createElement('td');
    // td34.textContent = this.deliveries;
    // pizzaTable.appendChild(td34);
    // var td35 = document.createElement('td');
    // td5.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td5);
    //
    // //8pm data
    // var th15 = document.createElement('th');
    // th15.setAttribute('scope', 'row');
    // th15.textContent = op_hours[12];
    // pizzaTable.appendChild(th15);
    //
    // var td36 = document.createElement('td');
    // td36.textContent = this.pizzas;
    // pizzaTable.appendChild(td36);
    // var td37 = document.createElement('td');
    // td37.textContent = this.deliveries;
    // pizzaTable.appendChild(td37);
    // var td38 = document.createElement('td');
    // td3.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td3);
    //
    // //9pm data
    // var th16 = document.createElement('th');
    // th16.setAttribute('scope', 'row');
    // th16.textContent = op_hours[13];
    // pizzaTable.appendChild(th16);
    //
    // var td39 = document.createElement('td');
    // td39.textContent = this.pizzas;
    // pizzaTable.appendChild(td39);
    // var td40 = document.createElement('td');
    // td40.textContent = this.deliveries;
    // pizzaTable.appendChild(td40);
    // var td41 = document.createElement('td');
    // td41.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td41);
    //
    // //10pm data
    // var th17 = document.createElement('th');
    // th17.setAttribute('scope', 'row');
    // th17.textContent = op_hours[14];
    // pizzaTable.appendChild(th17);
    //
    // var td42 = document.createElement('td');
    // td42.textContent = this.pizzas;
    // pizzaTable.appendChild(td42);
    // var td43 = document.createElement('td');
    // td43.textContent = this.deliveries;
    // pizzaTable.appendChild(td43);
    // var td44 = document.createElement('td');
    // td44.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td44);
    //
    // //11pm data
    // var th18 = document.createElement('th');
    // th18.setAttribute('scope', 'row');
    // th18.textContent = op_hours[15];
    // pizzaTable.appendChild(th18);
    //
    // var td45 = document.createElement('td');
    // td45.textContent = this.pizzas;
    // pizzaTable.appendChild(td45);
    // var td46 = document.createElement('td');
    // td46.textContent = this.deliveries;
    // pizzaTable.appendChild(td46);
    // var td47 = document.createElement('td');
    // td47.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td47);
    //
    // //12am data
    // var th19 = document.createElement('th');
    // th19.setAttribute('scope', 'row');
    // th19.textContent = op_hours[16];
    // pizzaTable.appendChild(th19);
    //
    // var td48 = document.createElement('td');
    // td48.textContent = this.pizzas;
    // pizzaTable.appendChild(td48);
    // var td49 = document.createElement('td');
    // td49.textContent = this.deliveries;
    // pizzaTable.appendChild(td49);
    // var td50 = document.createElement('td');
    // td50.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td50);
    //
    // //1am data
    // var th20 = document.createElement('th');
    // th20.setAttribute('scope', 'row');
    // th20.textContent = op_hours[17];
    // pizzaTable.appendChild(th20);
    //
    // var td51 = document.createElement('td');
    // td1.textContent = this.pizzas;
    // pizzaTable.appendChild(td51);
    // var td52 = document.createElement('td');
    // td2.textContent = this.deliveries;
    // pizzaTable.appendChild(td52);
    // var td53 = document.createElement('td');
    // td3.textContent = this.driversNeeded;
    // pizzaTable.appendChild(td53);
  };
  this.shopTable();
};


var hillsboroShop = new Shop (branches[0], pizzaBounds[0], dlvyBounds[0], dailyPizzas(pizzasMade), hrlyPies(pizzaBounds), hrlyDelivs(dlvyBounds), hrlyDrivers(dlvyTrend));
console.log(hillsboroShop);

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
