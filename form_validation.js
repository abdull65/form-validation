const formEl = document.querySelector("form"),
  fullNameEl = document.getElementById("fullname"),
  emailEl = document.getElementById("email"),
  passwordEl = document.getElementById("password"),
  confirmPsdEl = document.getElementById("confirmpsd"),
  formBtnEl = document.getElementById("btn"),
  warningMsg = document.querySelector(".msg"),
  successMsg = document.querySelector(".submitmsg");
// Retrieve form data from Local Storage
let formData = JSON.parse(localStorage.getItem("formData")) || [];
function fullNameFunc() {
  const nameCheckIconEl = document.querySelector("#name_check");
  const nameTimesIconEl = document.querySelector("#name_times");
  const fullNamePattern = /^[A-Za-z]+(?: [A-Za-z]+){1,2}$/;
  if (fullNameEl.value === "") {
    fullNameEl.classList.add("invalid_border");
    fullNameEl.classList.remove("valid_border");
    nameTimesIconEl.style.display = "block";
    nameCheckIconEl.style.display = "none";
  } else if (fullNamePattern.test(fullNameEl.value)) {
    fullNameEl.classList.add("valid_border");
    fullNameEl.classList.remove("invalid_border");
    nameCheckIconEl.style.display = "block";
    nameTimesIconEl.style.display = "none";
  } else {
    fullNameEl.classList.add("invalid_border");
    fullNameEl.classList.remove("valid_border");
    nameTimesIconEl.style.display = "block";
    nameCheckIconEl.style.display = "none";
  }
}
function emailFunc() {
  const emailCheckIconEl = document.querySelector("#email_check");
  const emailTimesIconEl = document.querySelector("#email_times");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailEl.value === "") {
    emailEl.classList.add("invalid_border");
    emailEl.classList.remove("valid_border");
    emailTimesIconEl.style.display = "block";
    emailCheckIconEl.style.display = "none";
  } else if (emailPattern.test(emailEl.value)) {
    emailEl.classList.add("valid_border");
    emailEl.classList.remove("invalid_border");
    emailCheckIconEl.style.display = "block";
    emailTimesIconEl.style.display = "none";
  } else {
    emailEl.classList.add("invalid_border");
    emailEl.classList.remove("valid_border");
    emailTimesIconEl.style.display = "block";
    emailCheckIconEl.style.display = "none";
  }
}
function passwordFunc() {
  const psdCheckIconEl = document.querySelector("#password_check");
  const psdTimesIconEl = document.querySelector("#password_times");
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.*[!@#$%^&*()_+~`\-={}[\]:";'<>?,./]).{8,}$/;
  if (passwordEl.value === "") {
    passwordEl.classList.add("invalid_border");
    passwordEl.classList.remove("valid_border");
    psdTimesIconEl.style.display = "block";
    psdCheckIconEl.style.display = "none";
  } else if (passwordPattern.test(passwordEl.value)) {
    passwordEl.classList.add("valid_border");
    passwordEl.classList.remove("invalid_border");
    psdCheckIconEl.style.display = "block";
    psdTimesIconEl.style.display = "none";
  } else {
    passwordEl.classList.add("invalid_border");
    passwordEl.classList.remove("valid_border");
    psdTimesIconEl.style.display = "block";
    psdCheckIconEl.style.display = "none";
  }
}
function confirmpsdFunc() {
  const confirmPsdCheckIconEl = document.querySelector("#confirmpsd_check");
  const confirmPsdTimesIconEl = document.querySelector("#confirmpsd_times");
  if (confirmPsdEl.value === "") {
    confirmPsdEl.classList.add("invalid_border");
    confirmPsdEl.classList.remove("valid_border");
    confirmPsdTimesIconEl.style.display = "block";
    confirmPsdCheckIconEl.style.display = "none";
  } else if (confirmPsdEl.value === passwordEl.value) {
    confirmPsdEl.classList.add("valid_border");
    confirmPsdEl.classList.remove("invalid_border");
    confirmPsdCheckIconEl.style.display = "block";
    confirmPsdTimesIconEl.style.display = "none";
  } else {
    confirmPsdEl.classList.add("invalid_border");
    confirmPsdEl.classList.remove("valid_border");
    confirmPsdTimesIconEl.style.display = "block";
    confirmPsdCheckIconEl.style.display = "none";
  }
}
fullNameEl.addEventListener("input", fullNameFunc);
emailEl.addEventListener("input", emailFunc);
passwordEl.addEventListener("input", passwordFunc);
confirmPsdEl.addEventListener("input", confirmpsdFunc);

formBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    fullNameEl.value === "" ||
    emailEl.value === "" ||
    passwordEl.value === "" ||
    confirmPsdEl.value === ""
  ) {
    warningMsg.innerHTML = "please fill the required input fields!";
    warningMsg.classList.add("invalid");
    setTimeout(() => {
      warningMsg.style.display = "none";
    }, 3000);
    warningMsg.style.display = "block";
  } else {
    // Create a new form data object and add it to the array
    let newFormData = {
      fullName: fullNameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    };
    // add the form input to the formData array
    formData.push(newFormData);

    // Save the updated form data array in Local Storage
    localStorage.setItem("formData", JSON.stringify(formData));
    successMsg.innerHTML = "SIgnUp Successful!";
    successMsg.classList.add("valid");
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
    successMsg.style.display = "block";
    resetForm();
  }
});
// reset and clear data input
function resetForm() {
  formEl.reset();
  fullNameFunc();
  emailFunc();
  passwordFunc();
  confirmpsdFunc();
  fullNameEl.classList.remove("valid_border", "invalid_border");
  emailEl.classList.remove("valid_border", "invalid_border");
  passwordEl.classList.remove("valid_border", "invalid_border");
  confirmPsdEl.classList.remove("valid_border", "invalid_border");
  nameTimesIconEl.style.display = "none";
  nameCheckIconEl.style.display = "none";
  emailTimesIconEl.style.display = "none";
  emailCheckIconEl.style.display = "none";
  psdTimesIconEl.style.display = "none";
  psdCheckIconEl.style.display = "none";
  confirmPsdTimesIconEl.style.display = "none";
  confirmPsdCheckIconEl.style.display = "none";
}
