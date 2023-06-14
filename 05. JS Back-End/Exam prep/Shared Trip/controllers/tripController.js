const tripController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList } = require('../services/tripService');

///////////////////////////////////// CREATE //////////////////////////////
tripController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Trip' });
});

tripController.post('/create', hasUser(), async (req, res) => {

    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        imageUrl: req.body.imageUrl,
        brand: req.body.brand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
        creator: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(trip);
        res.redirect('/trips/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Trip',
            body: trip,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
tripController.get('/catalog', async (req, res) => {
    try {
        const trips = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Trips Catalog',
            trips,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
tripController.get('/:id/details', async (req, res) => {
    try {
        const trip = await getById(req.params.id);

        console.log(trip);

        trip.isOwner = trip.creator.toString() == req.user?._id.toString();
        //book.isOwner = book.owner._id == req.user?._id;
        trip.hasBuddies = trip.buddies.length > 0;

        trip.hasJoined = trip.buddies.map(b => b.toString()).includes(req.user?._id.toString());
        //book.hasWished = book.wishingList.some(b => b == req.user._id);


        res.render('details', { trip, user: req.user, title: 'Trip Details' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
tripController.get('/:id/delete', hasUser(), async (req, res) => {
    const trip = await getById(req.params.id);

    if (trip.creator.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/trips/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
tripController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const trip = await getById(req.params.id);

        if (trip.creator.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Details',
            trip
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

tripController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    try {
        const trip = await getById(req.params.id);

        if (trip.creator.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, req.body);

        res.redirect(`/trips/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            //book: state,
            errors: parseError(error),
            trip: Object.assign(req.body, { _id: req.params.id }),
            //trip: req.body
        });
    }
});


///////////////////////////////////// Join //////////////////////////

tripController.get('/:id/wish', hasUser(), async (req, res) => {
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



module.exports = tripController;