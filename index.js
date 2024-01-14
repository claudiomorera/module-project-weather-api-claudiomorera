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
    } catch (err) {
      console.error("error, could not perform the task: ${err}");
    }
  });
  
  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
