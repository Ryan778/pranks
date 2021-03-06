/* rgb.js v0.2.0 - 11.7.18
(C) 2018 Ryan Zhang. Feel free to reuse under CC-BY-SA 4.0. 
Description: It does a couple of things. Best used when put in a userscript (but can also be directly injected into any website). 
Usage instructions: 
1) Go to any website
2) Run code (feel free to disable features if wanted)
3) Have fun
*/
let rgb_config = {
  fancy_fonts: true, //rgb comic sans ftw
  cat_images: true, //replace all images with cats
  spinny_image: true, //images will spin (after 3s), hovering over an image will make it spin faster
  marvelous_music: true //self explanatory
}

document.body.insertAdjacentHTML('beforeEnd', `<audio id="rgb_audio" src="https://ryan778.github.io/bkmusic/tracks/sax.mp3" loop></audio>`);
if(rgb_config.fancy_fonts) document.body.insertAdjacentHTML('beforeEnd', `<style>body, div, p, h1, h2, h3, h4, h5, h6, .theme-dark, .theme-dark .markup-2BOw-j{font-family: "Comic Sans MS" !important; animation-name: woah; animation-duration: 1s; animation-iteration-count: infinite; animation-timing-function: linear} @keyframes woah {0% {color: #f55} 17% {color: #ff5} 34%  {color: #5f5} 50% {color: #5ff} 67% {#5f5} 84% {color: #f5f} 100% {color: #f55}} div:hover, p:hover{font-family: "Impact", "Arial Black" !important; font-weight: bold}</style>`); 
if(rgb_config.spinny_image) document.body.insertAdjacentHTML('beforeEnd', `<style>img{animation-name: spinny; animation-duration: 4s; animation-iteration-count: infinite; animation-timing-function: linear; animation-delay: 3s} img:hover{animation-duration: 1s} @keyframes spinny {0% {transform: rotate(0deg)} 100% {transform: rotate(360deg)}}</style>`)
var rgb_i = document.getElementsByTagName('img'); 
if(rgb_config.cat_images) for(let i = 0; i < rgb_i.length; i++){rgb_i[i].src = `https://placekitten.com/${rgb_i[i].offsetWidth}/${rgb_i[i].offsetHeight}`}
if(rgb_config.marvelous_music) rgb_audio.play(); 
