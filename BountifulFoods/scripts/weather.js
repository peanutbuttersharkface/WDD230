

//const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');
//const windSpeed= document.querySelector('#wind-speed');
//const windChill = document. querySelector('#wind-chill');

//const zip = 92008

//const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=9b60de9cb85d53b6b4102f19c69a8921&units=imperial`


//async function apiFetch(){
    
  //try{
    //const response = await fetch(url);
    //if (response.ok){
      //  const data = await response.json();
        //console.log(data);
        
        //displayResults(data);
      
    //}else{
      //  throw Error(await response.text());
   // }
 // } catch(error){
   // console.log(error);
 // }
//} 
//function displayResults(weatherData){
 // const temp = currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  
  
 // const iconsrc =`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  //const desc = weatherData.weather[0].description;
  //const speed = weatherData.wind.speed;
  //const kMH = (speed * 1.609344).toFixed(2);


 // weatherIcon.setAttribute('src', iconsrc);
 // weatherIcon.setAttribute('alt', desc);
 // captionDesc.textContent = desc;
 

 
//}
//apiFetch();

function GetInfo() { 
  
  var newName = document.getElementById("cityInput");
 var cityName = document.getElementById("cityName");
cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c86a5ade60a0cd1cb7da72724c203f8d&units=imperial')
.then(response => response.json())
.then(data => {

 //Getting temp and humidity
 for(i = 0; i<4; i++){
     document.getElementById("day" + (i+1) + "Min").innerHTML = "Temp: " + Number(data.list[i].main.temp ).toFixed(1)+ "°F";
     //Number(1.3450001).toFixed(2); // 1.35
 }

 for(i = 0; i<4; i++){
     document.getElementById("day" + (i+1) + "Max").innerHTML = "Humidity: " + Number(data.list[i].main.humidity ) + "%";
 }
 //------------------------------------------------------------

 //Getting Weather Icons
  for(i = 0; i<4; i++){
     document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
     data.list[i].weather[0].icon
     +".png";
 }
 //------------------------------------------------------------
 console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
 document.getElementById("cityInput").defaultValue = "Carlsbad";
 GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
 if(day + d.getDay() > 6){
     return day + d.getDay() - 7;
 }
 else{
     return day + d.getDay();
 }
}

 for(i = 0; i<4; i++){
     document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
 }
