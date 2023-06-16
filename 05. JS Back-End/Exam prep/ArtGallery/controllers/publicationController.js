const publicationController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToShared } = require('../services/publicationService');

///////////////////////////////////// CREATE //////////////////////////////
publicationController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

publicationController.post('/create', hasUser(), async (req, res) => {

    const publication = {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate,
        author: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(publication);
        res.redirect('/publications/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Page',
            body: publication,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
publicationController.get('/catalog', async (req, res) => {
    try {
        const publications = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Catalog Page',
            publications, //:[] тест с празен масив , че няма нишо в базата
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Catalog Page'
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
publicationController.get('/:id/details', async (req, res) => {
    try {
        const publication = await getById(req.params.id);
        
        publication.isOwner = publication.author._id == req.user?._id;
       
        publication.hasShared = publication.shared.map(b => b.toString()).includes(req.user?._id.toString());
       

        publication.shared.title = publication.shared.map(t => t.title).join(', ');

        res.render('details', {
            publication,
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
publicationController.get('/:id/delete', hasUser(), async (req, res) => {
    
    const publication = await getById(req.params.id);

    if (publication.author._id.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/publications/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
publicationController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const publication = await getById(req.params.id);
        
        if (publication.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            publication
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

publicationController.post('/:id/edit', hasUser(), async (req, res) => {
   
    const editedData= {
        title: req.body.title,
        technique: req.body.technique,
        imageUrl: req.body.imageUrl,
        certificate: req.body.certificate

    };
    
    try {
        const publication = await getById(req.params.id);

        if (publication.author._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, editedData);

        res.redirect(`/publications/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            //publication: Object.assign(req.body, { _id: req.params.id }),
            publication: req.body
        });
    }
});


///////////////////////////////////// WISH/SHARE //////////////////////////

publicationController.get('/:id/share', hasUser(), async (req, res) => {
    try {
        const publication = await getById(req.params.id);

        if (publication.author.toString() == req.user._id.toString() || publication.shared.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/publications/${req.params.id}/details`);
        }

        await addToShared(req.params.id, req.user._id);

        res.redirect(`/publications/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = publicationController;