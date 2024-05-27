const inputs = document.querySelectorAll("input");
const inputDays = document.querySelectorAll('input[name="Availability"]')

const userName = document.getElementById("user_name");
const userAddress = document.getElementById("user_address");



inputs.forEach((inputs) => {
    inputs.addEventListener("focus", (event) => {
        event.target.style.border = "3px solid purple";
    });

    inputs.addEventListener("blur", (event) => {
        event.target.style.border = "";
        if (inputs.type === "checkbox") {
            window.localStorage.setItem(inputs.name, inputs.checked);
        } else {
            window.localStorage.setItem(inputs.name, inputs.value);
        }
    });
});

function checkValue (){
    inputs.forEach((inputs) => {
        const value = window.localStorage.getItem(inputs.name)
        if (inputs.type === "checkbox") {
            inputs.checked = value === "true";
        } else if (value) {
            inputs.value = value;
        }
    })
}

document.addEventListener('DOMContentLoaded', checkValue);