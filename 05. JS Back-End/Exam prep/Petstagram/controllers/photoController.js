const photoController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList, addComment } = require('../services/photoService');

///////////////////////////////////// CREATE //////////////////////////////
photoController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

photoController.post('/create', hasUser(), async (req, res) => {

    const photo = {
        name: req.body.name,
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(photo);
        res.redirect('/pets/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Page',
            body: photo,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
photoController.get('/catalog', async (req, res) => {
    try {
        const photos = await getAll();//викаме всички за да може да изрендим каталога

        res.render('catalog', {
            title: 'Catalog Page',
            photos//:[] //тест с празен масив , че няма нишо в базата
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Catalog Page'
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
photoController.get('/:id/details', async (req, res) => {
    try {
        const photo = await getById(req.params.id);

        photo.isOwner = photo.owner._id == req.user?._id;
        photo.isNotOwner = photo.owner._id != req.user?._id;
        photo.canComment = photo.owner._id != req.user?._id;
        photo.username = req.user.username;
        
        console.log(photo);
    
        res.render('details', {
            photo,
            title: 'Details Page'
        });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
            title: 'Details Page'
        });
    }
});

photoController.post('/:id/details', async (req, res) => {
    const id = req.params.id; //id-то на снимката
    try {
        
        const comment = {
            userId: req.user._id,
            comment: req.body.comment,
        };
        await addComment(id, comment);

        res.redirect(`/pets/${id}/details`);;
    } catch (error) {
        res.render('details', {
            title: 'Details Page',
            errors: parseError(error),   
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
photoController.get('/:id/delete', hasUser(), async (req, res) => {
    const photo = await getById(req.params.id);

    if (photo.owner._id.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/pets/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
photoController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const photo = await getById(req.params.id);

        if (photo.owner._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Page',
            photo
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Edit Page'
        });
    }
});

photoController.post('/:id/edit', hasUser(), async (req, res) => {

    const photoEdited = {
        name: req.body.name,
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    };
    
    try {
        const photo = await getById(req.params.id);

        if (photo.owner._id.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, photoEdited);

        res.redirect(`/pets/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(error),
            photo: req.body
        });
    }
});


///////////////////////////////////// WISH //////////////////////////

// photoController.get('/:id/wish', hasUser(), async (req, res) => {
//     try {
//         const book = await getById(req.params.id);

//         if (book.owner.toString() == req.user._id.toString() || book.wishingList.map(x => x.toString()).includes(req.user._id.toString())) {
//             return res.redirect(`/books/${req.params.id}/details`);
//         }

//         await addToWishList(req.params.id, req.user._id);

//         res.redirect(`/books/${req.params.id}/details`);
//     } catch (error) {
//         res.render('details', {
//             errors: parseError(error),
//         });
//     }
// });



module.exports = photoController;