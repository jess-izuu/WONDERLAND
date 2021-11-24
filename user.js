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
const text1 = `W e l c o m e B a c k !`
let idx1 = 1
let speed1 = 250

writeText1()

function writeText1() {
  textEl1.innerText = text1.slice(0, idx1)

  idx1++

  if (idx1 > text1.length) {
    idx1 = 1
  }

  setTimeout(writeText1, speed1)
}
