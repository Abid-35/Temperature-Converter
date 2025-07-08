function convertTemperature() {
  var input = document.getElementById('temperatureInput').value;
  var unitOptions = document.getElementsByName('unit');
  var selectedUnit = '';

  
  for (var i = 0; i < unitOptions.length; i++) {
    if (unitOptions[i].checked) {
      selectedUnit = unitOptions[i].value;
      break;
    }
  }

  var outputDiv = document.getElementById('output');

  
  if (input === '' || isNaN(input)) {
    outputDiv.innerText = 'Please enter a valid number.';
    return;
  }

  var temp = parseFloat(input);
  var celsius, fahrenheit, kelvin;

  
  if (selectedUnit === 'celsius') {
    celsius = temp;
    fahrenheit = (temp * 9 / 5) + 32;
    kelvin = temp + 273.15;
  } else if (selectedUnit === 'fahrenheit') {
    fahrenheit = temp;
    celsius = (temp - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === 'kelvin') {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  
  outputDiv.innerText =
    "Celsius: " + celsius.toFixed(2) + " °C\n" +
    "Fahrenheit: " + fahrenheit.toFixed(2) + " °F\n" +
    "Kelvin: " + kelvin.toFixed(2) + " K";
}


document.getElementById('convertBtn').onclick = convertTemperature;
