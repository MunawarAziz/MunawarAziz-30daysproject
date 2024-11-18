const body = document.querySelector("body")

body.addEventListener("mousemove", (e)=>{
    const posX = e.offsetX;
    const posY = e.offsetY;
    const span = document.createElement("span");
    span.style.left = posX + "px";
    span.style.top = posY + "px";
    const size = Math.random()*100
    span.style.width = size + "px"
    span.style.height = size + "px"
    body.appendChild(span);
    setTimeout(()=>{
        span.remove()
    },3000)
})