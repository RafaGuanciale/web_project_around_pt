const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const editPopupModal = document.querySelector("#edit-popup");
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeEditProfileModal = editPopupModal.querySelector(".popup__close");
const formElement = editPopupModal.querySelector("#edit-profile-form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const nameInput = editPopupModal.querySelector(".popup__input_type_name");
const jobInput = editPopupModal.querySelector(".popup__input_type_description");
const cardList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const newCardModal = document.querySelector("#new-card-popup");
const newCardBtn = document.querySelector(".profile__add-button");
const closeNewCardModal = newCardModal.querySelector(".popup__close");
const newCardForm = newCardModal.querySelector("#new-card-form");
const cardNameInput = newCardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardForm.querySelector(".popup__input_type_url");
const imagePopupModal = document.querySelector("#image-popup");
const closeImagePopupModal = imagePopupModal.querySelector(".popup__close");
const cardImagePopup = imagePopupModal.querySelector(".popup__image");
const cardPopupCaption = imagePopupModal.querySelector(".popup__caption");

editProfileBtn.addEventListener("click", handleOpenEditModal);
newCardBtn.addEventListener("click", () => {
  openModal(newCardModal);
});

closeNewCardModal.addEventListener("click", () => {
  closeModal(newCardModal);
});

closeImagePopupModal.addEventListener("click", () => {
  closeModal(imagePopupModal);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleOpenEditModal() {
  openModal(editPopupModal);
  fillProfileForm();
}

closeEditProfileModal.addEventListener("click", () => {
  closeModal(editPopupModal);
});

formElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(editPopupModal);
}

function getCardElement(
  name = "Lugar sem nome",
  link = "images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_is-active");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    cardImagePopup.src = cardImage.src;
    cardImagePopup.alt = name;
    cardPopupCaption.textContent = name;
    openModal(imagePopupModal);
  });

  return cardElement;
}

function renderCard(name, link, box) {
  const cardCreated = getCardElement(name, link);
  box.prepend(cardCreated);
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardList);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  renderCard(name, link, cardList);
  closeModal(newCardModal);
  evt.target.reset();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);
