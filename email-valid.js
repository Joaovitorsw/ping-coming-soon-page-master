const $emailInput = document.querySelector(".email-input");
const $error = document.querySelector(".error");
const $submit = document.querySelector(".submit");
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$submit.addEventListener("click", submitEmail);
$emailInput.addEventListener("input", (text) => validEmail(text.target.value));

