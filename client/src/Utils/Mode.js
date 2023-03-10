function toggleDarkLight(e) {
  e.preventDefault();
  let Mode = document.getElementById("Mode");
  let currentClass = Mode.className;
  Mode.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  ColorChange(e,Mode);
  
  // element.style.setProperty("--my-var", jsVar + 4);
}

function ColorChange(){
  let Mode = document.getElementById("Mode");
  if(Mode!=null){
    let i=1;
    switch (Mode.className) {
      case "dark-mode":
        while (i<=5) {
          Mode.style.setProperty("--Fondo"+[i], getComputedStyle(Mode).getPropertyValue("--F"+[i]+"N")); 
          Mode.style.setProperty("--Texto"+[i], getComputedStyle(Mode).getPropertyValue("--T"+[i]+"N"));
          i++;
        }
        break;
      case "light-mode":
        while (i<=5) {
          Mode.style.setProperty("--Fondo"+[i], getComputedStyle(Mode).getPropertyValue("--F"+[i]+"D")); 
          Mode.style.setProperty("--Texto"+[i], getComputedStyle(Mode).getPropertyValue("--T"+[i]+"D"));
          i++;
        }
        break;
      default:
        break;
    }
  }
}
export { toggleDarkLight ,ColorChange };

