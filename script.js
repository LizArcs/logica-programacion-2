// Conversor de temperatura
function convertirTemperatura() {
    // Obtener el valor ingresado por el usuario
    let celsiusInput = document.getElementById('celsius').value;

    // Validación de que es un número
    if (isNaN(celsiusInput) || celsiusInput === "") {
        alert("Uy! Ese no es un número, ingresa un número válido");
        return;
    }

    // Convertir el valor a número
    let celsius = parseFloat(celsiusInput);

    // Conversión de °C a °F
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Conversión de °C a K
    let kelvin = celsius + 273.15;

    // Resultados en DOM
    document.getElementById('resultado').innerHTML =
        `Grados Kelvin: ${kelvin.toFixed(2)} <br> Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}



