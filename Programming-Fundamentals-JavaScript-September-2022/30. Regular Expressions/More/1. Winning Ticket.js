function winningTicket(input) {

    let ticketArr = input.split(/\s*,\s*/g);

    let winnerTicket = /[\@\#\$\^]{6,10}/gm;
    
    let ticket = ticketArr.shift();

    while (ticket !== undefined) {

        if (ticket.length < 20 || ticket.length > 20) {
            console.log("invalid ticket");
        } else {

            let match = ticket.match(winnerTicket);

            if (match === null) {
                console.log(`ticket "${ticket}" - no match`);
            } else if (ticket.length === 20) {
                let leftSide = match[0];
                let rightSide = match[1];

                let ticketlengthSymbol = match[0].length
                let matchSymbol = match[0][0];

                if ((leftSide.length) >= 6 && (rightSide.length) <= 9) {
                    console.log(`ticket "${ticket}" - ${ticketlengthSymbol}${matchSymbol}`);
                } else if ((leftSide.length) === 10 && (rightSide.length) === 10) {
                    console.log(`ticket "${ticket}" - ${10}${matchSymbol} Jackpot!`);
                }
            }
        }

        ticket = ticketArr.shift();
    }
} 
//winningTicket('validticketnomatch:(')
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
