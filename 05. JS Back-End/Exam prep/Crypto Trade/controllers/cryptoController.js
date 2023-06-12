const cryptoController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToBuyACrypto } = require('../services/cryptoService');

///////////////////////////////////// CREATE //////////////////////////////
cryptoController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Offer' });
});

cryptoController.post('/create', hasUser(), async (req, res) => {

    const crypto = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        payment: req.body.payment,
        owner: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(crypto);
        res.redirect('/cryptos/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Offer',
            body: crypto,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
cryptoController.get('/catalog', async (req, res) => {
    try {
        const cryptos = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Crypto Catalog',
            cryptos,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
cryptoController.get('/:id/details', async (req, res) => {
    try {
        const crypto = await getById(req.params.id);

        crypto.isOwner = crypto.owner.toString() == req.user?._id.toString();
        //book.isOwner = book.owner._id == req.user?._id;

        crypto.hasBought = crypto.buyACrypto.map(b => b.toString()).includes(req.user?._id.toString());
        //book.hasWished = book.wishingList.some(b => b == req.user._id);


        res.render('details', { crypto, user: req.user, title: 'Crypto Details' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
cryptoController.get('/:id/delete', hasUser(), async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner.toString() != req.user._id.toString()) {
        return res.redirect('/404');
    }

    try {
        await deleteById(req.params.id);
        res.redirect('/books/catalog');
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

///////////////////////////////////// EDIT ////////////////////////////////
cryptoController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const crypto = await getById(req.params.id);

        if (crypto.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Details',
            crypto
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

cryptoController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    try {
        const book = await getById(req.params.id);

        if (book.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, req.body);

        res.redirect(`/cryptos/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            //book: state,
            errors: parseError(error),
            book: Object.assign(req.body, { _id: req.params.id })
        });
    }
});


///////////////////////////////////// BUY //////////////////////////

cryptoController.get('/:id/buy', hasUser(), async (req, res) => {
    try {
        const crypto = await getById(req.params.id);

        if (crypto.owner.toString() == req.user._id.toString() || crypto.buyACrypto.map(x => x.toString()).includes(req.user._id.toString())) {
            return res.redirect(`/cryptos/${req.params.id}/details`);
        }

        await addToBuyACrypto(req.params.id, req.user._id);
        
        res.redirect(`/cryptos/${req.params.id}/details`);
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});



module.exports = cryptoController;