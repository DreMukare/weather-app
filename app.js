const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);

const ui = new UI();

// Make getWeather run on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  
  weather.changeWeatherLocation(city);

  storage.setLocationData(city);

  getWeather();

  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(data => {
      ui.paint(data)
    })
    .catch(err => console.log(err));
}