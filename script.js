
    Temperatur();

    function Temperatur(){
    let locations=document.getElementById('location').value;
    const Temperature=document.getElementById('degree');
    const city=document.getElementById('city');
    const wathercondition=document.getElementById('wathercondition');
    const conditionicon=document.getElementById('conditionIcon');
    if(locations=='')
    {
        locations='Dhaka';
    }
    const apiKey = "7155b272f7a80a78d1951ab8c9916a52";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apiKey}&units=metric`;
    fetch(baseUrl)
    .then(res=>res.json())
    .then(data=>{
        Temperature.innerText=data.main.temp;
        city.innerText=data.name;
        wathercondition.innerText=data.weather[0].description;
        conditionicon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
}