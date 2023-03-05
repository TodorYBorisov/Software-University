async function getInfo() {

    let stopId = document.getElementById('stopId').value;
    let list = document.getElementById('buses');
    let stopName = document.getElementById('stopName');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        let response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        let data = await response.json();

        let name = data.name;
        let busesObj = data.buses;

        stopName.textContent = name;

        list.innerHTML ='';
        
        for (let bus in busesObj ) {

            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${busesObj[bus]} minutes`;
            list.appendChild(li);
        }
    } catch (error) {
        stopName.textContent = 'Error';
        list.innerHTML ='';
    }
};