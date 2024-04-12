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

const menuIcon = document.getElementsByClassName("menuIcon");
const menuOptions = document.getElementsByClassName("menuOptions");
menuIcon[0].addEventListener("click", function(){
  if(menuOptions[0].className.includes("show")){
    menuIcon[0].classList.remove("click")
    menuOptions[0].classList.remove("show")
  } else{
    menuOptions[0].classList.add("show")
    menuIcon[0].classList.add("click")
  }
})
