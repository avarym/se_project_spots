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
const cardCaptionInput = newPostModal.querySelector("#card-image-input"); 
const cardLinkInput = newPostModal.querySelector("#card-image-caption"); 

editProfileBtn.addEventListener("click", function() {
    editProfileModal.classList.add("modal_opened");
});

editProfileExitBtn.addEventListener("click", function() {
    editProfileModal.classList.remove("modal_opened");
});

newPostBtn.addEventListener("click", function() {
    newPostModal.classList.add("modal_opened");
});

newPostExitBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_opened");
});

editProfileNameInput.value = profileName.textContent;
editProfileDescriptionInput.value = profileDescription.textContent;

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editProfileNameInput.value;
    profileDescription.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal_opened");
}

editProfileModal.addEventListener('submit', handleProfileFormSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("card cap: " + cardCaptionInput.value);
  console.log("card link: " + cardLinkInput.value);
  newPostModal.classList.remove("modal_opened");
}

newPostModal.addEventListener('submit', handleNewPostSubmit);