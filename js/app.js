const container = document.querySelector('#testing-container')

if(container) {
    container.addEventListener('click', event => {
        console.log(container.clientWidth)
    })
}


const range = document.querySelector('#custom-range')
const valueContainer = document.querySelector('#range-value-container')

if(range && valueContainer) {
    valueContainer.textContent = 'Range Value: ' + range.value

    range.addEventListener('input', () => {
        valueContainer.textContent = 'Range Value: ' + range.value
    })
}

const range2 = document.querySelector('#custom-range2')
const valueContainer2 = document.querySelector('#range-value-container2')

if(range2 && valueContainer2) {
    valueContainer2.textContent = 'Range Result: ' + range2.value

    range2.addEventListener('input', () => {
        valueContainer2.textContent = 'Range Result: ' + range2.value
    })
}