const refs = {
    time: document.querySelector('#time'),
    greeting: document.querySelector('#greeting'),
    name: document.querySelector('#name'),
    focus: document.querySelector('#focus'),

}


refs.name.addEventListener('focus', onNameClear)


refs.name.addEventListener('keypress', setName)
refs.name.addEventListener('blur', setName)

refs.focus.addEventListener('keypress', setFocus)
refs.focus.addEventListener('blur', setFocus)


function showTime() {
    let time = new Date()
    hour = time.getHours()
    min = time.getMinutes()
    sec = time.getSeconds()


    // const amPm = hour >= 12 ? 'PM' : 'AM'

    // hour = hour % 12 || 12;



    refs.time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
    setTimeout(showTime, 1000)

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

function onBgImgChange() {
    let today = new Date()
    hour = today.getHours()
    
    if (hour <= 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')"
         document.body.style.color = '#B0E0E6'
        refs.greeting.textContent = 'Good Morning'
        refs.time.style.color = '#1E90FF'
        
    } else if (hour <= 22) {
        document.body.style.backgroundImage = "url('./img/evening.jpg')"
        document.body.style.color = '#B0E0E6'
        refs.greeting.textContent = 'Good evening'
        refs.time.style.color = '#AFEEEE'
        
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')"
        refs.greeting.textContent = 'Good night'
        document.body.style.color = '#fff'
        refs.time.style.color = '#C0C0C0'
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        refs.name.textContent = '[Enter your name]'
       
    } else {
        refs.name.textContent = localStorage.getItem('name')
    }
}

function setName(e) {
    console.log(e)
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText)
            refs.name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        refs.focus.textContent = '[Enter your focus]'
       
    } else {
        refs.focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e) {
    console.log(e)
    if (e.type === "keypress") {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText)
            refs.focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

function onNameClear() {
    if (refs.name.textContent = 'Enter your name') {
        refs.name.textContent = ''
    }
}





// Run

showTime()
onBgImgChange()
getName()
getFocus()
