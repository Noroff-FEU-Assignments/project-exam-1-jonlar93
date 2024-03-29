function handleErrorMessage(id, isValid, message) {
  const errorSpan = document.getElementById(id);
  if (isValid) {
    errorSpan.textContent = "";
    errorSpan.classList.remove("active");
  } else {
    errorSpan.textContent = message;
    errorSpan.classList.add("active");
  }
}

function validateName() {
  const name = document.getElementById("name").value;
  const isValid = name.length >= 6;
  handleErrorMessage("nameError", isValid, "Name must be at least 5 characters long.");
  return isValid;
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const isValid = /\S+@\S+\.\S+/.test(email);
  handleErrorMessage("emailError", isValid, "Please enter a valid email address.");
  return isValid;
}

function validateSubject() {
  const subject = document.getElementById("subject").value;
  const isValid = subject.length >= 16;
  handleErrorMessage("subjectError", isValid, "Subject must be more than 15 characters long.");
  return isValid;
}

function validateMessage() {
  const message = document.getElementById("message").value;
  const isValid = message.length >= 26;
  handleErrorMessage("messageError", isValid, "Message must be more than 25 characters long.");
  return isValid;
}

// ADD EVENT LISTENER FOR BLUR SO I GET REAL TIME ERROR MESSAGES
export function addEventListeners() {
  document.getElementById("name").addEventListener("blur", validateName);
  document.getElementById("email").addEventListener("blur", validateEmail);
  document.getElementById("subject").addEventListener("blur", validateSubject);
  document.getElementById("message").addEventListener("blur", validateMessage);

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit

    const isValid = validateName() && validateEmail() && validateSubject() && validateMessage();

    if (isValid) {
      const succesSpan = document.getElementById("success");
      succesSpan.classList.add("success", "active-success");
      succesSpan.textContent = "thank you for your message";
    }
  });
}
