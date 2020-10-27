var btnLink = document.querySelector(".write-us-btn");
var modalPopup = document.querySelector(".pop-up");
var popupClose = modalPopup.querySelector(".pop-up-close");
var popupForm = modalPopup.querySelector(".popup-form");
var namePopup = modalPopup.querySelector(".input-name");
var emailPopup = modalPopup.querySelector(".email-input");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


btnLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.toggle("modal-show");

  namePopup.focus();

  if (storage) {
   namePopup.value = storage;

 }
 else {
    emailPopup.focus();
  }


});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

popupForm.addEventListener("submit", function (evt) {
   if (!namePopup.value || !emailPopup.value) {
       evt.preventDefault();
modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
     modalPopup.classList.add("modal-error");

  }
  else {
    localStorage.setItem("name", namePopup.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
