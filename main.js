var _temp,
  _humidity,
  _pressure,
  _direction,
  _speed,
  _city,
  city = "Bulawayo",
  _country,
  f_temp_1,
  f_cloud_cover_1,
  f_temp_2,
  f_cloud_cover_2,
  f_temp_3,
  f_cloud_cover_3,
  f_temp_4,
  f_cloud_cover_4,
  f_temp_5,
  f_cloud_cover_5,
  day_1,
  day_2,
  day_3,
  day_4,
  day_5,
  date_1,
  date_2,
  date_3,
  date_4,
  date_5;
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//CURRENT
function Initiate() {
  async function getData() {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=c76d9d1adc3e9036d0461d0031ab5409"
    );
    data = await response.json();
    return data;
  }

  getData().then(function (data) {
    _temp = data.main.temp;
    _humidity = data.main.humidity;
    _pressure = data.main.pressure;
    _direction = data.wind.deg;
    _speed = data.wind.speed;
    _city = data.name;
    _country = data.sys.country;
  });
}

//FORECAST
function forecast() {
  async function getData() {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=c76d9d1adc3e9036d0461d0031ab5409"
    );
    data = await response.json();
    return data;
  }

  getData().then(function (data) {
    //day1
    f_temp_1 = data.list[8].main.temp;
    f_cloud_cover_1 = data.list[8].weather[0].main;
    date_1 = data.list[8].dt_txt;
    //day2
    f_temp_2 = data.list[14].main.temp;
    f_cloud_cover_2 = data.list[14].weather[0].main;
    date_2 = data.list[14].dt_txt;
    //day3
    f_temp_3 = data.list[20].main.temp;
    f_cloud_cover_3 = data.list[20].weather[0].main;
    date_3 = data.list[20].dt_txt;
    //day4
    f_temp_4 = data.list[26].main.temp;
    f_cloud_cover_4 = data.list[26].weather[0].main;
    date_4 = data.list[26].dt_txt;
    //day5
    f_temp_5 = data.list[35].main.temp;
    f_cloud_cover_5 = data.list[35].weather[0].main;
    date_5 = data.list[35].dt_txt;
  });
}

Initiate();
forecast();
function display() {
  document.getElementById("temp").style.cssText =
    "font-size: 80px; margin-top: 55px";
  document.getElementById("temp").innerHTML = Math.round(_temp - 273.15) + "°C";
  document.getElementById("pressure").innerHTML =
    "Pressure: " + _pressure + " mbs";
  document.getElementById("city").innerHTML = _city + ", " + _country;
  document.getElementById("wind-speed").innerHTML = "Speed: " + _speed;
  document.getElementById("wind-direction").innerHTML =
    "Direction: " + _direction;
  document.getElementById("humidity").innerHTML = "Humidity: " + _humidity;

  //getting day
  var d = new Date(date_1);
  var e = new Date(date_2);
  var f = new Date(date_3);
  var g = new Date(date_4);
  var h = new Date(date_5);
  day_1 = days[d.getDay()];
  day_2 = days[e.getDay()];
  day_3 = days[f.getDay()];
  day_4 = days[g.getDay()];
  day_5 = days[h.getDay()];

  //day 1 forecast
  document.getElementById("day-one").innerHTML = day_1;
  document.getElementById("day-one-cloud-cover").innerHTML = f_cloud_cover_1;
  document.getElementById("day-one-temp").innerHTML =
    Math.round(f_temp_1 - 273.15) + "°C";
  //day 2 forecast
  document.getElementById("day-two").innerHTML = day_2;
  document.getElementById("day-two-cloud-cover").innerHTML = f_cloud_cover_2;
  document.getElementById("day-two-temp").innerHTML =
    Math.round(f_temp_2 - 273.15) + "°C";
  //day 3 forecast
  document.getElementById("day-three").innerHTML = day_3;
  document.getElementById("day-three-cloud-cover").innerHTML = f_cloud_cover_3;
  document.getElementById("day-three-temp").innerHTML =
    Math.round(f_temp_3 - 273.15) + "°C";
  //day 4 forecast
  document.getElementById("day-four").innerHTML = day_4;
  document.getElementById("day-four-cloud-cover").innerHTML = f_cloud_cover_4;
  document.getElementById("day-four-temp").innerHTML =
    Math.round(f_temp_4 - 273.15) + "°C";
  //day 5 forecast
  document.getElementById("day-five").innerHTML = day_5;
  document.getElementById("day-five-cloud-cover").innerHTML = f_cloud_cover_5;
  document.getElementById("day-five-temp").innerHTML =
    Math.round(f_temp_5 - 273.15) + "°C";
}

function update() {
  city = document.getElementById("input").value;
  Initiate();
  forecast();
  setTimeout(display, 2000);
  display();
}
