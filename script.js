var buttons = document.querySelectorAll("#mostrarAlertaBtn");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const mensagem = document.getElementById("alertMessage");

    mensagem.innerHTML = `
          
        <div class="alert alert-danger" role="alert" id="alertMessagejs">
            Serviço temporariamente indisponível!
        </div>
      
          `;

    setTimeout(function () {
        mensagem.innerHTML = "";
    }, 2000);
  });
});
