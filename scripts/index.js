const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitBtn = editProfileModal.querySelector(".modal__exit-btn");
const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitBtn = newPostModal.querySelector(".modal__exit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector("#name");
const editProfileDescriptionInput = editProfileModal.querySelector("#description");
const editProfileSubmitBtn = editProfileModal.querySelector(".modal__submit-btn");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const cardCaptionInput = newPostModal.querySelector("#card-image-caption"); 
const cardLinkInput = newPostModal.querySelector("#card-image-input"); 
const cardForm = document.forms["new-post"];

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

editProfileBtn.addEventListener("click", function() {
    openModal(editProfileModal);
    editProfileNameInput.value = profileName.textContent;
    editProfileDescriptionInput.value = profileDescription.textContent;
});

editProfileExitBtn.addEventListener("click", function() {
    closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function() {
    openModal(newPostModal);
});

newPostExitBtn.addEventListener("click", function() {
    closeModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editProfileNameInput.value;
    profileDescription.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
}

editProfileModal.addEventListener('submit', handleProfileFormSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("card cap: " + cardCaptionInput.value);
  console.log("card link: " + cardLinkInput.value);
  closeModal(newPostModal);
  cardForm.reset();
}

newPostModal.addEventListener('submit', handleNewPostSubmit);