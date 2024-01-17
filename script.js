const rating = document.querySelectorAll(".bttn");
const section = document.getElementById("section");
const submitButton = document.querySelector(".button");
const thanksCard = document.getElementById("thanks-card");



rating.forEach(function (rate) {
    rate.addEventListener('click', function () {
        var clickedValue = this.value;
        const ratingElement = document.getElementById("rating-number");
        ratingElement.textContent = clickedValue;
    })
})



submitButton.addEventListener("click", () => {
    section.style.display = "none";

    thanksCard.style.display = "flex";
});
