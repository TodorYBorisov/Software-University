const estateController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList, rentHouse } = require('../services/estateService');

///////////////////////////////////// CREATE //////////////////////////////
estateController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

estateController.post('/create', hasUser(), async (req, res) => {

    const estate = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        pieces: Number(req.body.pieces),
        owner: req.user._id
    };


    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(estate);
        res.redirect('/estates/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Page',
            body: estate,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
estateController.get('/catalog', async (req, res) => {
    try {
        const estates = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Catalog Page',
            estates
            //:[] тест с празен масив , че няма нишо в базата
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Catalog Page'
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
estateController.get('/:id/details', async (req, res) => {
    try {
        const estate = await getById(req.params.id);

        estate.isOwner = estate.owner._id == req.user?._id;
        estate.hasTenants = estate.rented.length > 0;
        estate.hasRent = estate.rented.some(id => id._id == req.user?._id);
        estate.rented.name = estate.rented.map(n => n.name).join(', ');
        //estate.leftPieces = estate.pieces - estate.rented.length;
        estate.avalaiblePieces = estate.pieces; //- estate.leftPieces;
        //estate.hasPieces = estate.leftPieces != 0;
        estate.hasPieces = estate.rented.length;

        res.render('details', {
            estate,
            user: req.user,
            title: 'Details Page'
        });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
            title: 'Details Page'
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
estateController.get('/:id/delete', hasUser(), async (req, res) => {
    const estate = await getById(req.params.id);

    if (estate.owner._id.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/estates/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
estateController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const estate = await getById(req.params.id);

        if (estate.owner._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            estate
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

estateController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    //трябва да махмнем само creator/owner от обекта

    const editedData = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        pieces: Number(req.body.pieces),
    };

    try {
        const estate = await getById(req.params.id);

        console.log(estate);

        if (estate.owner._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, editedData);

        res.redirect(`/estates/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            //book: state,
            //book: Object.assign(req.body, { _id: req.params.id }),
            estate: req.body
        });
    }
});


///////////////////////////////////// RENT//////////////////////////

estateController.get('/:id/rent', hasUser(), async (req, res) => {
    try {
        const estate = await getById(req.params.id);

        if (estate.owner.toString() == req.user._id.toString() || estate.rented.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/estates/${req.params.id}/details`);
        }

        await rentHouse(req.params.id, req.user._id);

        res.redirect(`/estates/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = estateController;