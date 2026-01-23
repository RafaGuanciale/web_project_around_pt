const initialCards = [
  {
    name: "Vale de Yosemit",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
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

initialCards.forEach(function(item) {
    console.log(item.name);
});

const editPopupModal = document.querySelector("#edit-popup")
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeEditProfileModal = editPopupModal.querySelector(".popup__close")
const formElement = editPopupModal.querySelector("#edit-profile-form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const nameInput = editPopupModal.querySelector(".popup__input_type_name");
const jobInput = editPopupModal.querySelector(".popup__input_type_description");

function openModal(modal){
  modal.classList.add("popup_is-opened");
}

function closeModal(modal){
  modal.classList.remove("popup_is-opened");
}

editProfileBtn.addEventListener("click",handleOpenEditModal);

closeEditProfileModal.addEventListener("click", () =>{
  closeModal(editPopupModal);
})

function fillProfileForm(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleOpenEditModal(){
  openModal(editPopupModal);
  fillProfileForm();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(editPopupModal);
}

formElement.addEventListener("submit",handleProfileFormSubmit);