alert("Isso é um campo numérico")
alert("Seleciona os Números abaixo, O Campo B precisa ser maior que o A, caso contrário dará erro.")

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);
    let messageElement = document.getElementById("message");
  
    if (campoB > campoA) {
      messageElement.textContent = "Formulário válido!  😊";
      messageElement.classList.remove("invalid");
      messageElement.classList.add("valid");

      
    } else {
      messageElement.textContent = "Número B deve ser maior que número A. 😠";
      messageElement.classList.remove("valid");
      messageElement.classList.add("invalid");
    }
  });