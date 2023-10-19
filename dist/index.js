const btnInputs = document.querySelectorAll("input");
const screenInput = document.getElementById("screenInput");
const screenOutput = document.getElementById("screenOutput");

btnInputs.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") {
      screenOutput.textContent = eval(screenInput.textContent);
    } else if (btn.value === "C") {
      screenOutput.textContent = "0";
      screenInput.textContent = "";
    } else if (btn.id === "delBtn") {
      screenInput.textContent = screenInput.textContent.slice(0, -1);
    } else {
      screenInput.textContent += btn.value;
    }
  });
});
