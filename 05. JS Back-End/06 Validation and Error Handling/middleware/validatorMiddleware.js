exports.isEmail = (req, res, next) => {
    const email = req.body.email;

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
    
    if (!emailPattern.test(email)) {

        return res.redirect('/404');
    }
    next();
};