var loginFormElm = document.querySelector("#loginForm");

if (loginFormElm) {
  loginFormElm.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

/* Redirect  */
function redirectAccount() {
  console.log("xxx");
  window.location.href = "account.html";
}

var products = [
  {
    id: "1",
    name: "Vũ",
  },
  {
    id: "2",
    name: "Phong",
  },
  {
    id: "3",
    name: "Tuấn",
  },
  {
    id: "4",
    name: "Hạnh",
  },
];

var productsInCart = {
  productId: "3",
};

function findProductById(productsInCart, products) {
  var result = [];
  
  return result;
}

console.log(findProductById(productsInCart, products));
