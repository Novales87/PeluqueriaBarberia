function toggleDarkLight(e) {
  e.preventDefault();
  var Mode = document.getElementById("Mode");
  var currentClass = Mode.className;
  Mode.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  switch (Mode.className) {
    case "dark-mode":
      Mode.style.setProperty("--Fondo1", getComputedStyle(Mode).getPropertyValue("--F1N"));
      Mode.style.setProperty("--Fondo2", getComputedStyle(Mode).getPropertyValue("--F2N"));
      Mode.style.setProperty("--Fondo3", getComputedStyle(Mode).getPropertyValue("--F3N"));
      Mode.style.setProperty("--Fondo4", getComputedStyle(Mode).getPropertyValue("--F4N"));
      Mode.style.setProperty("--Fondo5", getComputedStyle(Mode).getPropertyValue("--F5N"));


      break;
    case "light-mode":
      Mode.style.setProperty("--Fondo1", getComputedStyle(Mode).getPropertyValue("--F1D"));
      Mode.style.setProperty("--Fondo2", getComputedStyle(Mode).getPropertyValue("--F2D"));
      Mode.style.setProperty("--Fondo3", getComputedStyle(Mode).getPropertyValue("--F3D"));
      Mode.style.setProperty("--Fondo4", getComputedStyle(Mode).getPropertyValue("--F4D"));
      Mode.style.setProperty("--Fondo5", getComputedStyle(Mode).getPropertyValue("--F5D"));
      

      break;
    default:
      break;
  }
  // element.style.setProperty("--my-var", jsVar + 4);
}
export { toggleDarkLight };

