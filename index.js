const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const meterEl = document.getElementById("meter-el")
let feet = 3.281
let meter = 0.305

convertBtn.addEventListener("click", function() {    
     let convertFeet =  (inputEl.value * feet )    
     let converMetter = (inputEl.value / meter) 
     meterEl.textContent = 
     `
       ${inputEl.value} meters =  ${convertFeet.toFixed(3)} feet |
       ${inputEl.value} feet   =  ${converMetter.toFixed(3)} meters
     `
     inputEl.value = ""      
})