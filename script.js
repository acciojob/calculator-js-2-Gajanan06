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

            display.textContent = "";

        }

        // Backspace
        else if (value === "←") {

            display.textContent = display.textContent.slice(0, -1);

        }

        // Equals
        else if (value === "=") {

            try {

                display.textContent = eval(display.textContent);

            } catch {

                display.textContent = "Error";

            }

        }

        // Numbers and Operators
        else {

            display.textContent += value;

        }

    });

});