const hotelController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getbyId, updatebyId, deletebyId, bookRoom } = require('../services/hotelService');

///////////////////////////////////// CREATE/ADD //////////////////////////////
hotelController.get('/create', hasUser(), (req, res) => {
    res.render('create', { title: 'Create Hotel' });
});

hotelController.post('/create', hasUser(), async (req, res) => {

    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
        owner: req.user._id,
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(hotel);
        res.redirect('/');
    } catch (error) {

        res.render('create', {
            title: 'Create Hotel',
            body: hotel,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// DETAILS //////////////////////////////
hotelController.get('/:id/details', hasUser(), async (req, res) => {
    try {
        //подаваме го за да може да го достъпим през контекста в темплейта
        const hotel = await getbyId(req.params.id);

        if (hotel.owner.toString() == req.user._id.toString()) {
            hotel.isOwner = true;

            //в темплейа ще добавим още еидн if за втората логика
        } else if (hotel.bookings.map(b => b.toString()).includes(req.user._id.toString())) {
            hotel.isBooked = true;
        }


        res.render('details', { title: 'Hotel Details', hotel });

    } catch (error) {
        res.render('/', {
            errors: parseError(error),
        });
    }


});


///////////////////////////////////// CATALOG //////////////////////////////



//////////////////////////////////// DELETE ///////////////////////////////
hotelController.get('/:id/delete', hasUser(), async (req, res) => {
    const hotel = await getbyId(req.params.id);

    if (hotel.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    try {
        await deletebyId(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
hotelController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        //подаваме го за да може да го достъпим през контекста в темплейта s with
        const hotel = await getbyId(req.params.id);

        if (hotel.owner.toString() != req.user._id.toString()) {
            return res.redirect('/auth/login');
        }

        res.render('edit', {
            title: 'Edit Details',
            hotel,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

hotelController.post('/:id/edit', hasUser(), async (req, res) => {
    try {
        const hotel = await getbyId(req.params.id);

        if (hotel.owner.toString() != req.user._id.toString()) {
            return res.redirect('/auth/login');
        }

        if (Object.values(req.body).some(v => !v)) {
            throw new Error('All fields are required');
        };

        await updatebyId(req.params.id, req.body);
        res.redirect(`/hotel/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            errors: parseError(error),
            hotel: Object.assign(req.body, { _id: req.params.id })

        });
    }
});


///////////////////////////////////// Book/BUY //////////////////////////
hotelController.get('/:id/book', hasUser(), async (req, res) => {
    const hotel = await getbyId(req.params.id);
    try {

        if (hotel.owner.toString() == req.user._id.toString()) {
            hotel.isOwner = true;
            throw new Error('Cannot book your own hotel');

        }


        await bookRoom(req.params.id, req.user._id);
        res.redirect(`/hotel/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            title: 'Hotel Details',
            hotel,
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// SEARCH //////////////////////////////

module.exports = hotelController;