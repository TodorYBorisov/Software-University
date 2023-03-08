function attachEvents() {

    let inputElement = document.getElementById('location');
    let getBtn = document.getElementById('submit');

    let divDisplay = document.getElementById('forecast');

    let currentDayDiv = document.getElementById('current');
    let upcommingDayDiv = document.getElementById('upcoming');

    let url = 'http://localhost:3030/jsonstore/forecaster/locations';

    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';

    let code = ''; //правим си променлива за кода

    let divElementCurrent = document.createElement('div');  // Създаваме див за текущия ден 
    let divElementUpcoming = document.createElement('div'); // Създаваме див за следващите три дни 

    getBtn.addEventListener('click', getWeather);

    async function getWeather() {

        divElementCurrent.innerHTML = '';
        divElementUpcoming.innerHTML = '';

        divElementCurrent.setAttribute('class', 'forecasts');
        divElementUpcoming.setAttribute('class', 'forecast-info');

        divDisplay.style.display = 'inline';

        try {

            let response = await fetch(url);

            if (response.status !== 200) {
                throw new Error('Error');
            }
            let dataLocation = await response.json();//получаваме инфо за всички локации

            //намираме търсения град в масива от обекти

            let searchedLocation = dataLocation.find(location => location.name === inputElement.value);
            if (searchedLocation === undefined) {
                throw new Error('Error');
            }

            code = searchedLocation.code;

            //правим втората заявка с вече филтрирания код от обекта
            let url2 = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            let responseOneDayForecast = await fetch(url2);
            if (responseOneDayForecast.status !== 200) {
                throw new Error('Error');
            }
            let dataOneDayForecast = await responseOneDayForecast.json();

            //правим трета заявка за триднвна прогноза
            let url3 = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            let responseThreeDayForecast = await fetch(url3);

            if (responseThreeDayForecast.status !== 200) {
                throw new Error('Error');
            }

            let dataThreeDayForecast = await responseThreeDayForecast.json();

            //започваме да правим HTML елементите
            let spanGroup = document.createElement('span');     // Създаваме елементи 
            let conditionSpan = document.createElement('span');
            let temperatureSpan = document.createElement('span');
            let locationSpan = document.createElement('span');
            let iconSpan = document.createElement('span');

            spanGroup.setAttribute('class', 'condition');           // Слагаме им клас 
            conditionSpan.setAttribute('class', 'forecast-data');
            temperatureSpan.setAttribute('class', 'forecast-data');
            locationSpan.setAttribute('class', 'forecast-data');
            iconSpan.setAttribute('class', 'condition symbol');

            locationSpan.textContent = dataOneDayForecast.name;
            temperatureSpan.innerHTML = `${dataOneDayForecast.forecast.low}${degrees}/${dataOneDayForecast.forecast.high}${degrees}`;
            conditionSpan.textContent = dataOneDayForecast.forecast.condition;

            let condition = dataOneDayForecast.forecast.condition;  // Взимаме времето в променлива 
            if (condition === 'Sunny') {                            // Ако времето е слагаме в иконката съответната
                iconSpan.innerHTML = sunny;
            } else if (condition === 'Partly sunny') {
                iconSpan.innerHTML = partlySunny;
            } else if (condition === 'Overcast') {
                iconSpan.innerHTML = overcast;
            } else if (condition === 'Rain') {
                iconSpan.innerHTML = rain;
            }

            spanGroup.appendChild(locationSpan);
            spanGroup.appendChild(temperatureSpan);
            spanGroup.appendChild(conditionSpan);
            divElementCurrent.appendChild(iconSpan);
            divElementCurrent.appendChild(spanGroup);
            currentDayDiv.appendChild(divElementCurrent);

            let nextDay = dataThreeDayForecast.forecast;

            for (let day of nextDay) {

                let spanGroup = document.createElement('span');     // Създаваме елементи 
                let conditionSpan = document.createElement('span');
                let temperatureSpan = document.createElement('span');
                let iconSpan = document.createElement('span');

                spanGroup.setAttribute('class', 'upcoming');           // Слагаме им клас 
                conditionSpan.setAttribute('class', 'forecast-data');
                temperatureSpan.setAttribute('class', 'forecast-data');
                iconSpan.setAttribute('class', 'symbol');

                temperatureSpan.innerHTML = `${day.low}${degrees}/${day.high}${degrees}`;
                conditionSpan.textContent = day.condition;

                let condition = day.condition; // Взимаме времето в променлива 
                if (condition === 'Sunny') {                    // Проверяваме какво е и го слагаме като иконка 
                    iconSpan.innerHTML = sunny;
                } else if (condition === 'Partly sunny') {
                    iconSpan.innerHTML = partlySunny;
                } else if (condition === 'Overcast') {
                    iconSpan.innerHTML = overcast;
                } else if (condition === 'Rain') {
                    iconSpan.innerHTML = rain;
                }

                spanGroup.appendChild(iconSpan);
                spanGroup.appendChild(temperatureSpan);
                spanGroup.appendChild(conditionSpan);
                divElementUpcoming.appendChild(spanGroup);
                upcommingDayDiv.appendChild(divElementUpcoming);
            }

        } catch (error) {
            divElementCurrent.textContent = error.message;
        }
    }
}

attachEvents();