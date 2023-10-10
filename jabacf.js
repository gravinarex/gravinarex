
        // Function to convert Fahrenheit to Celsius
        function convertToFahrenheit() {
            var fahrenheitInput = parseFloat(document.getElementById("fahrenheitInput").value);
            var celsiusResult = (fahrenheitInput - 32) * 5/9;
            document.getElementById("fahrenheitResult").innerHTML = fahrenheitInput + " Fahrenheit is " + celsiusResult.toFixed(2) + " Celsius";
        }

        // Function to convert Celsius to Fahrenheit
        function convertToCelsius() {
            var celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
            var fahrenheitResult = (celsiusInput * 9/5) + 32;
            document.getElementById("celsiusResult").innerHTML = celsiusInput + " Celsius is " + fahrenheitResult.toFixed(2) + " Fahrenheit";
        }

        // Function to handle logout
        function logout() {
            // Add your logout logic here
            // For example, clear session data or redirect to a login page.
        }
   