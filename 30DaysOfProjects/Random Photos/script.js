const imageConatiner = document.querySelector(".images-container")

const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    imgnum = 5;
    addNewPic()
});

function addNewPic(){
    for (let index = 0; index < imgnum; index++) {
        const newimg = document.createElement("img");
    newimg.src =`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    imageConatiner.appendChild(newimg);
        
    }
   
};
