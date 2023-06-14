const collectionService = {};

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;

        const data = await collectionService.getById(id);//тука data идва от колекцията в базата, трябва да е с нейното име

        res.locals.data = data;
        next();
    };
}
module.exports = preload;