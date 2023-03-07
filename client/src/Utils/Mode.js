function toggleDarkLight(e) {
    e.preventDefault();
    var body = document.getElementById("Mode");
    var currentClass = body.className;

    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
  export { toggleDarkLight };