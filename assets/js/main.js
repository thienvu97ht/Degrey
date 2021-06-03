/* Click show modal */
var modalElm = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__body");

function showModal() {
  modalElm.style.display = "flex";
  if (modalElm.style.display === "flex") {
    modalBody.classList.remove("modal-inactive");
    modalBody.classList.add("modal-active");
  } else {
    modalBody.classList.remove("modal-active");
  }
}

function closeModal() {
    modalElm.style.display = "none";
}
