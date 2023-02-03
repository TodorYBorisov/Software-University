function solve() {

   let addButton = document.getElementsByClassName('add-product');
   let checkButton = document.getElementsByClassName('checkout')[0];

   let inputArea = document.querySelector('textarea');
   let finalList = {};

   for (const add of addButton) {

      add.addEventListener('click', addToCart);
   }
   checkButton.addEventListener('click', checkOut);

   function addToCart(event) {

      let parentElemnt = event.target.parentElement.parentElement;

      let nameElement = parentElemnt.getElementsByClassName('product-title')[0].textContent;
      let priceElement = Number(parentElemnt.getElementsByClassName('product-line-price')[0].textContent);

      if (finalList[nameElement] === undefined) {
         finalList[nameElement] = 0;
      }
      finalList[nameElement] += priceElement;

      inputArea.textContent += `Added ${nameElement} for ${priceElement.toFixed(2)} to the cart.\n`;
   }

   function checkOut() {
      let arry = Object.entries(finalList);
      let totalSum = 0;
      let list = '';

      for (let [product, price] of arry) {
         totalSum += Number(price);
         list += `${product}, `;
      }

      inputArea.textContent += `You bought ${list} for ${totalSum.toFixed(2)}.`;

      for (let button of addButton) {
         button.setAttribute('disabled', '');
      }
      checkButton.setAttribute('disabled', '');
   }

}