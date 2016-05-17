var pizzaBounds = [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]];

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

var pizzaTotal = function(arr) {
  var pieCount = 0;
  for (i=0; i<18; i++) {
    pieCount += arr[i];
  }
  console.log(pieCount);
  return pieCount;
};
pizzaTotal(pizzasMade);
