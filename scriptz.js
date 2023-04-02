window.addEventListener("DOMContentLoaded", event => {
const audio = document.querySelector("audio");
audio.volume = 0.7;
audio.play();
});

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
  location.replace('https://4thdimension.live/HP/')


})
