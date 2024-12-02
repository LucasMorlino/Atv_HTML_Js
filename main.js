const form = document.getElementById("form-numero");
const numeroA = document.getElementById("numero-A");
const numeroB = document.getElementById("numero-B");
const containerMessageSuccess = document.querySelector(".success-message");
const containerErrorMessage = document.querySelector(".error-message");


function validaMaior( number1, number2 ){
    return number1.value < number2.value;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const mensagemSucesso = `O número B  (<b>${numeroB.value}</b>) é maior que o número A (<b>${numeroA.value}</b>), logo está valido o formulário.`;
    const mensagemErro = `O número B (<b>${numeroB.value}</b>) não é maior que o número A (<b>${numeroA.value}</b>), logo  não está valido o formulário.`;

    if (validaMaior(numeroA, numeroB)){
        containerMessageSuccess.innerHTML = mensagemSucesso;
        containerMessageSuccess.style.display = "block";

        numeroA.value = "";
        numeroB.value = "";

        containerErrorMessage.style.display = "none";

    }else{
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = "block";

        numeroA.value = "";
        numeroB.value = "";

        containerMessageSuccess.style.display = "none";
    }
})
