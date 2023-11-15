

let input = document.getElementById('one')
let planet = document.getElementById('planet')
let text = document.getElementById('text')
let name = document.getElementById('name')
let weight = document.getElementById('weight')
let select = document.getElementById('hmm')
let option = document.getElementsByTagName('option')
let button = document.getElementById('three')
let legend = document.getElementById('legend')
 let div = document.getElementById('div')

document.body.addEventListener ('mouseover', ()=> {
if ( input.value == 0 ) {
div.style.visibility = 'visible'
planet.style.visibility = 'hidden'
weight.style.visibility = 'hidden'
legend.textContent = 'Select a planet & input mass'
}

})


select.addEventListener('change' ,  () => {

let selectedValue = Number(select.value)



button.addEventListener ( 'click' , () => { 

let theWeight =   `${(input.value * selectedValue).toFixed(2)}N`
weight.textContent = theWeight
planet.innerHTML = ''
div.style.visibility = 'visible'

  if (input.value == 0 ){
weight.style.visibility = 'hidden'
legend.textContent = 'Mass is required' }


else if (selectedValue == 24.79){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="jupiter.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Jupiter</i> is `
}

else if (selectedValue == 9.81 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="earth.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Earth </i> is `
}

else if (selectedValue == 3.71 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="mars.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Mars </i> is `
} else if (selectedValue == 3.7 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="mercury.jpg" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Mercury</i> is `
}else if (selectedValue == 11.15 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="neptune.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Neptune </i> is `
}else if (selectedValue == 0.62 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="pluto.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Pluto</i> is `
}else if (selectedValue == 10.44 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="saturn.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Saturn</i> is `
} else if (selectedValue == 8.69 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="uranus.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name">Uranus</i> is `
} else if (selectedValue == 8.87 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="venus.png" alt="">`
legend.innerHTML = `The objects weight on planet <i id="name"> Venus</i> is `
} else if (selectedValue == 1.62 ){
weight.style.visibility = 'visible'
planet.style.visibility = 'visible'
planet.innerHTML = `<img src="moon.png" alt="">`
legend.innerHTML = `The objects weight on the <i id="name">Moon</i> is `
}







})



})








