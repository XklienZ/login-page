const UserInp = document.querySelector("#username");
const inputFields = document.querySelectorAll(".UserInp");
const submitButton = document.querySelector(".submit");
const emailInput = document.getElementById("email");
const emailTitle = document.querySelector(".emailTitle");
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
const popupBox = document.querySelector(".popup-box");
const popupEmail = document.querySelector(".popup-email");
const popupUsername = document.querySelector(".popup-username");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var usernameValue = username.value.toLowerCase();

function popupMessage(typeToggle, forMessage, messageText) {
  if (forMessage === "email" && typeToggle === "add") {
    popupEmail.textContent = messageText;
    popupEmail.classList.add("active");
  } else if (forMessage === "email" && typeToggle === "remove") {
    popupEmail.classList.remove("active");
  } else if (forMessage === "username" && typeToggle === "add") {
    popupUsername.textContent = messageText;
    popupUsername.classList.add("active");
  } else if (forMessage === "username" && typeToggle === "remove") {
    popupUsername.classList.remove("active");
  }
}

function usernameInput() {
  usernameValue = username.value.toLowerCase();

  if (usernameValue === "") {
    icon.classList.remove("active");
    iconX.classList.remove("active");
    invalidUsername.classList.remove("invalid");
    userTitle.classList.remove("valid");
    userTitle.classList.remove("invalid");
    popupMessage("remove", "username");
  } else if (usernameValue === "xklienz" || usernameValue === "") {
    icon.classList.remove("active");
    iconX.classList.add("active");
    invalidUsername.classList.add("invalid");
    userTitle.classList.remove("valid");
    userTitle.classList.add("invalid");
    popupMessage("add", "username", "Username Already Taken");
  } else {
    invalidUsername.classList.remove("invalid");
    icon.classList.add("active");
    iconX.classList.remove("active");
    userTitle.classList.add("valid");
    userTitle.classList.remove("invalid");
    popupMessage("remove", "username");
  }
}

function emailFormat() {
  const isEmailValid = emailRegex.test(emailInput.value);
  if (emailInput.value === "") {
    emailTitle.classList.remove("invalid");
    emailTitle.classList.remove("valid");
    popupMessage("remove", "email");
  } else if (isEmailValid) {
    emailTitle.classList.remove("invalid");
    emailTitle.classList.add("valid");
    popupMessage("remove", "email");
  } else {
    emailTitle.classList.remove("valid");
    emailTitle.classList.add("invalid");
    popupMessage("add", "email", "Email Format Invalid");
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
  if (inputType === "email") {
    emailFormat();
  } else if (inputType === "username") {
    usernameInput();
  } else if (inputType === "password") {
    InpOnFoc(pass, passTitle);
  }
}

window.onload = function () {
  usernameInput();
  emailFormat();
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

    isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    if (allInputsFilled && isEmailValid && usernameValue !== "xklienz") {
      submitButton.classList.add("active");
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.classList.remove("active");
      submitButton.setAttribute("disabled", "true");
    }
  });
});
