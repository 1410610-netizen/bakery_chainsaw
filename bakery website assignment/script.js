const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const cakeSize = document.querySelector("#cake-size");
const cakeFlavour = document.querySelector("#cake-flavour");
const cakeDecoration = document.querySelector("#cake-decoration");
const cakeTotal = document.querySelector("#cake-total");

function updateCakeTotal() {
  if (!cakeSize || !cakeFlavour || !cakeDecoration || !cakeTotal) {
    return;
  }

  const total = Number(cakeSize.value) + Number(cakeFlavour.value) + Number(cakeDecoration.value);
  cakeTotal.textContent = `£${total.toFixed(2)}`;
}

[cakeSize, cakeFlavour, cakeDecoration].forEach((select) => {
  if (select) {
    select.addEventListener("change", updateCakeTotal);
  }
});

updateCakeTotal();

const orderForm = document.querySelector("#order-form");
const formMessage = document.querySelector("#form-message");
const marketing = document.querySelector("#marketing");
const optOut = document.querySelector("#opt-out");

if (marketing && optOut) {
  marketing.addEventListener("change", () => {
    if (marketing.checked) {
      optOut.checked = false;
    }
  });

  optOut.addEventListener("change", () => {
    if (optOut.checked) {
      marketing.checked = false;
    }
  });
}

if (orderForm && formMessage) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
      formMessage.textContent = "Please complete the required fields before submitting.";
      return;
    }

    formMessage.textContent = "Thank you. Your request has been checked on this page, but it has not been sent to a database.";
    orderForm.reset();
    updateCakeTotal();
  });
}
