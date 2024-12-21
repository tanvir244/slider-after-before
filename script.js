const slider = document.querySelector(".image_comparision .slider");
const beforeImage = document.querySelector(".image_comparision .before_image");
const sliderLine = document.querySelector(".image_comparision .slider-line");
const sliderIcon = document.querySelector(".image_comparision .slider-icon");

slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";
    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
})