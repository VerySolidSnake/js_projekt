const kubki = ()=>{
    let heightOfCups = [];
    const nrOfCups = prompt("podaj liczbę kubków do napełnienia:"); 
    const kubek = '<div class="cup"><div></div></div>';
    const colorsOfCups = [];
    for(let i=0;i<nrOfCups;i++){
        document.querySelector("#wrapper").innerHTML += kubek;
        colorsOfCups.push(`rgb(${Math.floor(Math.random()*254)+1},${Math.floor(Math.random()*254)+1},${Math.floor(Math.random()*254)+1})`);
    }
    const kubki = Array.from(document.querySelectorAll(".cup div"));
    for (fluid in kubki){
        heightOfCups.push(0);
    }
    for(let i=0;i<nrOfCups;i++){
        kubki[i].style=`height:${heightOfCups[i]}%; background-color: ${colorsOfCups[i]}`;
    }
    for(let i=0;i<nrOfCups;i++){
        document.querySelectorAll(".cup")[i].addEventListener("click",()=>{
            if(heightOfCups[i] >= 90) return;
            else{
                heightOfCups[i] += 30;
                kubki[i].style=`height:${heightOfCups[i]}%;  background-color: ${colorsOfCups[i]}`;
            }
        });
    }
}
window.addEventListener("load",()=>{kubki();})