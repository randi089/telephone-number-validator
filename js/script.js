const btnClear = document.getElementById("clear-btn");
const btnCheck = document.getElementById("check-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");

btnClear.addEventListener("click", function () {
  result.innerHTML = "";
});

btnCheck.addEventListener("click", function () {
  if (!input.value) {
    alert("Please provide a phone number");
  } else if (telephoneCheck(input.value)) {
    result.innerHTML += `<p class="valid">Valid US number: ${input.value}</p>`;
  } else {
    result.innerHTML += `<p class="invalid">Invalid US number: ${input.value}</p>`;
  }
});

function telephoneCheck(str) {
  const rules = /^(1 ?)?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/;
  return rules.test(str);
}
