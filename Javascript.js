const apiKey = "8a5aeb2553199f5c05f22c767aea6179";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
console.log("Her")

// Fetching temperature data
fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('oslo')}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(`The temperature in ${data.name} is ${data.main.temp}°C`);
    const svaret = document.getElementById("svar")
    const bakgrunn = document.body
    if(data.main.temp>0){
        svaret.innerHTML="Nei!"
        bakgrunn.style.backgroundColor="black"
        svaret.style.color="white"
    }
    else{
        svaret.innerHTML="Ja!"
        bakgrunn.style.backgroundColor="white"
        svaret.style.color="black"
    }
})
  .catch(error => console.error(error))
