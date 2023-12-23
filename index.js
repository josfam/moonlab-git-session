let legendInputs = document.querySelectorAll(".legend-input");
let inputFields = document.querySelectorAll("input");

inputFields.forEach((inputField, index) => {
  inputField.addEventListener("focus", () => {
    let legendInput = legendInputs[index];

    if (legendInput) {
      legendInput.style.display = "block";
      inputField.placeholder = "";
      inputField.style.margin = "2px 10px 7px 10px";
    }
  });
});
