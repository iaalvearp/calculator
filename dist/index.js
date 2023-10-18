const btnInputs = document.querySelectorAll("input");
const btns = document.getElementById("btns");
const screenInput = document.getElementById("screenInput");
const screenOutput = document.getElementById("screenOutput");

btns.addEventListener("click", () => {
  console.log(btnInputs.forEach((btn) => btn));
});
