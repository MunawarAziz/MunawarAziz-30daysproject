const monthName = document.getElementById("month-name")
const dayname = document.getElementById("day-name")
const daynumber = document.getElementById("day-number")
const year = document.getElementById("year")
const daytime = document.getElementById("day-time")


const date = new Date();


monthName.innerHTML = date.toLocaleString("en", {
    month: "long"
})
dayname.innerHTML = date.toLocaleString("en",{
    weekday:"long"
})
daynumber.innerHTML = date.getDate()
setInterval(function(){
    let day = new Date()
    daytime.innerHTML = day.toLocaleTimeString()
}, 1000);
year.innerHTML = date.getFullYear()