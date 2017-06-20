//For https://sagecell.sagemath.org/

function initializePuppy(){
  var outer = document.getElementsByClassName('sagecell_output')[0]; 
  outer.style.overflow = 'hidden';
  var puppies = document.getElementsByClassName('sagecell_sessionOutput')[0];
  puppies.style.overflow = 'hidden';
	puppies.insertAdjacentHTML('beforeEnd', '<img id="puppy" src="http://static.wixstatic.com/media/e51cae_14d203aa93df4438a60cbdc2edb40468.png_srz_449_423_85_22_0.50_1.20_0.00_png_srz" style="position: absolute; transition: all 0.2s; left: 2%; top: 51%;">')
}

function movePuppy(){
	puppy.style.left = Math.round(Math.random()*90)+'%'
	puppy.style.top = Math.round(Math.random()*90)+'%'
}

initializePuppy();
setInterval(movePuppy, 200)
