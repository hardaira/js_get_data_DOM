'use strict';

// write your code here
const populationList = document.getElementsByClassName('population');
let sum = 0;
let average = 0;
const mainArray = [];

for (let i = 0; i < populationList.length; i++) {
  const population = populationList[i].innerHTML;

  mainArray.push((population));
}

for (let i = 0; i < mainArray.length; i++) {
  sum += mainArray[i]*1;
}

average = sum / mainArray.length;

document.querySelector('.total-population').innerHTML =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  average.toLocaleString('en-US');
