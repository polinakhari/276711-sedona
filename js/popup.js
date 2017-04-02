var popSuccess = document.querySelector("popup__item--success");
var popFail = document.querySelector("popup__item--fail");
var popButtonSuccess = document.querySelector("btn__pop--success");
var popButtonFail = document.querySelector("btn__pop--fail");

popSuccess.classList.add("popup__item--success--opened");
popFail.classList.add("popup__item--fail--opened");

popButtonSuccess.addEventListener("click", function() {
  if (popSuccess.classList.contains("popup__item--success--opened")) {
    popSuccess.classList.add("popup__item--success--closed");
  }
});

popButtonFail.addEventListener("click", function() {
  if (popFail.classList.contains("popup__item--fail--opened")) {
    popFail.classList.add("popup__item--failure--closed");
  }
});
