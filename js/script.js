const UserInp = document.querySelector("#username");
const inputFields = document.querySelectorAll(".UserInp");
const submitButton = document.querySelector(".submit");
const emailInput = document.getElementById("email");
const emailTitle = document.querySelector(".mailTitle");
const username = document.getElementById("username");
const userTitle = document.querySelector(".userTitle");
const passTitle = document.querySelector(".passTitle");
const pass = document.getElementById("password");
const icon = document.querySelector(".icon");
const iconX = document.querySelector(".icon-x");
const invalidUsername = document.querySelector("#username");
const togglePassword = document.querySelector(".toggle-password");
const togglePasswordView = document.querySelector(".toggle-password-click");
const togglePasswordClose = document.querySelector(".toggle-password-close");

var usernameValue = username.value.toLowerCase();

function usernameOnFoc() {
  usernameValue = username.value.toLowerCase();
  if (usernameValue === "") {
    icon.classList.remove("active");
    iconX.classList.remove("active");
    invalidUsername.classList.remove("invalid");
    userTitle.classList.remove("valid");
    userTitle.classList.remove("invalid");
  } else if (usernameValue === "xklienz" || usernameValue === "") {
    icon.classList.remove("active");
    iconX.classList.add("active");
    invalidUsername.classList.add("invalid");
    userTitle.classList.remove("valid");
    userTitle.classList.add("invalid");
  } else {
    invalidUsername.classList.remove("invalid");
    icon.classList.add("active");
    iconX.classList.remove("active");
    userTitle.classList.add("valid");
    userTitle.classList.remove("invalid");
  }
}

function InpOnFoc(idType, titleType) {
  if (idType.value === "") {
    titleType.classList.remove("active");
  } else {
    titleType.classList.add("active");
  }
}

["username", "password", "email"].forEach(function (inputType) {
  document.getElementById(inputType).addEventListener("input", function () {
    detectInput(inputType);
  });
});

function detectInput(inputType) {
  if (inputType === "username") {
    usernameOnFoc();
  } else if (inputType === "password") {
    InpOnFoc(pass, passTitle);
  } else if (inputType === "email") {
    InpOnFoc(emailInput, emailTitle);
  }
}

window.onload = function () {
  usernameOnFoc();
  InpOnFoc(emailInput, emailTitle);
};

togglePassword.onclick = function () {
  if (pass.type === "password") {
    pass.type = "text";
    togglePassword.src = "img/eyeeagle-view.png";
  } else {
    togglePassword.src = "img/eyeeagle-close.png";
    pass.type = "password";
  }
};

inputFields.forEach((input) => {
  input.addEventListener("input", function () {
    const allInputsFilled = Array.from(inputFields).every(
      (input) => input.value.trim() !== ""
    );

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      emailInput.value.trim()
    );
    if (allInputsFilled && isEmailValid && usernameValue !== "xklienz") {
      submitButton.classList.add("active");
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.classList.remove("active");
      submitButton.setAttribute("disabled", "true");
    }
  });
});

//Lanjutkan ketika user sudah memasukan email dengan format yang benar maka emailTitle akan berubah jadi hijau (bukan pada saat user memasukan input di password)
