// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	alert('Your form has been submitted');
// }

// let form = document.querySelector('#contact');
// let img = document.querySelector('img')

// form.addEventListener('submit', handleSubmit);
// img.addEventListener('mouseover', giveCompliment)

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual')

function favColor() {             //also dont need event if not defaulting
                                  //dont need preventdefault
    alert('Clear')
}

function favPlace() {
    
    alert('Outdoors')
}

function favRitual() {
    
    alert('Head Bangin')
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)