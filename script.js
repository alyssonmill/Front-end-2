const inputs =  document.querySelectorAll("input");

const userName = document.getElementById("user_name");
const userAddress = document.getElementById("user_address");

inputs.forEach((inputs) => {
    inputs.addEventListener("focus", (event) => {
        event.target.style.border = "3px solid purple";
    });
    
    inputs.addEventListener("blur", (event) => {
        event.target.style.border = "";
    });

    userName.addEventListener("blur", () => {
       window.sessionStorage.setItem("Name", userName.value)
    });

    userAddress.addEventListener("blur", () => {
        window.sessionStorage.setItem("Address", userAddress.value)
     });
});

const availability = document.getElementById("availability");
const radioInputs = availability.querySelectorAll("input[type='radio']");

function storage (){
    radioInputs.forEach((radio) => {
        radio.addEventListener("change", (event) =>{
            if(event.target.checked){
                window.localStorage.setItem(event.target.value ,event.target.value)
            }
        });
    });
}
radioInputs.forEach((radio) => {
    radio.addEventListener("focus", storage);
});





// availability.addEventListener("blur", (event) => {
//     if(event.target.checked){
//         window.sessionStorage.setItem("Availability", availability.value)
//     }else{
//         console.log("Errorrr")
//     }
//  });













// Parte 2

// Agora substitua todos os comandos de logs por comandos para salvar mecanismo localStorage para que seja possível recuperar ao pressionar F5
// Crie uma função que recupera os valores do localStorage e preenche os inputs corretamente (Dicas: input.value = “valor” e <script> no final do body)




