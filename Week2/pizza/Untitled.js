
this.shopTable = function () {//method to populate table from arrays in I.
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
  //OPEN FOR-LOOP L1 (adds data rows)
  for (var i=0; i<this.pizzas.length; i++) {
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
  //CLOSE FOR-LOOP L1
  }
};
