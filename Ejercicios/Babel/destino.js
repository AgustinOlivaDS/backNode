"use strict";

var Colores = require('./Colors');

var lista = [2, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var Color = new Colores();
Color.getRandomColor();
console.log(Color.RGB);
