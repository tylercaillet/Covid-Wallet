const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the router'))

router.get('/covids', controllers.getAllCovid)

router.get('/covids/:id', controllers.getCovidById)

router.post('/covids', controllers.createCovid)

router.put('/covids/:id', controllers.updateCovid)

router.delete('/covids/:id', controllers.deleteCovid)

module.exports = router
