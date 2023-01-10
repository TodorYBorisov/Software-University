function furniture(input) {

    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g
    let spendMoney = 0
    let command = input.shift()

    console.log(`Bought furniture:`);

    while (command !== 'Purchase') {

        let product = pattern.exec(command);

        while (product !== null) {
            let furnitureName = product.groups.furniture;
            console.log(`${furnitureName}`)

            let price = Number(product.groups.price);

            let quantity = Number(product.groups.quantity);

            spendMoney += price * quantity

            product = pattern.exec(command);
        }

        command = input.shift()
    }

    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);

