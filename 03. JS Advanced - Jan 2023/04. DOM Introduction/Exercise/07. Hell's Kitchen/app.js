function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelectorAll('#inputs textarea')[0].value);

      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {

         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         let restName = entry[0];
         let values = Object.values(entry[1]);

         for (let salary of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;

         if (avgSalary > currentAvgSalary) {

            currentAvgSalary = avgSalary;
            bestName = restName;
            totalSalary = 0;
         }
      }

      let sortedBySalary = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

      let print = '';

      for (let worker of sortedBySalary) {

         print += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      }

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${sortedBySalary[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
   }
}