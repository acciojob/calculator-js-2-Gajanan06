//your JS code here. If required.
// Select the display
const display = document.getElementById("display");

// Select all buttons
const buttons = document.querySelectorAll("button");

// Add click event to every button
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const value = button.textContent;

        // Clear All
        if (value === "C") {

            display.value = "";

        }

        // Backspace
        else if (value === "←") {

            display.value = display.value.slice(0, -1);

        }

        // Equals
        else if (value === "=") {

            try {

                display.value = eval(display.value);

            } catch {

                display.value = "Error";

            }

        }

        // Numbers and Operators
        else {

            display.value += value;

        }

    });

});