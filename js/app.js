const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const targetTime = new Date()
targetTime.setHours(targetTime.getHours() + 8)

function updateTime(){
    const currentTime = new Date()
    const timeDifference = targetTime - currentTime

    const hours =  Math.floor(timeDifference / (1000 * 60 * 60));
    const mins = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
    const secs =  Math.floor(timeDifference % (1000 * 60)/1000);


    hour.textContent = hours.toString().padStart(2, "0")
    min.textContent = mins.toString().padStart(2, "0")
    sec.textContent = secs.toString().padStart(2, "0")
}

updateTime()

setInterval(updateTime,100)