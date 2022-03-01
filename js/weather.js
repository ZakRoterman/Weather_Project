const token = '8cc87688a0ef542d5eade1665462acf3'
const bgimg = 'https://www.halachipedia.com/images/0/04/Lightning.JPG';
document.body.style.backgroundImage = `url(${bgimg})`;
document.body.style.backgroundSize = "cover"

SubmitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let zipCode = document.getElementById("zipCode").value;
    doAPICall(zipCode);
    console.log(document.getElementById('zipCode'));
};

function SubmitButton(){
    let button = document.getElementById("button");
    button.addEventListener('click', (e)=>handleSubmit(e));
};

function fahrenheit(k){
    f = ((k-273.15)*1.8)+32
    return f
}

async function doAPICall(zipCode){
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${token}`);
    console.log(result);

    result = result.data;
        
    let high = result.main.temp_max;
    console.log(high);
    let fhigh = fahrenheit(high);
    console.log(fhigh);
    let low = result.main.temp_min;
    console.log(low);
    let flow = fahrenheit(low);
    console.log(flow);
    let forecast = result.weather[0].description;
    console.log(forecast);
    let humidity = result.main.humidity;
    console.log(humidity);

    li = document.createElement('li');
    
    hi=document.getElementById('high');
    hi.innerText=`High: ${fhigh}`;

    lo=document.getElementById('low');
    lo.innerText=`Low: ${flow}`;

    fore=document.getElementById('fore');
    fore.innerText=`Forecast: ${forecast}`;

    hum=document.getElementById('hum');
    hum.innerText=`Humidity: ${humidity}`;   
};