var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDate = new Date();
var dayIndex = currentDate.getDay();
var dayName = daysOfWeek[dayIndex];
const day1 = daysOfWeek[(dayIndex)+1]
const day2 = daysOfWeek[(dayIndex)+2]
const day3 = daysOfWeek[(dayIndex)+3]
const day4 = daysOfWeek[(dayIndex)+4]
const day5 = daysOfWeek[(dayIndex)+5]
const day6 = daysOfWeek[(dayIndex)+6]
const day7 = daysOfWeek[(dayIndex)+7]

document.getElementById('currentDay').innerHTML = dayName
document.getElementById('day1').innerHTML = day1
document.getElementById('day2').innerHTML = day2
document.getElementById('day3').innerHTML = day3
document.getElementById('day4').innerHTML = day4
document.getElementById('day5').innerHTML = day5
document.getElementById('day6').innerHTML = day6
document.getElementById('day7').innerHTML = day7



// api data

apiKey = "1e18da7c6a5c3e5e4ee990880a67c724"
function currentWeather(){
  const city = document.getElementById("searchField").value ;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperature = (data.main.temp)-273
    const wind = data.wind.speed
    const humidity = data.main.humidity

    document.getElementById("currentTemp").innerHTML = temperature.toFixed(0) + "°"
    document.getElementById("currentWind").innerHTML = wind 
    document.getElementById("currentHumidity").innerHTML = humidity 

    console.log(data)
  })
  .catch(error => console.log(error));



  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(url)
   .then(response => response.json())
   .then(data => {
      const forecast = data.list.slice(0,7);
      const temperature1 = (forecast[0].main.temp)-273
      const temperature2 = (forecast[1].main.temp)-273
      const temperature3 = (forecast[2].main.temp)-273
      const temperature4 = (forecast[3].main.temp)-273
      const temperature5 = (forecast[4].main.temp)-273
      const temperature6 = (forecast[5].main.temp)-273
      const temperature7 = (forecast[6].main.temp)-273
      // for(i=0; i<=7; i++){
      //   temperature = (forecast[i].main.temp)-273
      //   document.getElementById("temperature").innerHTML = temperature.toFixed(0)
      // }
      document.getElementById("temperature1").innerHTML = temperature1.toFixed(0) + "°"
      document.getElementById("temperature2").innerHTML = temperature2.toFixed(0) + "°"
      document.getElementById("temperature3").innerHTML = temperature3.toFixed(0) + "°"
      document.getElementById("temperature4").innerHTML = temperature4.toFixed(0) + "°"
      document.getElementById("temperature5").innerHTML = temperature5.toFixed(0) + "°"
      document.getElementById("temperature6").innerHTML = temperature6.toFixed(0) + "°"
      document.getElementById("temperature7").innerHTML = temperature7.toFixed(0) + "°"
      console.log(forecast); 
   })
   .catch(error => console.log(error));

}



 


