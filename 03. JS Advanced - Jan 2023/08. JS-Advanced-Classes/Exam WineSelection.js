class WineSelection {

    constructor(space) {

        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.space === 0) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {

        let foundProduct = this.wines.find((wine) => wine.wineName === wineName);

        if (!foundProduct) {

            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (foundProduct.paid) {

            throw new Error(`${wineName} has already been paid.`);

        }
        foundProduct.paid = true;

        this.bill += Number(price);

        return `You bought a ${wineName} for a ${price}$`;

    }

    openBottle(wineName) {

        let index = this.wines.findIndex((wine) => wine.wineName === wineName);
        let foundProduct = this.wines[index];

        if (!foundProduct) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }

        if (!foundProduct.paid) {
            throw new Error(`${wineName} needs to be paid before opening the bottle.`);
        }

        this.wines.splice(index, 1);
       
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let emptySlots = this.space;
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let hasPaid = sortedWines.filter((wine) => wine.paid);
            let notPaid = sortedWines.filter((wine) => !wine.paid);
            let totalBill = sortedWines.reduce((acc, wine) => acc + wine.price, 0);

            let output = `You have space for ${emptySlots} bottles more.\n`;
            output += `You have ${hasPaid.length} paid wines and ${notPaid.length} not paid wines.\n`;
            output += `The total bill is ${totalBill}$.\n`;

            sortedWines.forEach((wine) => {
                let paidStatus = wine.paid ? 'Has Paid' : 'Not Paid';
                output += `${wine.wineName} > ${wine.wineType} - ${paidStatus}.\n`;
            });

            return output;
        }

        let foundWines = this.wines.filter((wine) => wine.wineType === wineType);

        if (foundWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        let sortedWines = foundWines.sort((a, b) => a.wineName.localeCompare(b.wineName));
        let output = '';

        sortedWines.forEach((wine) => {
            let paidStatus = wine.paid ? 'Has Paid' : 'Not Paid';
            output += `${wine.wineName} > ${wine.wineType} - ${paidStatus}.\n`;
        });

        return output;
    }
}



const selection = new WineSelection(2);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));



