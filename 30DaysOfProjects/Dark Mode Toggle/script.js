const input = document.querySelector(".input")

const body = document.querySelector("body")
input.checked =JSON.parse(localStorage.getItem("mode"));
Updatebody()

function Updatebody(){
    if(input.checked){
        body.style.background = "black"
    }else{
        body.style.background = "white"
    }
}

input.addEventListener("input",()=>{
    Updatebody()
    UpdateLocalStorage()
})

function UpdateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(input.checked)
    )
}