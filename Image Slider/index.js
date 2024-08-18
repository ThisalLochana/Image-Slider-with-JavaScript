//Image Slider

const slides = document.querySelectorAll(".slides img");
let sliderIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if(slides.length > 0){
        slides[sliderIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }else{
        console.log("No slides found. connect to the internent to load images");
        document.getElementById("p").textContent = "No slides found. connect to the internent to load images";
    }
}

function showSlide(index){
    if(index >= slides.length){
        sliderIndex = 0;
    }else if(index < 0){
        sliderIndex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
        slides[sliderIndex].classList.add("displaySlide");
    });
} 

function prevSlide() {
    clearInterval(intervalId);
    sliderIndex--;
    showSlide(sliderIndex);
    intervalId = setInterval(() => {
        sliderIndex++;
        showSlide(sliderIndex);
    }, 2000);
}

function nextSlide() {
    sliderIndex++;
    showSlide(sliderIndex);
}