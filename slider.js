//gets all the slides and dots
let slides = document.querySelector("#slider-box").children;
let dots = document.querySelector("#dot-box").children;

//current slide index
let i = 0; 

//forward slide button
function forwSlideIndex(){
    if(i >= 0 && i < slides.length - 1){
        i++; 
    }else{
        if(i >= slides.length - 1){
            i = 0;
        }
    }
}

function forwSlide(){
    if(i < slides.length - 1){
        slides[i].classList.remove("slide-active");
        dots[i].classList.remove("dot-active");        
        slides[(i + 1)].classList.add("slide-active");
        dots[(i + 1)].classList.add("dot-active");  
    } else {
        if (i === slides.length - 1){
            slides[i].classList.remove("slide-active");
            dots[i].classList.remove("dot-active");
            slides[0].classList.add("slide-active");
            dots[0].classList.add("dot-active");
        }else {
            i = 0;
            slides[i].classList.remove("slide-active");
            dots[i].classList.remove("dot-active");
            slides[(i + 1)].classList.add("slide-active");
            dots[(i + 1)].classList.add("dot-active");
        }
    }
    clearInterval();
    forwSlideIndex();
}

//previous slide button
function prevSlideIndex(){
    if(i > 0){
        i--; 
    }else{
        if(i === 0){
            i = slides.length - 1;
        }
    }
}

function prevSlide(){
    if(i === 0){
        slides[i].classList.remove("slide-active");
        dots[i].classList.remove("dot-active");
        slides[(slides.length - 1)].classList.add("slide-active");
        dots[(dots.length - 1)].classList.add("dot-active");
    } else{
        if(i <= slides.length - 1 && i !== 0){
            slides[i].classList.remove("slide-active");
            dots[i].classList.remove("dot-active");
            slides[i - 1].classList.add("slide-active");
            dots[i - 1].classList.add("dot-active");
        }
    } 
    prevSlideIndex();
}

//timer - gets next slide automatically (every 6s)
function slideTimer() {
    setInterval(function(){ 
        forwSlide(); 
    }, 6000);
}

slideTimer();

//changes slides and dots while clicking on a dot
function activeSlide(n){
    activeDot(n);
    activeImage(n);
}

function activeDot(n){
    for(i = 0; i < dots.length; i++){
        j = dots[i];
        if(j !== n){
            dots[i].classList.remove("dot-active");
        } 
    }  
    clearInterval();
    dots[n].classList.add("dot-active");
}

function activeImage(n){
    for(i = 0; i < slides.length; i++){
        j = slides[i];
        if(j !== n){
            slides[i].classList.remove("slide-active");
        }
    }
    slides[n].classList.add("slide-active");
    clearInterval();
    if(n === slides.length - 1){
        i--; 
    }; 
}

//gets the slide and dot with index 0 while loading the page
window.onload = function(){
    slides[0].classList.add("slide-active");
    dots[0].classList.add("dot-active");
}