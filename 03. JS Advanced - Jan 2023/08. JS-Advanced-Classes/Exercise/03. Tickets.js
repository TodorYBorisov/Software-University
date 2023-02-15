function tickets(array, string) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    for (let line of array) {

        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);

        result.push(ticket);
    }

    if (string === 'destination') {
        result = result.sort((a, b) => a[string].localeCompare(b[string]));
    } else if (string === 'price') {
        result = result.sort((a, b) => a[string] - b[string]);
    } else if (string === 'status') {
        result = result.sort((a, b) => a[string].localeCompare(b[string]));
    }

    return result;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);