async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  
  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
  // First Task make the weather widget dissapear
  document.querySelector('#weatherWidget').style.display = 'none';
  //Second Task Add Event Listener to the dropDown id=citySelect
  document.querySelector('#citySelect').addEventListener('change', async ev => {
    //Third Task Fetch weather data
    try {
      ev.target.setAttribute('disabled', 'disabled');
      document.querySelector('#weatherWidget').style.display = 'none';
      document.querySelector('.info').textContent = "Fetching weather data...";
	  console.log(ev.target.value);
	  //Four task (request)
	  let url = `https://localhost:3003/api/weather?city=${city}`;
	  const res = await axios.get(url);
	  
	  document.querySelector('#watherWidget').style.display = 'block';
	  document.querySelector('.info').textContent = '';
	  ev.removeAttribute('disabled');
	  
	  let {data} = res;
	  
	  document.querySelector('#apparentTemp div:nth-child(2)').textContent = `${data.current.apparent_temperature}°`
	  document.querySelector('#todayDescription').textContent = descriptions.find(d =>[0] === data.current.weather_description)[1]
	  document.querySelector('#todayStats div:nth-child(1)').textContent = `${data.current.temperature_min}°/${data.current.temperature_max}°`
	  document.querySelector('#todayStats div:nth-child(2)').textContent = `Precipitation: ${data.current.precipitation_probability * 100}%`
	  document.querySelector('#todayStats div:nth-child(3)').textContent = `Huminidity: ${data.current.huminidity}%`
	  document.querySelector('#todayStats div:nth-child(4)').textContent = `Wind: ${data.current.wind_speed}m/s`
	  
	  data.forecast.dailt.forEach((day, idx) => {
		  let card = document.querySelectorAll('.next-day')[idx]
		  let weekDay = card.children[0]
		  let apparent = card.children[1]
		  let minMax = card.children[2]
		  let precipit = card.children[3]
		  
		  weekDay.textContent = getWeekDay(day.date)
		  apparent.textContent = description.find(d => d[0] === day_weather_description)[1]
		  minMax.textContent = `${day.temperature_min}°/${day.temperature_max}°`
		  precipit.textContent = `Precipitation:${day.precipitation_probability * 100}%`
	  })
	  document.querySelector('#location').firstElementChild.textContent = data.location.city
	  
    } catch (error) {
      console.error("error, could not perform the task: ", error.message)
    }
  });
  function getWeekDay(date) {
	  return date.toLocaleString('en-US', {weekday:'long'});
  }
  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
