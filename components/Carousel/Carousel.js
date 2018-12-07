let current = 0;

class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftArrow = this.carouselElement.querySelector('.left-button');
        this.rightArrow = this.carouselElement.querySelector('.right-button');
        this.slides = this.carouselElement.querySelectorAll('img');
        this.slides[0].style.display = 'block';

        this.rightArrow.addEventListener('click', _ => this.slideRight());
        this.leftArrow.addEventListener('click', _ => this.slideLeft());
    }

    slideRight() {
        
        if(current < this.slides.length-1){
            current++;
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[current].style.display = 'block';
        }else{
            current = 0;
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[current].style.display = 'block';
        }
    }

    slideLeft() {
        if(current > 0){
            current--;
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[current].style.display = 'block';
        }else{
            current = this.slides.length-1;
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[current].style.display = 'block';
        }
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/