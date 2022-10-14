console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted');
}

function giveCompliment(evt) {
	evt.preventDefault();
	alert('give the user a compliment')
}


let form = document.querySelector('#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', giveCompliment)

{/* <img onmouseover="img" */}