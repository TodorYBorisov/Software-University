const animalController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToDonate } = require('../services/animalService');

///////////////////////////////////// CREATE //////////////////////////////
animalController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Add Post Page' });
});

animalController.post('/create', hasUser(), async (req, res) => {

    const animal = {
        name: req.body.name,
        years: Number(req.body.years),
        kind: req.body.kind,
        imageUrl: req.body.imageUrl,
        need: req.body.need,
        location: req.body.location,
        description: req.body.description,
        owner: req.user._id
    };

    try {
        

        await create(animal);
        res.redirect('/animals/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Add Post Page',
            body: animal,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
animalController.get('/catalog', async (req, res) => {
    try {
        const animals = await getAll();
        res.render('catalog', {
            title: 'Dashboard Page',
            animals
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Dashboard Page'
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
animalController.get('/:id/details', async (req, res) => {
    try {
        const animal = await getById(req.params.id);

        animal.isOwner = animal.owner._id == req.user?._id;
        animal.hasDonate = animal.donations.map(b => b.toString()).includes(req.user?._id.toString());
      
        res.render('details', {
            animal,
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
animalController.get('/:id/delete', hasUser(), async (req, res) => {
    
    const animal = await getById(req.params.id);

    if (animal.owner.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/animals/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
animalController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const animal = await getById(req.params.id);

        if (animal.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            animal
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

animalController.post('/:id/edit', hasUser(), async (req, res) => {
   

    const animalEdited = {
        name: req.body.name,
        years: Number(req.body.years),
        kind: req.body.kind,
        imageUrl: req.body.imageUrl,
        need: req.body.need,
        location: req.body.location,
        description: req.body.description,

    };
    
    try {
        const animal = await getById(req.params.id);

        if (animal.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, animalEdited);

        res.redirect(`/animals/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            animal: req.body
        });
    }
});


///////////////////////////////////// DONATE //////////////////////////

animalController.get('/:id/donate', hasUser(), async (req, res) => {
    try {
        const animal = await getById(req.params.id);

        if (animal.owner.toString() == req.user._id.toString() || animal.donations.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/animals/${req.params.id}/details`);
        }

        await addToDonate(req.params.id, req.user._id);

        res.redirect(`/animals/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = animalController;