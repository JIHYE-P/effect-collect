import './style.scss'

let currentPage = 1
let flag = false
const sliderLength = document.querySelectorAll('.slide').length
const partEl = document.querySelectorAll('.bg-part')

const randomDelay = () => {
  const part = [...partEl]
  part.forEach(el => el.style.transitionDelay = `${(Math.floor(Math.random()*8)+3)/10}s`)
}

const fancySlider = (pageIndex) => {
  flag = true
  const calculatedMargin = 0 - (pageIndex - 1) * 100;
  const currentPart = document.querySelectorAll('.bg-part');
  [...currentPart].forEach(el => el.style.marginTop = `${calculatedMargin}vh`)
}

const slideDown = () => {
  if(currentPage >= sliderLength) return
  currentPage++
  fancySlider(currentPage)
}

const slideUp = () => {
  if(currentPage <= 1) return
  currentPage--
  fancySlider(currentPage)
}

const handleScroll = ev => {
  const {wheelDelta, detail} = ev
  if(flag) return  
  randomDelay()
  if(wheelDelta > 0 || detail < 0) { // up
    slideUp()
  }else{ // down
    slideDown()
  }
  setTimeout(() => flag = false, 2000)
}

document.addEventListener('wheel', handleScroll)


