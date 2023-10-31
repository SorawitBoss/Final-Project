const OvensController = require('./controllers/OvensController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all oven
    app.get('/ovens', OvensController.index)

    // create oven
    app.post('/oven', OvensController.create)

    // edit oven, suspend, active
    app.put('/oven/:ovenId', OvensController.put)

    // delete oven
    app.delete('/oven/:ovenId', OvensController.remove)

    // get oven by id
    app.get('/oven/:ovenId', OvensController.show)}