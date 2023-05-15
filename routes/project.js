const express= require('express');
const router = express.Router();
const projectControllers = require('../controllers/projectControllers');

router.post('/create',projectControllers.create);
router.get('/:id', projectControllers.project);
router.post('/:id', projectControllers.createissueform);
module.exports = router;