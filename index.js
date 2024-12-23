const button = document.getElementById("button");
const raitings = document.querySelectorAll(".raitings .raiting");
const container = document.getElementById("container");

let currentRate=null;

function clearActiveRaitings(){
    raitings.forEach(raiting=>{
        raiting.classList.remove("active");
    });
}

raitings.forEach(raiting=>{
    raiting.addEventListener("click", ()=>{
        clearActiveRaitings();
        raiting.classList.add("active");
        currentRate = raiting.id;
    });
});

button.addEventListener("click", ()=>{
    if(currentRate){
        container.innerHTML=`
            <h2>Thanks your sharing your experience</br>Your rating was ${currentRate}.</h2>
        `;
    }
});