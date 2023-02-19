class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
 
    reserveABottle(wineName, wineType, price) {
        if (this.space === this.wines.length) {
            throw new Error('Not enough space in the cellar.');
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
 
    payWineBottle(wineName, price) {
        const foundWine = this.wines.find((wine) => wine.wineName === wineName);
        if (!foundWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (foundWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        foundWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }
 
    openBottle(wineName) {
        const foundWine = this.wines.find((wine) => wine.wineName === wineName);
        const foundWineIndex = this.wines.findIndex((wine) => wine.wineName === wineName);
        if (!foundWine) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }
        if (!foundWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(foundWineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }
 
    cellarRevision(wineType) {
        const result = [];
 
        const sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
        if (wineType !== undefined) {
            const foundTypesWines = this.wines.find((wine) => wine.wineType === wineType);
            if (!foundTypesWines) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } 
            result.push(`${foundTypesWines.wineName} > ${foundTypesWines.wineType} - ${foundTypesWines.paid ? 'Has Paid' : 'Not Paid'}.`);
        } else {
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            sortedWines.map((wine) => result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`));
        }
        return result.join('\n');
    }
}
