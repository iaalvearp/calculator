const btnInputs = document.querySelectorAll("input");
const screenInput = document.getElementById("screenInput");
const screenOutput = document.getElementById("screenOutput");

btnInputs.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") screenOutput.textContent = eval(screenInput.value);
    else if (btn.value === "C") screenInput.textContent = 0;
    else if (btn.id === "delBtn")
      screenInput.textContent = screenInput.textContent.slice(0, -1);
    else screenInput.textContent += btn.value;
  });
});
