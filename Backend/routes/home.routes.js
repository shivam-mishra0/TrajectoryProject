const router = require('express').Router();
const controller = require('../controllers/index')

router.get('/master', controller.getMasterData);
router.post('/getData/:id', controller.getParticularData)




module.exports = router;