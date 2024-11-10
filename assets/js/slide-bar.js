// Access the Images
let slideImages = document.querySelectorAll('.slides img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s forwards'; // Animação de saída
    let prevCounter = counter;
    
    if(counter >= slideImages.length - 1){
        counter = 0;
    } else {
        counter++;
    }

    slideImages[counter].style.animation = 'next2 0.5s forwards'; // Animação de entrada
    indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s forwards'; // Animação de saída
    let prevCounter = counter;

    if(counter == 0){
        counter = slideImages.length - 1;
    } else {
        counter--;
    }

    slideImages[counter].style.animation = 'prev2 0.5s forwards'; // Animação de entrada
    indicators();
}

// Auto sliding (every 6 seconds)
let deletInterval;  // Declare a variable to hold the interval ID.

function autoSliding(){
    // Only set the interval if it's not already running.
    if (!deletInterval) {
        deletInterval = setInterval(timer, 4000);  // Adjusted to 6 seconds (6000 ms)
    }
}

function timer(){
    slideNext();
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
    deletInterval = null;  // Reset the interval variable when mouse is over
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);


// Update the indicators (dots)
function indicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicators
function switchImage(currentImage){
    let imageId = currentImage.getAttribute('attr');

    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s forwards';
    } else if(imageId < counter){
        slideImages[counter].style.animation = 'prev1 0.5s forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s forwards';
    }

    indicators();
}

