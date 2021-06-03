/* Click show modal */
var modalElm = document.querySelector(".modal");
var modalBody = document.querySelector(".modal__body-detail-product");
var cartElm = document.querySelector(".header__menu-nav-bag");

function closeModal() {
  modalElm.style.display = "none";
  modalBody.style.display = "none";
  cartElm.style.display = "none";
}

function closeModalDetail() {
  modalElm.style.display = "none";
  modalBody.style.display = "none";
}

function closeModalCart() {
  modalElm.style.display = "none";
  cartElm.style.display = "none";
}

function showModalDetailProduct() {
  modalElm.style.display = "flex";
  modalBody.style.display = "block";
  if (modalElm.style.display === "flex") {
    modalBody.classList.add("modal-active");
  } else {
    modalBody.classList.remove("modal-active");
  }
}

function showModalCart() {
  modalElm.style.display = "flex";
  cartElm.style.display = "block";
  cartElm.classList.add(".modal-cart-active");
}
