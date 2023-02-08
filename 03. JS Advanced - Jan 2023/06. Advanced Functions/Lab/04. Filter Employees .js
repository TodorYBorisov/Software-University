function filterEmployee(data, criteria) {

    let dataArr = JSON.parse(data);

    let [key, value] = criteria.split('-');
    let counter = 0;
    for (let line of dataArr) {

        if (line[key] === value) {
            
            console.log(`${counter}. ${line.first_name} ${line.last_name} - ${line.email}`);
            
            counter++;
        };
    }
}
filterEmployee(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);