function divide(x, y){
  
  if (y === 0) {
  return "Error (Cannot Divide by Zero)";
  } 
  
}
function multiply(x, y){
  return x*y;
}
function add(x, y){
  return x+y;
}
function subtract(x, y){
  return x-y;
}
function power(x, y){
  return  Math.pow(x,y)
}
function square_root(x){
  return Math.sqrt(x)
}
function logBase10(x){
  return Math.log(x)
}
function generateRandomNumber(){
  return Math.random()
}
function fahrenheitToCelcius(Fahrenheit) {
  var celcius = Fahrenheit * 5/9 - 32 + " Degrees Celcius.";
  return celcius;
}
function celciusToFahrenheit(Celcius) {
  var Fahrenheit = Celcius * 9/5 + 32 + " Degrees Fahrenheit.";
  return Fahrenheit;
}