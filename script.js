//problem arises when I try to get the down arrow to function

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction == 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slidesLength -1) {
      activeSlideIndex = 0
    }
  }/* else if (direction == 'down') {     //why won't the down arrow work whe I copied everything exactly as presented in the tutorial?....
    //If I comment out this else statment, everything will work as it's meant to. (well everything except for the down arrow ofc...)
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength -1
    } */

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`


}