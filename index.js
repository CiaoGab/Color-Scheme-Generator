const getColorBtn = document.getElementById('get-scheme-btn')
const colorColumns = document.querySelectorAll('.color-column')
const colorCodes = document.querySelectorAll('.color-code')
const schemeDropdown = document.getElementById('scheme')
const colorPicker = document.getElementById('color-picker')

function getScheme() {
    const hexValue = colorPicker.value.replace('#', '');
    const mode = `${schemeDropdown.value}`

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}&count=${colorColumns.length}`)
    .then(res=>res.json())
    .then(data=>{
        colorColumns.forEach((column, i) =>{
           colorColumns.forEach((column, i) => {
                const hex = data.colors[i].hex.value
                column.style.backgroundColor = hex
                colorCodes[i].textContent = hex
})

    })
    })
}

getColorBtn.addEventListener('click', getScheme)



