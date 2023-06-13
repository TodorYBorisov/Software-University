const auctionController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList, bid, close, getAllClose } = require('../services/auctionService');

///////////////////////////////////// CREATE //////////////////////////////
auctionController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Auction' });
});

auctionController.post('/create', hasUser(), async (req, res) => {

    const auction = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        author: req.user._id
    };

    try {
        // if (Object.values(auction).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(auction);
        res.redirect('/auctions/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Auction',
            body: auction,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
auctionController.get('/catalog', async (req, res) => {
    try {
        const auctions = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Auction Catalog',
            auctions,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
let statusDetails;
auctionController.get('/:id/details', async (req, res) => {
    let templateRender = 'details';
    try {
        const auctions = await getById(req.params.id);

        auctions.isOwner = auctions.author._id.toString() == req.user?._id.toString();
        //auctions.isOwner = auctions.author._id == req.user?._id;

        if (auctions.isOwner) {
            templateRender = 'details-owner';
        }

        auctions.hasBidder = auctions.bidder.length > 0;
        auctions.highestBidder = auctions.bidder[auctions.bidder.length - 1]?._id == req.user?._id;
        auctions.highestBidderInfo = auctions.bidder[auctions.bidder.length - 1]?.firstName + ' ' + auctions.bidder[auctions.bidder.length - 1]?.lastName;



        statusDetails = auctions;
        res.render(templateRender, { auctions, user: req.user, title: 'Auction Details' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});

auctionController.post('/:id/details', async (req, res) => {
    const amount = Number(req.body.amount);
    try {
        const auctions = await getById(req.params.id);

        if (amount <= auctions.price) {
            throw new Error('Your bid must be higher');
        }

        await bid(req.params.id, req.user._id, amount);
        res.redirect(`/auctions/${req.params.id}/details`);


    } catch (error) {
        res.render('details', {
            errors: parseError(error),
            auctions: statusDetails
        });
    }

});



//////////////////////////////////// DELETE ///////////////////////////////
auctionController.get('/:id/delete', hasUser(), async (req, res) => {
    const auctions = await getById(req.params.id);

    if (auctions.author._id.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/auctions/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
auctionController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const auctions = await getById(req.params.id);

        if (auctions.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }
        auctions.hasBidder = auctions.bidder.length > 0;
        res.render('edit', {
            title: 'Edit Details',
            auctions
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

auctionController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    try {
        const auctions = await getById(req.params.id);

        if (auctions.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, req.body);

        res.redirect(`/auctions/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            //book: state,
            errors: parseError(error),
            auctions: Object.assign(req.body, { _id: req.params.id })
        });
    }
});


///////////////////////////////////// WISH //////////////////////////

auctionController.get('/:id/wish', hasUser(), async (req, res) => {
    try {
        const book = await getById(req.params.id);

        if (book.owner.toString() == req.user._id.toString() || book.wishingList.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/books/${req.params.id}/details`);
        }

        await addToWishList(req.params.id, req.user._id);

        res.redirect(`/books/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});


///////////////////  AUCTIONS ///////////////////
auctionController.get('/:id/closed', async (req, res) => {
    try {
        await close(req.params.id);
        res.redirect('/auctions/closed');
    }
    catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }

});
////////////////////////// CLOSED AUCTIONS ///////////////////////////
auctionController.get('/closed', async (req, res) => {
    try {

        const closedAuctions = await getAllClose();

        if (closedAuctions.length > 0) {
            closedAuctions.forEach(a => a.highestBidderInfo = a.bidder[a.bidder.length - 1]?.firstName + ' ' + a.bidder[a.bidder.length - 1]?.lastName);
        }

        res.render('closed-auctions', {
            title: 'Closed Auctions',
            closedAuctions
        });

    } catch (error) {
        res.render('closed-auctions', {
            errors: parseError(error),
        });
    }
});



module.exports = auctionController;