
let rdmRestaurant = document.querySelector('#randomRestaurant')
let rdmArr = ['SlapFish', 'StrapTank', 'R&R BBQ']


function randomRestaurant(event) {
    // event.preventDefault()
    alert((rdmArr))    //this one at least gives me the list LOL
    // alert (rdmArr[Math.random() * array.length)  tried this
    // alert(rdmArr.shuffle(list)); tried this one too
}





rdmRestaurant.addEventListener('click', randomRestaurant)