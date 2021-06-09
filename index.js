const refs = {
    time: document.querySelector('#time'),
    greeting: document.querySelector('#greeting'),
    name: document.querySelector('#name'),
    focus: document.querySelector('#focus'),

}
console.log(refs.focus)

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
        refs.greeting.textContent = 'Good Morning'
    } else if (hour <= 18) {
        document.body.style.backgroundImage = "url('./img/evening.jpg')"
        refs.greeting.textContent = 'Good evening'
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')"
        refs.greeting.textContent = 'Good night'
    }
}

function getName() {
    if (localStorage.getItem('name' === null)) {
        name.textContent = 'Enter your name'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText)
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

// Run

showTime()
onBgImgChange()