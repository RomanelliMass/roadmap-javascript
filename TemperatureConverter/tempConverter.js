function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5 ) + 32

    return fahrenheit
}

function fahrenheitToCelsius(fahrenheit) {
    const celcius = (fahrenheit - 32) * 5/9

    return celcius
}

function formatTemperature(value, unit) {

    if (unit === 'C') {
        return `${value} ${unit}`
    }
    return `${value} ${unit}`
};

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));