class Weather{
  constructor(city) {
    this.appid = '714912fa12854aabaffe7c38e514dd46';
    this.q = city;
    this.units = 'metric';
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.q}&appid=${this.appid}&units=${this.units}`);

    const weatherData = await response.json();

    return weatherData;
  }

  async changeWeatherLocation(city) {
    this.q = city;
  }
}

