const bookController = require('express').Router(); // Правим си самия контролер
const { hasUser } = require('../middlewares/guards');
const { parseError } = require('../util/parser');
const { create, getAll, getById, deleteById, updateById, addToWishList } = require('../services/bookService');

///////////////////////////////////// CREATE //////////////////////////////
bookController.get('/create', hasUser(), async (req, res) => {
    res.render('create', { title: 'Create Book' });
});

bookController.post('/create', hasUser(), async (req, res) => {

    const book = {
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        genre: req.body.genre,
        stars: Number(req.body.stars),
        owner: req.user._id
    };

    try {
        // if (Object.values(hotel).some(v => !v)) {
        //     throw new Error('All fields are required');
        // };

        await create(book);
        res.redirect('/books/catalog');
    } catch (error) {

        res.render('create', {
            title: 'Create Book',
            body: book,
            errors: parseError(error)
        });
    }
});

///////////////////////////////////// CATALOG //////////////////////////////
bookController.get('/catalog', async (req, res) => {
    try {
        const books = await getAll();//викаме всички за да може да изрендим каталога
        res.render('catalog', {
            title: 'Book Catalog',
            books,
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});


///////////////////////////////////// DETAILS //////////////////////////////
bookController.get('/:id/details', async (req, res) => {
    try {
        const book = await getById(req.params.id);

        book.isOwner = book.owner.toString() == req.user?._id.toString();
        //book.isOwner = book.owner._id == req.user?._id;

        book.hasWished = book.wishingList.map(b => b.toString()).includes(req.user?._id.toString());
        //book.hasWished = book.wishingList.some(b => b == req.user._id);


        res.render('details', { book, user: req.user, title: 'Book Details' });
    } catch (error) {
        res.render('details', {
            errors: parseError(error),
        });
    }
});


//////////////////////////////////// DELETE ///////////////////////////////
bookController.get('/:id/delete', hasUser(), async (req, res) => {
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
bookController.get('/:id/edit', hasUser(), async (req, res) => {
    try {
        const book = await getById(req.params.id);

        if (book.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        res.render('edit', {
            title: 'Edit Details',
            book
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }
});

bookController.post('/:id/edit', hasUser(), async (req, res) => {
    //let state = req.body;
    try {
        const book = await getById(req.params.id);

        if (book.owner.toString() != req.user._id.toString()) {
            return res.redirect('/404');
        }

        await updateById(req.params.id, req.body);

        res.redirect(`/books/${req.params.id}/details`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Details',
            //book: state,
            errors: parseError(error),
            book: Object.assign(req.body, { _id: req.params.id })
        });
    }
});


///////////////////////////////////// WISH //////////////////////////

bookController.get('/:id/wish', hasUser(), async (req, res) => {
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



module.exports = bookController;