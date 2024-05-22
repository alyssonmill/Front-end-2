// const focuz = document.getElementById("user_name")
// focuz.addEventListener("focusin", changeBorda)

// function changeBorda(event){
//     console.log(event.target)
//     event.target.style.bordercolor = "white";
// }

const focuz = document.getElementById("user_name")

focuz.addEventListener("focus", (event) => {
    event.target.style.borderColor = "purple";
});