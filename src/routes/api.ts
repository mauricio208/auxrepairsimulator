import express from 'express'
import repairbay from '../templates/repairbay'
import selfDiagnostic from '../services/selfDamageDiagnostic'
const router = express.Router()

router.get('/status', (req, res) => {
    const damagedSystem = selfDiagnostic()
    res.cookie('anchorpoint', damagedSystem[1]).send({
        "damaged_system": damagedSystem[0]
    })
})

router.get('/repair-bay', (req, res) => {
    const html = repairbay(req.cookies.anchorpoint)
    res.send(html)
})

router.post('/teapot', (req, res) => {
    res.status(418).send()
})

export default router