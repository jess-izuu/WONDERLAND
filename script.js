const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

// Animated quote on image
const textEl1 = document.getElementById('text1')
const text1 = ` a lifetime of adventures"`
let idx1 = 1
let speed1 = 150

writeText1()

function writeText1() {
  textEl1.innerText = text1.slice(0, idx1)

  idx1++

  if (idx1 > text1.length) {
    idx1 = 1
  }

  setTimeout(writeText1, speed1)
}

// Animated Welcome
const textEl2 = document.getElementById('text2')
const text2 = `Welcome to WONDERLAND`
let idx2 = 1
let speed2 = 250

writeText2()

function writeText2() {
  textEl2.innerText = text2.slice(0, idx2)

  idx2++

  if (idx2 > text2.length) {
    idx2 = 1
  }

  setTimeout(writeText2, speed2)
}
