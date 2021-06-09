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


    const amPm = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12;



    refs.time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
    setTimeout(showTime, 1000)

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Run

showTime()