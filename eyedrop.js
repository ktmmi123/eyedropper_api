
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-button").addEventListener("click", () => {
        const resultElement = document.getElementById("result");
      
        if (!window.EyeDropper) {
          resultElement.textContent =
            "Your browser does not support the EyeDropper API";
          return;
        }
      
        const eyeDropper = new EyeDropper();
      
        eyeDropper
          .open()
          .then((result) => {
            resultElement.textContent = result.sRGBHex;
            resultElement.style.border = "2px solid black";
          })
          .catch((e) => {
            resultElement.textContent = e;
          });
    });
});
