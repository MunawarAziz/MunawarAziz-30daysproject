const Hour = document.getElementById("hour")
const minutes = document.getElementById("Minutes")
const second = document.getElementById("Seconds")
const ampm = document.getElementById("ampm")

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "Am"


if (h > 12){
    h = h-12
    ampm = "Pm"
}
Hour.innerText = h
minutes.innerText = m
second.innerText = s
ampm,(innerText = ampm);
setTimeout(()=>{
    updateclock()
},1000)
}
updateclock()