const adController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToApplied } = require('../services/adService');

///////////////////////////////////// CREATE //////////////////////////////
adController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

adController.post('/create', hasUser(), async (req, res) => {

    const ad = {
        headline: req.body.headline,
        location: req.body.location,
        company: req.body.company,
        description: req.body.description,
        author: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(ad);
        res.redirect('/ads/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Page',
            body: ad,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
adController.get('/catalog', async (req, res) => {
    try {
        const ads = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Catalog Page',
            ads, //:[] тест с празен масив , че няма нишо в базата
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Catalog Page'
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
adController.get('/:id/details', async (req, res) => {
    try {
        const ad = await getById(req.params.id);

        ad.isOwner = ad.author._id == req.user?._id;
        ad.hasApplied = ad.usersApplied.some(id => id._id == req.user?._id);

        ad.usersApplied.email = ad.usersApplied.map(e => e.email).join('\n');
        ad.usersApplied.skills = ad.usersApplied.map(s => s.skills).join('\n');

        res.render('details', {
            ad,
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
adController.get('/:id/delete', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);

    if (ad.author._id.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/ads/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
adController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const ad = await getById(req.params.id);

        if (ad.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            ad
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

adController.post('/:id/edit', hasUser(), async (req, res) => {

    const adEdited = {
        headline: req.body.headline,
        location: req.body.location,
        company: req.body.company,
        description: req.body.description
    };

    try {
        const ad = await getById(req.params.id);

        if (ad.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, adEdited);

        res.redirect(`/ads/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            ad: req.body
        });
    }
});


///////////////////////////////////// APPLY //////////////////////////

adController.get('/:id/apply', hasUser(), async (req, res) => {
    try {
        const ad = await getById(req.params.id);

        if (ad.author._id.toString() == req.user._id.toString() || ad.usersApplied.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/ads/${req.params.id}/details`);
        }

        await addToApplied(req.params.id, req.user._id);

        res.redirect(`/ads/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = adController;