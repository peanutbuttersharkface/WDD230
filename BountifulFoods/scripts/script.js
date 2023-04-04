
const year = new Date().getFullYear()
const lastModified = document.lastModified

document.querySelector("#currentYear").textContent = year
document.querySelector("#lastUpdated").textContent = lastModified

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



 