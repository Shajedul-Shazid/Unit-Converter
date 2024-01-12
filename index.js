const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const meterEl = document.getElementById("meter-el")
const gallonEl = document.getElementById("gallon-el")
const massEl = document.getElementById("mass-el")
let feet = 3.281
let meter = 0.305

convertBtn.addEventListener("click", function() {  
    // Length (Feet/Meter)  
     let convertFeet =  inputEl.value * feet     
     let converMetter = inputEl.value / meter 
     meterEl.textContent = 
     `
       ${inputEl.value} meters =  ${convertFeet.toFixed(3)} feet |
       ${inputEl.value} feet   =  ${converMetter.toFixed(3)} meters
     `
    //  Volume (Gallon/Liter)
     let convertGallon = inputEl.value * 0.264
     let convertLeter = inputEl.value * 3.785

     gallonEl.textContent =      `
      ${inputEl.value} leter = ${convertGallon.toFixed(3)} gallon |
      ${inputEl.value} gallon = ${convertLeter.toFixed(3)} leter
     `
    //  Mass (Pounds/Kilogram)

    let convertMass = inputEl.value * 2.205 
    let convertPounds = inputEl.value * 0.454

    massEl.textContent = 
    `
     ${inputEl.value} kilos = ${convertMass.toFixed(3)} pounds |
     ${inputEl.value} pounds = ${convertPounds.toFixed(3)} kilos
    `

     inputEl.value = ""      
})