const { Oven } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const ovens = await Oven.findAll()
            res.send(ovens)
        } catch (error) {
            res.status(500).send({
                error: 'The ovens information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const oven = await Oven.create(req.body)
            res.send(oven.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create oven incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Oven.update(req.body, {
                where: {
                    id: req.params.ovenId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update oven incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const oven = await Oven.findOne({
                where: {
                    id: req.params.ovenId
                }
            })

            if (!oven) {
                return res.status(403).send({
                    error: 'The oven information was incorrect'
                })
            }

            await oven.destroy()
            res.send(oven)
        } catch (error) {
            res.status(500).send({
                error: 'The oven information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const oven = await Oven.findByPk(req.params.ovenId)
            res.send(oven)
        } catch (error) {
            res.status(500).send({
                error: 'The oven information was incorrect'
            })
        }
    }
}