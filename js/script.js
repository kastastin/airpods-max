const contentItems = document.querySelectorAll(".content-item");
const chooseColorBtns = document.querySelectorAll(".choose-color__btn");

chooseColorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const color = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${color}`);

    // Remove active class from ALL buttons
    chooseColorBtns.forEach((btn) => {
      btn.classList.remove("choose-color__btn_active");
    });

    target.classList.add("choose-color__btn_active");

    // Remove active class from ALL content items
    contentItems.forEach((item) => {
      item.classList.remove("content-item_active");
    });

    contentActive.forEach((item) => {
      item.classList.add("content-item_active");
    });
  });
});
