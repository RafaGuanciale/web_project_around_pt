const profileForm = document.getElementById("edit-profile-form");
const newCardFormValidation = document.getElementById("new-card-form");
const profileFormInputs = profileForm.querySelectorAll(".popup__input");
const newCardFormInputs = newCardFormValidation.querySelectorAll(".popup__input");
const profileFormButton = profileForm.querySelector(".popup__button");
const newCardButton = newCardFormValidation.querySelector(".popup__button");

function formInputVerification(input) {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
  });
}

profileFormInputs.forEach((input) => {
  formInputVerification(input);
});

newCardFormInputs.forEach((input) => {
  formInputVerification(input);
});

function showInputError(element, errorMessage) {
  const elementForm = element.closest("form");
  const errorElement = elementForm.querySelector(`.${element.id}-input-error`);
  element.classList.add("form__input_type__error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideInputError(element) {
  const elementForm = element.closest("form");
  const errorElement = elementForm.querySelector(`.${element.id}-input-error`);
  element.classList.remove("form__input_type__error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
}

function hasInvalidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}

function toggleButton(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}
