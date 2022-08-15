"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  arr.push(d);
  if (d > 0) {
    let firstcalc = (-b + Math.sqrt(d) )/(2*a);
    let secondcalc = (-b - Math.sqrt(d) )/(2*a);
    arr = [firstcalc, secondcalc];
  } else if (d === 0) {
    let calc = -b/(2*a);
    arr = [calc];
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (amount < contribution) 
    totalAmount = 'общая стоимость не может быть меньше начального взноса';
  
  let now = new Date();
  let creditDate = new Date(date);
  totalAmount += now;
  totalAmount += creditDate;

  return totalAmount;
}
