const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitBtn = editProfileModal.querySelector(".modal__exit-btn");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitBtn = newPostModal.querySelector(".modal__exit-btn");

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
