function solve() {

   let addButton = document.querySelectorAll('.add-product');
   let checkButton = document.querySelector('.checkout');

   let inputArea = document.querySelector('textarea');
   let finalList = {};

   for (const add of addButton) {

      add.addEventListener('click', addToCart);
   }
   checkButton.addEventListener('click', checkOut);

   function addToCart(event) {

      let parentElemnt = event.currentTarget.parentElement.parentElement;

      let nameElement = parentElemnt.getElementsByClassName('product-title')[0].textContent;
      let priceElement = Number(parentElemnt.getElementsByClassName('product-line-price')[0].textContent);

      if (finalList[nameElement] === undefined) {
         finalList[nameElement] = 0;
      }
      finalList[nameElement] += priceElement;

      inputArea.textContent += `Added ${nameElement} for ${priceElement.toFixed(2)} to the cart.\n`;
   }

   function checkOut() {

      let totalSum = 0;
      let list = [];

      for (let [product, price] of Object.entries(finalList)) {
         totalSum += Number(price);
         list.push(product);
      }

      // const list = Object.keys(finalList).join(', ');
      // const totalPrice = Object.values(finalList)
      //    .reduce((previousValue, totalSum) => previousValue + totalSum, 0);

      for (let button of addButton) {
         button.setAttribute('disabled', '');
      }
      checkButton.setAttribute('disabled', '');
      
      inputArea.textContent += `You bought ${list.join(', ')} for ${totalSum.toFixed(2)}.`;
   }
};