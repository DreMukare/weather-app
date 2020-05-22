class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.tempString = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feels_like = document.getElementById('w-feels-like');
    this.temp_max = document.getElementById('w-temp-max');
    this.temp_min = document.getElementById('w-temp-min');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
  }

  async paint(data) {
    this.location.textContent = data.name;
    this.description.textContent = `General description: ${data.weather[0].description}`;
    this.tempString.textContent = `Current Temperature: ${data.main.temp}`;
    // this.icon.setAttribute('src', data.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${data.main.humidity}`;
    this.feels_like.textContent = `Feels Like: ${data.main.feels_like}`;
    this.temp_max.textContent = `Max Temperature: ${data.main.temp_max}`;
    this.temp_min.textContent = `Min Temperature: ${data.main.temp_min}`;
    this.wind.textContent = `Wind Speed: ${data.wind.speed}`;
    this.visibility.textContent = `Visibility: ${data.visibility}`;
  }
}
