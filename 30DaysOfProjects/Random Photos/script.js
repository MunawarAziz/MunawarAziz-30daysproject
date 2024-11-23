// const images = document.querySelector(".image-container")

// const btn = document.querySelector(".btn")

// btn.addEventListener("click",()=>{
//     console.log("click")
//     addNewPic()
// });

// function addNewPic(){
//     const newimg = document.createElement("img");
//     newimg.src =`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
//     images.appendChild(newimg);
// };
const images = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    console.log("click");
    addNewPic();
});

function addNewPic() {
    const newimg = document.createElement("img");
    newimg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    
    // Handle error if the image fails to load
    newimg.onerror = () => {
        newimg.src = "path/to/placeholder/image.jpg"; // Provide a fallback image
    };
    
    images.appendChild(newimg);
}
