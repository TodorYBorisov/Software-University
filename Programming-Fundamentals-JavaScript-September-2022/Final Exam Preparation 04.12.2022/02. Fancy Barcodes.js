function fancyBarcode(array) {

    let numberOfBarcodes = Number(array.shift());

    let pattern = /@#+[A-Z]([A-Za-z0-9]){4,}[A-Z]@#+/g
    // Почваме с @ и #(безброй) => После имаме главна буква, после поне 4 главни или малки букви,
    //може и цифри и завършва с главна буква(ОБЩО ПОНЕ 6 СИМВОЛА) => Завършва пак с @ и #(безброй)

    for (let i = 0; i < array.length; i++) {
        let barcode = array[i];

        let match = barcode.match(pattern)

        if (match === null) {
            console.log(`Invalid barcode`);
        } else {

            let digits = /\d+/gm;

            let digitMatch = digits.exec(match)

            let numGroup = '';

            if (digitMatch === null) {
                numGroup = '00';
            } else {
                while (digitMatch !== null) {
                    numGroup += digitMatch;
                    digitMatch = digits.exec(match)
                }
            }

            console.log(`Product group: ${numGroup}`);
        }
    }
}
fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);

fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

