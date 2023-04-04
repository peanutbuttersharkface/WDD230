const visitsDisplay = document.querySelector("#visits");

const date = new Date();
const currTime = date.getTime();

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if(numVisits <= 1 ){
    const lastVisitTime = localStorage.getItem('lastVisitTime');
    let timeDiff = currTime - lastVisitTime;
    let daysSinceVisit = timeDiff / (1000 * 3600 * 24);
    visitsDisplay.textContent = Math.round(daysSinceVisit);
    
}else{
    visitsDisplay.textContent = "O";
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem('lastVisitTime', currTime);