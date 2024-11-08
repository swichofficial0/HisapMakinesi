const buttons = document.querySelectorAll(".buttons span");
const display = document.getElementById("display");
let currentValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const btnText = this.innerHTML;

    if (btnText === "C") {
      currentValue = "";
      display.innerHTML = "0";
    } else if (btnText === "=") {
      try {
        currentValue = eval(currentValue).toString();
        display.innerHTML = currentValue;
      } catch (e) {
        display.innerHTML = "Error";
        currentValue = "";
      }
    } else {
      if (display.innerHTML === "0" && btnText !== ".") {
        currentValue = btnText;
      } else {
        currentValue += btnText;
      }
      display.innerHTML = currentValue;
    }
  });
});
