const cups = ()=>{
    let heightOfCups = [];
    const nrOfCups = prompt("Please insert the number of cups to fill:"); 
    const cup = '<div class="cup"><div></div></div>';
    const colorsOfCups = [];
    for(let i=0;i<nrOfCups;i++){
        document.querySelector("#wrapper").innerHTML += cup;
        colorsOfCups.push(`rgb(${Math.floor(Math.random()*254)+1},${Math.floor(Math.random()*254)+1},${Math.floor(Math.random()*254)+1})`);
    }
    const cups = Array.from(document.querySelectorAll(".cup div"));
    for (fluid in cups){
        heightOfCups.push(0);
    }
    for(let i=0;i<nrOfCups;i++){
        cups[i].style=`height:${heightOfCups[i]}%; background-color: ${colorsOfCups[i]}`;
    }
    for(let i=0;i<nrOfCups;i++){
        document.querySelectorAll(".cup")[i].addEventListener("click",()=>{
            if(heightOfCups[i] >= 90) return;
            else{
                heightOfCups[i] += 30;
                cups[i].style=`height:${heightOfCups[i]}%;  background-color: ${colorsOfCups[i]}`;
            }
        });
    }
}
window.addEventListener("load",()=>{cups();})
