/* cards init */
const rateCard = document.querySelector(".card");
const appreciateCard = document.querySelector(".card__appreciate");

/* buttons init */
const submitBtn = document.querySelector(".submit__btn");
const buttonRates = document.querySelectorAll(".btn");
const changeRate = document.querySelector(".rate__btn");

/* getting other elements */
const resultRate = document.querySelector(".result__selected");
const resultParagraph = document.querySelector(".result__desc");
const appreciateHeading = document.querySelector(".appreciate__hero");
const appreciateParagraph = document.querySelector(".appreciate__desc");

submitBtn.addEventListener("click", () => {
    if (resultRate.innerHTML == "") {
        appreciateCard.classList.remove("hidden");
        changeRate.classList.remove("hidden");
        rateCard.style.display = "none";
        resultParagraph.innerHTML = "Select a rate number.";
    }
    else {
        appreciateCard.classList.remove("hidden");
        rateCard.style.display = "none";
        appreciateHeading.classList.remove("hidden");
        appreciateParagraph.classList.remove("hidden");
    }
});

changeRate.addEventListener("click", () => {
    location.reload();
});

buttonRates.forEach((rate) => {
    rate.addEventListener("click", () => {
        resultRate.innerHTML = rate.innerHTML;
    });
});