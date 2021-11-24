const body = document.body
// get all slide divs and put into slides NodeList
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
var parkName = ''

// 5 div pictures and #times hearted

const times1 = document.querySelector('#times1')
let timesClicked1 = 1234

const times2 = document.querySelector('#times2')
let timesClicked2 = 1111

const times3 = document.querySelector('#times3')
let timesClicked3 = 222

const times4 = document.querySelector('#times4')
let timesClicked4 = 333

const times5 = document.querySelector('#times5')
let timesClicked5 = 444

const times6 = document.querySelector('#times6')
let timesClicked6 = 555

const times7 = document.querySelector('#times7')
let timesClicked7 = 234

// Current Slide, starts at first slide in NodeList
let activeSlide = 0
setBgToBody()

// Set background to the body
// Set backgroundImage of the body to the backgroundImage from the div slide style
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  // if (activeSlide > 2) {
  //   location.href = '../login/index.html'
  // }

  setBgToBody()
  setActiveSlide()
  console.log(1)
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  // if (activeSlide > 3) {
  //   location.href = '../login/index.html'
  // }

  setBgToBody()
  setActiveSlide()
  console.log(2)
})

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}

document.body.addEventListener('dblclick', function () {
  createHeart(activeSlide)
  // location.href = '../login/index.html'
  console.log(activeSlide)
})

const createHeart = function (activeSlide) {
  switch (activeSlide) {
    case 0:
      times1.innerHTML = ++timesClicked1
      break
    case 1:
      times2.innerHTML = ++timesClicked2
      break
    case 2:
      times3.innerHTML = ++timesClicked3
      break
    case 3:
      times4.innerHTML = ++timesClicked4
      break
    case 4:
      times5.innerHTML = ++timesClicked5
      break
    case 5:
      times6.innerHTML = ++timesClicked6
      break
    case 6:
      times7.innerHTML = ++timesClicked7
      break
  }
}
