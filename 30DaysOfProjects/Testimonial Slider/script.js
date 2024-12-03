const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "https://thumbs.dreamstime.com/b/lion-logo-lion-king-head-royal-golden-crown-vector-king-beasts-stencil-design-brand-logotype-emblem-lion-logo-lion-321371243.jpg",
        text:"This is unbelievable i would be lost without Apple"
    },
    {
        name: "Munawar G",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAa-W0Y2RYrN5AjfgZG1zFa5bnJRjHNoZHUw&s",
        text:"Apple continues to be a major player in the tech market, consistently releasing new hardware and software updates while expanding its services portfolio."
    },
    {
        name: "Jamye G",
        photoUrl: "https://cdn.iconfinder.com/data/family/previews/preview/essential-10.png?indexed=1728076368",
        text:"Music is an art form and cultural activity that involves the organization of sound in time. It encompasses various elements such as melody, harmony, rhythm, and timbre, and can evoke a wide range of emotions."
    }

];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

function updatetestimonial(){
       const {name, photoUrl, text} = testimonials[idx]
       imgEl.src = photoUrl
       textEl.innerText = text
       usernameEl.innerText = name
       idx++ 
        if (idx >= testimonials.length) {
               idx = 0;
           }
       setTimeout(()=>{
        updatetestimonial()
       }, 3000)
}
updatetestimonial()