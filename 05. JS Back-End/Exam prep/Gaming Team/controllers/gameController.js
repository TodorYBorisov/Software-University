const gameController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList } = require('../services/gameService');

///////////////////////////////////// CREATE //////////////////////////////
gameController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Game' });
});

gameController.post('/create', hasUser(), async (req, res) => {

    const game = {
        platform: req.body.platform,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        genre: req.body.genre,
        description: req.body.description,
        owner: req.user._id
    };

    //това не го слага в модела
    //•	boughtBy: a collection (array) of users (references to the "User" model)

    try {
        // if (Object.values(game).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(game);
        res.redirect('/games/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Game',
            body: game,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
gameController.get('/catalog', async (req, res) => {
    try {
        const games = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Game Catalog',
            games,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
gameController.get('/:id/details', async (req, res) => {
    try {
        const game = await getById(req.params.id);

        game.isOwner = game.owner.toString() == req.user?._id.toString();
        //game.isOwner = game.owner._id == req.user?._id;

        game.hasBought = game.boughtBy.map(b => b.toString()).includes(req.user?._id.toString());
        //game.hasWished = game.boughtBy.some(b => b == req.user._id);


        res.render('details', { game, user: req.user, title: 'Game Details' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
gameController.get('/:id/delete', hasUser(), async (req, res) => {
    const game = await getById(req.params.id);

    if (game.owner.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/games/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
gameController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const game = await getById(req.params.id);

        if (game.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Details',
            game
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

gameController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    try {
        const game = await getById(req.params.id);

        if (game.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, req.body);

        res.redirect(`/games/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            //book: state,
            errors: parseError(error),
            game: Object.assign(req.body, { _id: req.params.id })
        });
    }
});


///////////////////////////////////// WISH/BUY //////////////////////////

gameController.get('/:id/buy', hasUser(), async (req, res) => {
    try {
        const game = await getById(req.params.id);

        if (game.owner.toString() == req.user._id.toString() || game.boughtBy.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/games/${req.params.id}/details`);
        }

        await addToWishList(req.params.id, req.user._id);
        
        res.redirect(`/games/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});

///////////////////////////// BONUS SEARCH//////////////////////////////


module.exports = gameController;