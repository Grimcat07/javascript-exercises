const convertToCelsius = function(temp) {

  let celcius=(temp-32)*5/9;
  let celcius_rounded=Number((celcius.toFixed(1)));
  return celcius_rounded;
};

const convertToFahrenheit = function(temp) {
  let farenheit=temp*(9/5)+32
  let farenheit_rounded=Number(farenheit.toFixed(1));
  return farenheit_rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
