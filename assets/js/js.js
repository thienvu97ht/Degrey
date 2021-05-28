window.onscroll = function () {
  showProduct();
};

function showProduct() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document
      .getElementById("header__navbar-scroll")
      .classList.add("scroll__change-color");
  } else {
    document
      .getElementById("header__navbar-scroll")
      .classList.remove("scroll__change-color");
  }
}

/* Jquery*/
$(document).ready(function () {
  $(".sajid-1").owlCarousel({
    margin: 0,
    loop: true,
    items: 1,
    nav: false,
    navSpeed: 800,
    autoheight: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  var owl = $(".sajid-1");
  owl.owlCarousel();
  $(".owl-next-one").click(function () {
    owl.trigger("next.owl.carousel", [700]);
  });
  $(".owl-prev-one").click(function () {
    owl.trigger("prev.owl.carousel", [700]);
  });
});
