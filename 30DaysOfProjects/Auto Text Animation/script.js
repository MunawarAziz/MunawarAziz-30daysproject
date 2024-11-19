const container = document.querySelector(".container")

const careers = ['instructor', 'tiktoker', 'web developer', 'free lancer']

let careerindex = 0;

let charactorindex = 0;

updateText()

function updateText(){
    charactorindex++
    container.innerHTML = `<h1>I am  ${careers[careerindex].slice(0,charactorindex)}</h1>`;
    
    if(charactorindex === careers[careerindex].length){
        careerindex++
        charactorindex = 0
    }
    if(careerindex === careers.length){
        careerindex = 0;
    }
    setTimeout(updateText ,400 );
}

