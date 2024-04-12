var buttons = document.getElementsByTagName("button");
for(var i = 0; i<buttons.length; i++){
  buttons[i].addEventListener("click", function () {
    const mensagem = document.getElementById("alertMessage");
    mensagem.classList.add("show");

    setTimeout(function () {
      mensagem.classList.remove("show");
    }, 1500);
  });
}