//I:  COMPANYWIDE DATA ARRAYS
//lay out 18 'tr' elements per pizzaShop, one for each operating hr. of the day
var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

//II.  PROTOTYPE SHOP OBJECT
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

function pizzaShop (name[i], todaysPies[i], thisWksPies[i], pizzas[i], deliveries[i], driversNeeded[i] {
  this.name = name;
  //SUMMATIVE STATS.
  this.todaysPies = todaysPies,//get total pies for one day
  this.thisWksPies = thisWksPies,//get total pies for one wk.

  //ARRAYED STATS.
  this.pizzas = pizzas,//populate array of pies ea. hr. from app.js
  this.deliveries = deliveries,//populate array of deliveries ea. hr.
  this.driversNeeded = driversNeeded,//populate array of driver need ea. hr.

  //TABLE BUILDER
  this.shopTable = function () {//method to populate table from arrays in I.
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

}
