var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

var Hillsboro = {
  name: Hillsboro,

  todaysPies: daysPies,//get total pies for one day
  thisWksPies: piesServed,//get total pies for one wk.
  pizzas: dailyMade,//populate array of pies ea. hr. from app.js
  deliveries: dailyDelivs,//populate array of deliveries ea. hr.
  driversNeeded: driversPerHour,//populate array of driver need ea. hr.

  storeStats: function () {

  } //method to populate table from arrays above
};
