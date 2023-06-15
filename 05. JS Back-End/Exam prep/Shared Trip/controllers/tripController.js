const tripController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getById, deleteById, updateById, joinTrip, getAll } = require('../services/tripService');


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
            trips //: [] за тест като няма данни в базата
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Trips Catalog'
        });
    }
});

///////////////////////////////////// DETAILS //////////////////////////////
tripController.get('/:id/details', async (req, res) => {
    try {
        const trip = await getById(req.params.id);

        trip.isOwner = trip.creator._id == req.user?._id;
        
        trip.hasBuddies = trip.buddies.length > 0;

        trip.hasJoin = trip.buddies.some(id => id._id == req.user?._id);
        
        trip.buddies.email = trip.buddies.map(e => e.email).join(', ');
        
        trip.leftSeats = trip.seats - trip.buddies.length;

        trip.avalaibleSeats = trip.seats - trip.leftSeats;

        trip.hasSeats = trip.leftSeats != 0;

        res.render('details', { trip, user: req.user, title: 'Details Page' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
            title: 'Details Page'
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
tripController.get('/:id/delete', hasUser(), async (req, res) => {
    const trip = await getById(req.params.id);

    if (trip.creator._id.toString() != req.user._id.toString()) {
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

        if (trip.creator._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            trip
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

tripController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;

    //махаме само creator/owner от edit
    const tripEdited = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        imageUrl: req.body.imageUrl,
        brand: req.body.brand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
    };

    try {
        const trip = await getById(req.params.id);

        if (trip.creator._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, tripEdited);

        res.redirect(`/trips/${req.params.id}/details`);
    } catch (error) {

        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            //book: state,
            //trip: Object.assign(req.body, { _id: req.params.id }),
            trip: req.body,
        });
    }
});


///////////////////////////////////// JOIN //////////////////////////

tripController.get('/:id/join', hasUser(), async (req, res) => {
    try {
        const trip = await getById(req.params.id);

        if (trip.creator.toString() == req.user._id.toString() || trip.buddies.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/trips/${req.params.id}/details`);
        }

        await joinTrip(req.params.id, req.user._id);

        res.redirect(`/trips/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = tripController;