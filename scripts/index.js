const initialCards = [
  {name: "Landscape in Film", link: "https://images.unsplash.com/photo-1757583013110-f1f821d9b398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Green Arched Walkway", link: "https://images.unsplash.com/photo-1758061607997-9acb866c12e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Seaside Town", link: "https://images.unsplash.com/photo-1755867712452-871192ab3b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Cabin in the Tall Grasses", link: "https://images.unsplash.com/photo-1756916474895-bb296434aeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"},
  {name: "Bridge Beneath Autumn Canopy", link: "https://images.unsplash.com/photo-1757995679273-c0bf33a90a5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Step into the Dunes", link: "https://images.unsplash.com/photo-1757601154408-402910067c40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOTF8fHxlbnwwfHx8fHw%3D"}
];
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector("#name");
const editProfileDescriptionInput = editProfileModal.querySelector("#description");
const editProfileSubmitBtn = editProfileModal.querySelector(".modal__submit-btn");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const cardCaptionInput = newPostModal.querySelector("#card-image-caption"); 
const cardLinkInput = newPostModal.querySelector("#card-image-input"); 
const cardForm = document.forms["new-post"];
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardContainer = document.querySelector(".cards__list");
const fullScreenModal = document.querySelector("#full-screen-modal");
const fullScreenImage = fullScreenModal.querySelector(".modal__img");
const fullScreenCaption = fullScreenModal.querySelector(".modal__img-caption");
const modalExitBtns = document.querySelectorAll(".modal__exit-btn");
const modals = document.querySelectorAll(".modal");

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", escapeModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", escapeModal);
}

modals.forEach((modal) => {
  modal.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("modal")) {
      closeModal(evt.target.closest(".modal"));
    }
  });
});  

function escapeModal(evt) {
  if (evt.key == "Escape") {
    closeModal(document.querySelector(".modal.modal_opened"));
  }
}

editProfileBtn.addEventListener("click", function() {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  resetValidation(editProfileModal, [editProfileNameInput, editProfileDescriptionInput], settings);
  openModal(editProfileModal);
});

newPostBtn.addEventListener("click", function() {
  openModal(newPostModal);
});

modalExitBtns.forEach((button) => {
  button.addEventListener("click", function() {
    const popup = button.closest(".modal");
    closeModal(popup);
  }); 
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
  disableButton(editProfileSubmitBtn, settings);
}

editProfileModal.addEventListener('submit', handleProfileFormSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: cardCaptionInput.value,
    link: cardLinkInput.value
  }
  cardContainer.prepend(getCardElement(newCardData));
  closeModal(newPostModal);
  cardForm.reset();
  disableButton(newPostSubmitBtn, settings);
}

newPostModal.addEventListener('submit', handleNewPostSubmit);

initialCards.forEach(function (item) {
  const newCard = getCardElement(item);
  cardContainer.prepend(newCard);
});

function getCardElement(data) {
  let cardElement = cardTemplate.cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".card__title");
  const cardElementImage = cardElement.querySelector(".card__img");
  cardElementImage.alt = `${data.name}`;
  cardElementImage.src = `${data.link}`;
  cardElementTitle.textContent = `${data.name}`;


  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", function(evt) {
    evt.target.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", function() {
    cardElement.remove();
  });

  cardElementImage.addEventListener("click", function () {
    fullScreenCaption.textContent = `${data.name}`;
    fullScreenImage.src = `${data.link}`;
    fullScreenImage.alt = `${data.name}`;
    openModal(fullScreenModal);
    
  });

  return cardElement;
}