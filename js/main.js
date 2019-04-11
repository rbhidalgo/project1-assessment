const inputBox = document.querySelector('.number')
const plustButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const topNumberDisplay = document.querySelector('.top-number')

plustButton.addEventListener('click', function(){
    let inputBoxNumb = parseInt(inputBox.value)
    let topNumbtoNumb = parseInt(topNumberDisplay.innerText)
    let addNumbers = inputBoxNumb + topNumbtoNumb
    topNumberDisplay.innerHTML = addNumbers
    if (addNumbers < 0) {
        topNumberDisplay.style.color = 'red';
    }
    else topNumberDisplay.style.color = 'black';
})

minusButton.addEventListener('click', function(){
    let inputBoxNumb = parseInt(inputBox.value)
    let topNumbtoNumb = parseInt(topNumberDisplay.innerText)
    let subNumbers = topNumbtoNumb - inputBoxNumb
    topNumberDisplay.innerHTML = subNumbers
    if (subNumbers < 0) {
        topNumberDisplay.style.color = 'red';
    }
    else topNumberDisplay.style.color = 'black';
})