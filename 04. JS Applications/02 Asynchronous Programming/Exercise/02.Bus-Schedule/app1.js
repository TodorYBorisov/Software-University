function solve() {

    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoBox = document.querySelector('.info');

    let stopId = {
        name: null,
        next: 'depot'
    };

    let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;

    async function depart() {

        try {
            let response = await fetch(url);

            if (response.ok === false) {
                throw new Error('StopId not found!');
            }

            let data = await response.json();
            stopId.name = data.name;
            stopId.next = data.next;
            
            departBtn.disabled = true;
            arriveBtn.disabled = false;

            infoBox.textContent = `Next stop ${stopId.name}`;

        } catch (error) {

            infoBox.textContent = 'Error';
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }

    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        
        infoBox.textContent = `Arriving at ${stopId.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();