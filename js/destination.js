let currentSelected = 'VietNam'

function showDestination(nameCountry){
    //Xóa nước đang chọn
    let preCountryElements = document.getElementsByName(currentSelected)
    for(let i = 0; i < preCountryElements.length; i++){
        preCountryElements[i].style.fill = '#E5ECF0'
    }
    document.getElementsByName(currentSelected + '-label')[0].style.fill = '#434B5C'
    document.getElementById(currentSelected + "-selector").classList.remove('destination-selector-selected')
    document.getElementById(currentSelected + "-content").style.display = 'none'

    //Hiển thị nước vừa được ấn vào
    currentSelected = nameCountry
    let countryElements = document.getElementsByName(nameCountry)
    for(let i = 0; i < countryElements.length; i++){
        countryElements[i].style.fill = '#8c9099'
    }
    document.getElementsByName(nameCountry + '-label')[0].style.fill = 'white'
    document.getElementById(currentSelected + "-selector").classList.add('destination-selector-selected')
    document.getElementById(currentSelected + "-content").style.display = 'block'
}

showDestination(currentSelected)