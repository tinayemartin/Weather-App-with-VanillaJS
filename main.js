var _temp, _humidity, _pressure, _direction, _speed, _city, city="Bulawayo", _country;

function Initiate(){
async function getData(){
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=c76d9d1adc3e9036d0461d0031ab5409');
        data = await response.json()
        return data;
}

getData().then(
    function(data){
        _temp = data.main.temp;
        _humidity = data.main.humidity;
        _pressure = data.main.pressure;
        _direction = data.wind.deg;
        _speed = data.wind.speed;
        _city = data.name;
        _country = data.sys.country;
      }
)
    }
    
    Initiate();

    function display() {
        document.getElementById('temp').style.cssText = "font-size: 80px; margin-top: 55px";
        document.getElementById('temp').innerHTML = Math.round(_temp-273.15) + "°C";
        document.getElementById('pressure').innerHTML = "Pressure: " +_pressure + " mbs";
        document.getElementById('city').innerHTML = _city +", " + _country;
        document.getElementById('wind-speed').innerHTML = "Speed: " + _speed;
        document.getElementById('wind-direction').innerHTML = "Direction: " +_direction;
        document.getElementById('humidity').innerHTML = "Humidity: " +_humidity;
    }

function update(){
        city = document.getElementById('input').value;
        Initiate();
        setTimeout(display, 2000);
        display();
    }