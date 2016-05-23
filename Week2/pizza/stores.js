//I:  COMPANYWIDE DATA ARRAYS
//lay out 18 'tr' elements per pizzaShop, one for each operating hr. of the day
var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

var branches = ['Hillsboro', 'Beaverton', 'Buckman', 'DowntownPDX', 'PDXairport', 'Clackamas'];

function Shop (br, pizzaBounds, dlvyBounds) {//OPEN SHOP OBJECT
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

  this.shopTable = function () {//OPEN TABLE (method to populate table from arrays in I.)
    var storeStats = document.getElementById('locations');
    var elShopname = document.createElement('h3');
    console.log('Created h3');

    //Append shop name h3 to #locations div as table title
    elShopname.textContent = this.br;
    storeStats.appendChild(elShopname);

    //Append new store table to #locations div below table title
    var pizzaTable = document.createElement('table');
    storeStats.appendChild(pizzaTable);

    //Append top two header rows to store table
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

    //Add 3rd row with column headings
    var trC = document.createElement('tr');
    pizzaTable.appendChild(trC);
    var thX = document.createElement('th');
    thX.setAttribute('scope','col');
    trC.appendChild(thX);//empty column head for times
    var thA = document.createElement('th');
    thA.setAttribute('scope','col');
    thA.setAttribute('class','th-centered');
    thA.textContent = 'Pizzas made hourly';
    trC.appendChild(thA);//column head for pizzas made

    var thB = document.createElement('th');
    thB.setAttribute('scope','col','class','th-centered');
    thB.setAttribute('class','th-centered');
    thB.textContent = 'Pizzas delivered hourly';
    trC.appendChild(thB);//column head for deliveries made

    var thC = document.createElement('th');
    thC.setAttribute('scope','col');
    thC.setAttribute('class','th-centered');
    thC.textContent = 'Drivers needed hourly';
    trC.appendChild(thC);//column head for drivers needed

    for (var i=0; i<this.pizzas.length; i++) {//OPEN FOR-LOOP L1 (adds data rows)
        //Add data in successive rows equal to hrs. tracked per day
      var tr1 = document.createElement('tr');
      var th3 = document.createElement('th');
      th3.setAttribute('scope', 'row');
      th3.textContent = op_hours[i];
      tr1.appendChild(th3);//Add row and row head for one hr.'s stats

      var td1 = document.createElement('td');
      td1.textContent = this.pizzas[i];
      tr1.appendChild(td1);
      var td2 = document.createElement('td');
      td2.textContent = this.deliveries[i];
      tr1.appendChild(td2);
      var td3 = document.createElement('td');
      td3.textContent = this.driversNeeded[i];
      tr1.appendChild(td3);
      pizzaTable.appendChild(tr1);//Add one cell for each stat in row
      console.log('Added row ' + [i]);
    }//CLOSE FOR-LOOP L1
  };//CLOSE TABLE
  this.shopTable();
};//CLOSE SHOP OBJECT

//POPULATOR
var hillsboroShop = new Shop (branches[0], pizzaBounds[0], dlvyBounds[0]);
console.log(hillsboroShop);

var beavertonShop = new Shop (branches[1], pizzaBounds[1], dlvyBounds[1]);
console.log(beavertonShop);

var buckmanShop = new Shop (branches[2], pizzaBounds[2], dlvyBounds[2]);
console.log(buckmanShop);

var dntnShop = new Shop (branches[3], pizzaBounds[3], dlvyBounds[3]);
console.log(dntnShop);

var airptShop = new Shop (branches[4], pizzaBounds[4], dlvyBounds[4]);
console.log(airptShop);

var clackamasShop = new Shop (branches[5], pizzaBounds[5], dlvyBounds[5]);
console.log(clackamasShop);
