// const focuz = document.getElementById("user_name")
// focuz.addEventListener("focusin", changeBorda)

// function changeBorda(event){
//     console.log(event.target)
//     event.target.style.bordercolor = "white";
// }

let inputs =  document.querySelectorAll("input");

inputs.forEach((inputs) => {
    inputs.addEventListener("focus", (event) => {
        event.target.style.border = "";
        event.target.style.border = "3px solid purple";
    });
    
    inputs.addEventListener("blur", (event) => {
        event.target.style.border = "";
        console.log(inputs.value)
    });
});






